# bootshiro

## 自己在前后端分离上的实践    

要想实现完整的前后端分离，安全这块是绕不开的，这个系统主要功能就是动态restful api管理，这次实践包含两个模块,基于```springBoot + shiro```搭建的权限管理系统后台**bootshiro**, ```angular5 + typeScript```编写的前端管理**usthe**。(ps:考虑到我幼小的心灵和水平,大神误喷啊^_^~)  

### 项目的基础框架设计：    

```总的长这样~```:  
![image1](/image/image1.PNG)  

<br>

#### 前端usthe  

基于```angular5 + angular-cli + typeScript + rxjs + bootstrap + adminLTE```,践行angular最佳实践。  
过程中node,webpack等有用到过,但我不熟。。。

#### 后端bootshiro  

基于```springboot + apache shiro + mybatis```框架，restful风格api，自定义状态码，json-web-token，druid数据库连接池，swagger文档生成，redis存储refreshtoken和动态秘钥，maven，MD5单向加密和AES双向等。。。  

#### gate -nginx  

这个nginx作为反向代理服务器，解决了跨域请求的问题。另一个nginx作为angular应用服务器，tomcat作为bootshiro的服务器。  

反向代理的nginx.conf见: [conf](https://github.com/tomsun28/DockerFile/blob/master/nginx/nginx.conf)  

#### 持续集成  

```流程长这样~```  
![image1](/image/image2.PNG)  

详细实现技术见另一篇:  [docker学习](usthe.com/2017/12/docker_learn/)  

<br>

### 一些实现细节方案  

对加密认证签发，api动态权限，token过期刷新，前后端交互等等实现的细节，慢慢更。  
<br>
<br>


#### 密码动态加密解密     

在用户密码登录认证中,明文传输用户输入的密码是不可取的。在没有用https的情况下，这里需要对用户密码加密传输，保证即使密码泄露也不影响。  

这里的前后端加密解密下图:     

![image3](/image/image3.PNG)  

由于介绍的是动态加密解密传输信息方案，这里并不会涉及之后的JWT签发等。  
下面是实现细节:  
angular 前端发送get动态秘钥请求后会对对象进行监听，在回调函数里获取后端返回的秘钥后再进行加密处理，之后再发送登录请求。在angular我把请求服务化了，下面的代码片段会有点凌乱。  

````
 // 调用获取tokenKey秘钥服务
    this.loginService.getTokenKey().subscribe(
      data => {
        this.responseData = data;
        if (this.responseData.data.tokenKey !== undefined) {
          const tokenKey = this.responseData.data.tokenKey;
          // 调用服务，发送认证请求
          this.loginService.login(this.appId, this.password, tokenKey).subscribe(
            data2 => {
              // 认证成功返回jwt
              this.responseData = data2;
              if (this.responseData.meta.code === 1003 && this.responseData.data.jwt != null) {
                this.authService.updateAuthorizationToken(this.responseData.data.jwt);
                this.authService.updateUid(this.appId);
                this.authService.updateUser(this.responseData.data.user);
                this.router.navigateByUrl('/index');
              } else {
                this.msg = '用户名密码错误';
                this.isDisabled = true;
              }
            },
            error => {
              console.error(error);
              this.msg = error;
              this.isDisabled = true;
            }
          );
        }
      }
    );

````

````
@Injectable()
export class LoginService {
  constructor(private httpUtil: HttpUtil) {
  }
  getTokenKey() {
    const url = 'account/login?tokenKey=get';
    // 先向后台申请加密tokenKey tokenKey=get
    // const getKeyParam = new HttpParams().set('tokenKey', 'get');
    return this.httpUtil.get(url);
  }

  login(appId: string, password: string, tokenKey: string) {
    const url = 'account/login';
    tokenKey = CryptoJS.enc.Utf8.parse(tokenKey);
    password = CryptoJS.enc.Utf8.parse(password);
    password = CryptoJS.AES.encrypt(password, tokenKey, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7}).toString();
    console.log(password);
    const param = new HttpParams().append('appId', appId)
      .append('password', password)
      .append('methodName', 'login')
      .append('timestamp', new Date().toUTCString());
    return this.httpUtil.post(url, param);
  }
}

````

后端是在一个filter中对登录注册请求进行拦截，判断其是正常登录注册还是获取动态加密秘钥请求，正常认证就走shiro，判断为获取秘钥则生成16随机码```默认AES加密秘钥为约定16位，小于16位会报错```，将秘钥以<远程IP，秘钥>的<key,value>形式存储到redis，设置其有效时间为5秒```5秒看自己情况不要太大也不要太短，设置有效期是为了防止被其他人截取到加密密码冒充用户的情况，把风险降更低```。  

````
 // 判断若为获取登录注册加密动态秘钥请求
        if (isPasswordTokenGet(request)) {
            //动态生成秘钥，redis存储秘钥供之后秘钥验证使用，设置有效期5秒用完即丢弃
            String tokenKey = CommonUtil.getRandomString(16);
            try {
                redisTemplate.opsForValue().set("PASSWORD_TOKEN_KEY_"+request.getRemoteAddr().toUpperCase(),tokenKey,5, TimeUnit.SECONDS);
                // 动态秘钥response返回给前端
                Message message = new Message();
                message.ok(1000,"issued tokenKey success")
                        .addData("tokenKey",tokenKey);
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);

            }catch (Exception e) {
                LOGGER.warn(e.getMessage(),e);
                // 动态秘钥response返回给前端
                Message message = new Message();
                message.ok(1000,"issued tokenKey fail");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);
            }
            return false;
        }

````

````
// 创建认证信息,其中就有包括获取redis中对应IP的动态秘钥
    private AuthenticationToken createPasswordToken(ServletRequest request) {
        Map<String ,String> map = RequestResponseUtil.getRequestParameters(request);
        String appId = map.get("appId");
        String timestamp = map.get("timestamp");
        String password = map.get("password");
        String host = request.getRemoteAddr();
        String tokenKey = redisTemplate.opsForValue().get("PASSWORD_TOKEN_KEY_"+host.toUpperCase());
        return new PasswordToken(appId,password,timestamp,host,tokenKey);
    }
````

#### jwt令牌(json web token)  

jwt是自包含的令牌,自包含即整个令牌已经包含自己的角色，权限，用户信息等各种认证一个用户的必要信息，这样就不用后端根据用户标识再去数据库查询对应用户的角色权限等。  

jwt包含头信息,载荷信息，签名信息三个部分:  

````
Header //头信息
{
  "alg": "HS256",  //摘要算法
  "typ": "JWT"     //token类型
}
payload //载荷信息
{
  "sub": "1234567890", //用户标识,subject
  "name": "John Doe",  //用户名
  "exp": "Mon Nov 13 15:28:41 CST 2018" //有效期
}
verify signature //签名信息
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
secret
)
````
详细到官网[jwt](https://jwt.io)试一波吧，输入对应信息可以生成JWT  

jwt签发解析使用的是jjwt,maven导入如下:

````
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt</artifactId>
			<version>0.9.0</version>
		</dependency>
````

jwt签发解析工具类:  

````

/* *
 * @Author tomsun28
 * @Description 
 * @Date 16:29 2018/3/8
 */
public class JsonWebTokenUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(JsonWebTokenUtil.class);

    public static final String SECRET_KEY = "?::4343fdf4fdf6cvf):";
    private static final ObjectMapper MAPPER = new ObjectMapper();
    private static  CompressionCodecResolver CODECRESOLVER = new DefaultCompressionCodecResolver();
    /* *
     * @Description  json web token 签发
     * @param id 令牌ID
     * @param subject 用户ID
     * @param issuer 签发人
     * @param period 有效时间(毫秒)
     * @param roles 访问主张-角色
     * @param permissions 访问主张-权限
     * @param algorithm 加密算法
     * @Return java.lang.String
     */
    public static String issueJWT(String id,String subject, String issuer, Long period, String roles, String permissions, SignatureAlgorithm algorithm) {
        // 当前时间戳
        Long currentTimeMillis = System.currentTimeMillis();
        // 秘钥
        byte[] secreKeyBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        JwtBuilder jwtBuilder = Jwts.builder();
        if (!StringUtils.isEmpty(id)) {
            jwtBuilder.setId(id);
        }
        if (!StringUtils.isEmpty(subject)) {
            jwtBuilder.setSubject(subject);
        }
        if (!StringUtils.isEmpty(issuer)) {
            jwtBuilder.setIssuer(issuer);
        }
        // 设置签发时间
        jwtBuilder.setIssuedAt(new Date(currentTimeMillis));
        // 设置到期时间
        if (null != period) {
            jwtBuilder.setExpiration(new Date(currentTimeMillis+period*1000));
        }
        if (!StringUtils.isEmpty(roles)) {
            jwtBuilder.claim("roles",roles);
        }
        if (!StringUtils.isEmpty(permissions)) {
            jwtBuilder.claim("perms",permissions);
        }
        // 压缩，可选GZIP
        jwtBuilder.compressWith(CompressionCodecs.DEFLATE);
        // 加密设置
        jwtBuilder.signWith(algorithm,secreKeyBytes);

        return jwtBuilder.compact();
    }

    /**
     * 解析JWT的Payload
     */
    public static String parseJwtPayload(String jwt){
        Assert.hasText(jwt, "JWT String argument cannot be null or empty.");
        String base64UrlEncodedHeader = null;
        String base64UrlEncodedPayload = null;
        String base64UrlEncodedDigest = null;
        int delimiterCount = 0;
        StringBuilder sb = new StringBuilder(128);
        for (char c : jwt.toCharArray()) {
            if (c == '.') {
                CharSequence tokenSeq = io.jsonwebtoken.lang.Strings.clean(sb);
                String token = tokenSeq!=null?tokenSeq.toString():null;

                if (delimiterCount == 0) {
                    base64UrlEncodedHeader = token;
                } else if (delimiterCount == 1) {
                    base64UrlEncodedPayload = token;
                }

                delimiterCount++;
                sb.setLength(0);
            } else {
                sb.append(c);
            }
        }
        if (delimiterCount != 2) {
            String msg = "JWT strings must contain exactly 2 period characters. Found: " + delimiterCount;
            throw new MalformedJwtException(msg);
        }
        if (sb.length() > 0) {
            base64UrlEncodedDigest = sb.toString();
        }
        if (base64UrlEncodedPayload == null) {
            throw new MalformedJwtException("JWT string '" + jwt + "' is missing a body/payload.");
        }
        // =============== Header =================
        Header header = null;
        CompressionCodec compressionCodec = null;
        if (base64UrlEncodedHeader != null) {
            String origValue = TextCodec.BASE64URL.decodeToString(base64UrlEncodedHeader);
            Map<String, Object> m = readValue(origValue);
            if (base64UrlEncodedDigest != null) {
                header = new DefaultJwsHeader(m);
            } else {
                header = new DefaultHeader(m);
            }
            compressionCodec = CODECRESOLVER.resolveCompressionCodec(header);
        }
        // =============== Body =================
        String payload;
        if (compressionCodec != null) {
            byte[] decompressed = compressionCodec.decompress(TextCodec.BASE64URL.decode(base64UrlEncodedPayload));
            payload = new String(decompressed, io.jsonwebtoken.lang.Strings.UTF_8);
        } else {
            payload = TextCodec.BASE64URL.decodeToString(base64UrlEncodedPayload);
        }
        return payload;
    }

    /**
     * 验签JWT
     *
     * @param jwt json web token
     */
    public static JwtAccount parseJwt(String jwt, String appKey) {
        Claims claims = Jwts.parser()
                .setSigningKey(DatatypeConverter.parseBase64Binary(appKey))
                .parseClaimsJws(jwt)
                .getBody();
        JwtAccount jwtAccount = new JwtAccount();
        jwtAccount.setTokenId(claims.getId());// 令牌ID
        jwtAccount.setAppId(claims.getSubject());// 客户标识
        jwtAccount.setIssuer(claims.getIssuer());// 签发者
        jwtAccount.setIssuedAt(claims.getIssuedAt());// 签发时间
        jwtAccount.setAudience(claims.getAudience());// 接收方
        jwtAccount.setRoles(claims.get("roles", String.class));// 访问主张-角色
        jwtAccount.setPerms(claims.get("perms", String.class));// 访问主张-权限
        return jwtAccount;
    }

````

#### 基于shiro的改造集成**真正**支持restful请求    

首先说明设计的这个安全体系是是RBAC(基于角色的权限访问控制)授权模型，即```用户--角色--资源```，用户不直接和权限打交道，角色拥有资源，用户拥有这个角色就有权使用角色所用户的资源。所有这里没有权限一说，签发jwt里面也就只有用户所拥有的角色而没有权限。  

为啥说是真正的restful风格集成，虽说shiro对rest不友好但他本身是有支持rest集成的filter--```HttpMethodPermissionFilter```，这个shiro rest的 风格拦截器，会自动根据请求方法构建权限字符串```( GET=read,POST=create,PUT=update,DELETE=delete)```构建权限字符串;eg: ``` /users=rest[user]``` , 会 自动拼接出```user:read,user:create,user:update,user:delete```”权限字符串进行权限匹配(所有都得匹配，isPermittedAll)。  

但是这样感觉不利于基于jwt的角色的权限控制，在细粒度上验权url(即支持get,post,delete鉴别)就更没法了(个人见解)。打个比方：我们对一个用户签发的jwt写入角色列(role_admin,role_customer)。对不同request请求：```url="api/resource/",httpMethod="GET"```，```url="api/resource",httpMethod="POST"```,在基于角色-资源的授权模型中，这两个url相同的请求对HttpMethodPermissionFilter是一种请求，用户对应的角色拥有的资源url="api/resource"，只要请求的url是"api/resource"，不论它的请求方式是什么，都会判定通过这个请求，这在restful风格的api中肯定是不可取的，对同一资源有些角色可能只要查询的权限而没有修改增加的权限。    

可能会说在jwt中再增加权限列就好了嘛，但是在基于用户-资源的授权模型中，虽然能判别是不同的请求，但是太麻烦了，对每个资源我们都要设计对应的权限列然后再塞入到jwt中，对每个用户都要单独授权资源这也是不可取的。  

对shiro的改造这里自定义了一些规则:  
shiro过滤器链的url=```url+"=="+httpMethod```  
eg:对于```url="api/resource/",httpMethod="GET"```的资源,其拼接出来的过滤器链匹配url=```api/resource==GET```  
这样对相同的url而不同的访问方式，会判定为不同的资源，即资源不再简单是url，而是url和httpMethod的组合。基于角色的授权模型中，角色所拥有的资源形式为```url+"=="+httpMethod```。  
这里改变了过滤器的过滤匹配url规则，重写PathMatchingFilterChainResolver的getChain方法，增加对上述规则的url的支持。  

````
/* *
 * @Author tomsun28
 * @Description 
 * @Date 21:12 2018/4/20
 */
public class RestPathMatchingFilterChainResolver extends PathMatchingFilterChainResolver {

    private static final Logger LOGGER = LoggerFactory.getLogger(RestPathMatchingFilterChainResolver.class);

    public RestPathMatchingFilterChainResolver() {
        super();
    }

    public RestPathMatchingFilterChainResolver(FilterConfig filterConfig) {
        super(filterConfig);
    }

    /* *
     * @Description 重写filterChain匹配
     * @Param [request, response, originalChain]
     * @Return javax.servlet.FilterChain
     */
    @Override
    public FilterChain getChain(ServletRequest request, ServletResponse response, FilterChain originalChain) {
        FilterChainManager filterChainManager = this.getFilterChainManager();
        if (!filterChainManager.hasChains()) {
            return null;
        } else {
            String requestURI = this.getPathWithinApplication(request);
            Iterator var6 = filterChainManager.getChainNames().iterator();

            String pathPattern;
            boolean flag = true;
            String[] strings = null;
            do {
                if (!var6.hasNext()) {
                    return null;
                }

                pathPattern = (String)var6.next();

                strings = pathPattern.split("==");
                if (strings.length == 2) {
                    // 分割出url+httpMethod,判断httpMethod和request请求的method是否一致,不一致直接false
                    if (WebUtils.toHttp(request).getMethod().toUpperCase().equals(strings[1].toUpperCase())) {
                        flag = false;
                    } else {
                        flag = true;
                    }
                } else {
                    flag = false;
                }
                pathPattern = strings[0];
            } while(!this.pathMatches(pathPattern, requestURI) || flag);

            if (LOGGER.isTraceEnabled()) {
                LOGGER.trace("Matched path pattern [" + pathPattern + "] for requestURI [" + requestURI + "].  Utilizing corresponding filter chain...");
            }
            if (strings.length == 2) {
                pathPattern = pathPattern.concat("==").concat(WebUtils.toHttp(request).getMethod().toUpperCase());
            }

            return filterChainManager.proxy(originalChain, pathPattern);
        }
    }

}

````
重写PathMatchingFilter的路径匹配方法pathsMatch()，加入httpMethod支持。  

````
/* *
 * @Author tomsun28
 * @Description 重写过滤链路径匹配规则，增加REST风格post,get.delete,put..支持
 * @Date 23:37 2018/4/19
 */
public abstract class BPathMatchingFilter extends PathMatchingFilter {

    public BPathMatchingFilter() {

    }
    /* *
     * @Description 重写URL匹配  加入httpMethod支持
     * @Param [path, request]
     * @Return boolean
     */
    @Override
    protected boolean pathsMatch(String path, ServletRequest request) {
        String requestURI = this.getPathWithinApplication(request);
        // path: url==method eg: http://api/menu==GET   需要解析出path中的url和httpMethod
        String[] strings = path.split("==");
        if (strings.length <= 1) {
            // 分割出来只有URL
            return this.pathsMatch(strings[0], requestURI);
        } else {
            // 分割出url+httpMethod,判断httpMethod和request请求的method是否一致,不一致直接false
            String httpMethod = WebUtils.toHttp(request).getMethod().toUpperCase();
            return httpMethod.equals(strings[1].toUpperCase()) && this.pathsMatch(strings[0], requestURI);
        }
    }
}
````
这样增加httpMethod的改造就完成了，重写ShiroFilterFactoryBean使其使用改造后的chainResolver：RestPathMatchingFilterChainResolver  

````
/* *
 * @Author tomsun28
 * @Description rest支持的shiroFilterFactoryBean
 * @Date 21:35 2018/4/20
 */
public class RestShiroFilterFactoryBean extends ShiroFilterFactoryBean {

    private static final Logger LOGGER = LoggerFactory.getLogger(RestShiroFilterFactoryBean.class);

    public RestShiroFilterFactoryBean() {
        super();
    }

    @Override
    protected AbstractShiroFilter createInstance() throws Exception {
        LOGGER.debug("Creating Shiro Filter instance.");
        SecurityManager securityManager = this.getSecurityManager();
        String msg;
        if (securityManager == null) {
            msg = "SecurityManager property must be set.";
            throw new BeanInitializationException(msg);
        } else if (!(securityManager instanceof WebSecurityManager)) {
            msg = "The security manager does not implement the WebSecurityManager interface.";
            throw new BeanInitializationException(msg);
        } else {
            FilterChainManager manager = this.createFilterChainManager();
            RestPathMatchingFilterChainResolver chainResolver = new RestPathMatchingFilterChainResolver();
            chainResolver.setFilterChainManager(manager);
            return new RestShiroFilterFactoryBean.SpringShiroFilter((WebSecurityManager)securityManager, chainResolver);
        }
    }

    private static final class SpringShiroFilter extends AbstractShiroFilter {
        protected SpringShiroFilter(WebSecurityManager webSecurityManager, FilterChainResolver resolver) {
            if (webSecurityManager == null) {
                throw new IllegalArgumentException("WebSecurityManager property cannot be null.");
            } else {
                this.setSecurityManager(webSecurityManager);
                if (resolver != null) {
                    this.setFilterChainResolver(resolver);
                }

            }
        }
    }
}
````
上面是一些核心的代码片段，更多请看项目代码。  

对用户账户登录注册的过滤filter：PasswordFilter  
````
/* *
 * @Author tomsun28
 * @Description 基于 用户名密码 的认证过滤器
 * @Date 20:18 2018/2/10
 */
public class PasswordFilter extends AccessControlFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(PasswordFilter.class);

    private StringRedisTemplate redisTemplate;

    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) {

        Subject subject = getSubject(request,response);
        // 如果其已经登录，再此发送登录请求
        if(null != subject && subject.isAuthenticated()){
            return true;
        }
        //  拒绝，统一交给 onAccessDenied 处理
        return false;
    }

    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {

        // 判断若为获取登录注册加密动态秘钥请求
        if (isPasswordTokenGet(request)) {
            //动态生成秘钥，redis存储秘钥供之后秘钥验证使用，设置有效期5秒用完即丢弃
            String tokenKey = CommonUtil.getRandomString(16);
            try {
                redisTemplate.opsForValue().set("PASSWORD_TOKEN_KEY_"+request.getRemoteAddr().toUpperCase(),tokenKey,5, TimeUnit.SECONDS);
                // 动态秘钥response返回给前端
                Message message = new Message();
                message.ok(1000,"issued tokenKey success")
                        .addData("tokenKey",tokenKey);
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);

            }catch (Exception e) {
                LOGGER.warn(e.getMessage(),e);
                // 动态秘钥response返回给前端
                Message message = new Message();
                message.ok(1000,"issued tokenKey fail");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);
            }
            return false;
        }

        // 判断是否是登录请求
        if(isPasswordLoginPost(request)){
            AuthenticationToken authenticationToken = createPasswordToken(request);
            Subject subject = getSubject(request,response);
            try {
                subject.login(authenticationToken);
                //登录认证成功,进入请求派发json web token url资源内
                return true;
            }catch (AuthenticationException e) {
                LOGGER.warn(authenticationToken.getPrincipal()+"::"+e.getMessage(),e);
                // 返回response告诉客户端认证失败
                Message message = new Message().error(1002,"login fail");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);
                return false;
            }catch (Exception e) {
                LOGGER.error(e.getMessage(),e);
                // 返回response告诉客户端认证失败
                Message message = new Message().error(1002,"login fail");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);
                return false;
            }
        }
        // 判断是否为注册请求,若是通过过滤链进入controller注册
        if (isAccountRegisterPost(request)) {
            return true;
        }
        // 之后添加对账户的找回等

        // response 告知无效请求
        Message message = new Message().error(1111,"error request");
        RequestResponseUtil.responseWrite(JSON.toJSONString(message),response);
        return false;
    }

    private boolean isPasswordTokenGet(ServletRequest request) {
//        String tokenKey = request.getParameter("tokenKey");
        String tokenKey = RequestResponseUtil.getParameter(request,"tokenKey");

        return (request instanceof HttpServletRequest)
                && ((HttpServletRequest) request).getMethod().toUpperCase().equals("GET")
                && null != tokenKey && "get".equals(tokenKey);
    }

    private boolean isPasswordLoginPost(ServletRequest request) {
//        String password = request.getParameter("password");
//        String timestamp = request.getParameter("timestamp");
//        String methodName = request.getParameter("methodName");
//        String appId = request.getParameter("appId");
        Map<String ,String> map = RequestResponseUtil.getRequestParameters(request);
        String password = map.get("password");
        String timestamp = map.get("timestamp");
        String methodName = map.get("methodName");
        String appId = map.get("appId");
        return (request instanceof HttpServletRequest)
                && ((HttpServletRequest) request).getMethod().toUpperCase().equals("POST")
                && null != password
                && null != timestamp
                && null != methodName
                && null != appId
                && methodName.equals("login");
    }

    private boolean isAccountRegisterPost(ServletRequest request) {
//        String uid = request.getParameter("uid");
//        String methodName = request.getParameter("methodName");
//        String username = request.getParameter("username");
//        String password = request.getParameter("password");
        Map<String ,String> map = RequestResponseUtil.getRequestParameters(request);
        String uid = map.get("uid");
        String username = map.get("username");
        String methodName = map.get("methodName");
        String password = map.get("password");
        return (request instanceof HttpServletRequest)
                && ((HttpServletRequest) request).getMethod().toUpperCase().equals("POST")
                && null != username
                && null != password
                && null != methodName
                && null != uid
                && methodName.equals("register");
    }

    private AuthenticationToken createPasswordToken(ServletRequest request) {

//        String appId = request.getParameter("appId");
//        String password = request.getParameter("password");
//        String timestamp = request.getParameter("timestamp");
        Map<String ,String> map = RequestResponseUtil.getRequestParameters(request);
        String appId = map.get("appId");
        String timestamp = map.get("timestamp");
        String password = map.get("password");
        String host = request.getRemoteAddr();
        String tokenKey = redisTemplate.opsForValue().get("PASSWORD_TOKEN_KEY_"+host.toUpperCase());
        return new PasswordToken(appId,password,timestamp,host,tokenKey);
    }

    public void setRedisTemplate(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

}

````
支持restful风格的jwt鉴权filter：BJwtFilter  

````
/* *
 * @Author tomsun28
 * @Description 支持restful url 的过滤链  JWT json web token 过滤器，无状态验证
 * @Date 0:04 2018/4/20
 */
public class BJwtFilter extends BPathMatchingFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(BJwtFilter.class);


    private StringRedisTemplate redisTemplate;
    private AccountService accountService;

    protected boolean isAccessAllowed(ServletRequest servletRequest, ServletResponse servletResponse, Object mappedValue) throws Exception {
        Subject subject = getSubject(servletRequest,servletResponse);
        // 判断是否为JWT认证请求
        if ((null == subject || !subject.isAuthenticated()) && isJwtSubmission(servletRequest)) {
            AuthenticationToken token = createJwtToken(servletRequest);
            try {
                subject.login(token);
//                return this.checkRoles(subject,mappedValue) && this.checkPerms(subject,mappedValue);
                return this.checkRoles(subject,mappedValue);
            }catch (AuthenticationException e) {
                LOGGER.info(e.getMessage(),e);
                // 如果是JWT过期
                if (e.getMessage().equals("expiredJwt")) {
                    // 这里初始方案先抛出令牌过期，之后设计为在Redis中查询当前appId对应令牌，其设置的过期时间是JWT的两倍，此作为JWT的refresh时间
                    // 当JWT的有效时间过期后，查询其refresh时间，refresh时间有效即重新派发新的JWT给客户端，
                    // refresh也过期则告知客户端JWT时间过期重新认证

                    // 当存储在redis的JWT没有过期，即refresh time 没有过期
                    String appId = WebUtils.toHttp(servletRequest).getHeader("appId");
                    String jwt = WebUtils.toHttp(servletRequest).getHeader("authorization");
                    String refreshJwt = redisTemplate.opsForValue().get("JWT-SESSION-"+appId);
                    if (null != refreshJwt && refreshJwt.equals(jwt)) {
                        // 重新申请新的JWT
                        // 根据appId获取其对应所拥有的角色(这里设计为角色对应资源，没有权限对应资源)
                        String roles = accountService.loadAccountRole(appId);
                        long refreshPeriodTime = 36000L;  //seconds为单位,10 hours
                        String newJwt = JsonWebTokenUtil.issueJWT(UUID.randomUUID().toString(),appId,
                                "token-server",refreshPeriodTime >> 2,roles,null, SignatureAlgorithm.HS512);
                        // 将签发的JWT存储到Redis： {JWT-SESSION-{appID} , jwt}
                        redisTemplate.opsForValue().set("JWT-SESSION-"+appId,newJwt,refreshPeriodTime, TimeUnit.SECONDS);
                        Message message = new Message().ok(1005,"new jwt").addData("jwt",newJwt);
                        RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                        return false;
                    }else {
                        // jwt时间失效过期,jwt refresh time失效 返回jwt过期客户端重新登录
                        Message message = new Message().error(1006,"expired jwt");
                        RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                        return false;
                    }

                }
                // 其他的判断为JWT错误无效
                Message message = new Message().error(1007,"error Jwt");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                return false;

            }catch (Exception e) {
                // 其他错误
                LOGGER.warn(servletRequest.getRemoteAddr()+"JWT认证"+e.getMessage(),e);
                // 告知客户端JWT错误1005,需重新登录申请jwt
                Message message = new Message().error(1007,"error jwt");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                return false;
            }
        }else {
            // 请求未携带jwt 判断为无效请求
            Message message = new Message().error(1111,"error request");
            RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
            return false;
        }
    }

    protected boolean onAccessDenied(ServletRequest servletRequest, ServletResponse servletResponse) throws Exception {
        Subject subject = getSubject(servletRequest,servletResponse);

        // 未认证的情况
        if (null == subject || !subject.isAuthenticated()) {
            // 告知客户端JWT认证失败需跳转到登录页面
            Message message = new Message().error(1006,"error jwt");
            RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
        }else {
            //  已经认证但未授权的情况
            // 告知客户端JWT没有权限访问此资源
            Message message = new Message().error(1008,"no permission");
            RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
        }
        // 过滤链终止
        return false;
    }

    private boolean isJwtSubmission(ServletRequest request) {

        String jwt = RequestResponseUtil.getHeader(request,"authorization");
        String appId = RequestResponseUtil.getHeader(request,"appId");
        return (request instanceof HttpServletRequest)
                && !StringUtils.isEmpty(jwt)
                && !StringUtils.isEmpty(appId);
    }

    private AuthenticationToken createJwtToken(ServletRequest request) {

        Map<String,String> maps = RequestResponseUtil.getRequestHeaders(request);
        String appId = maps.get("appId");
        String ipHost = request.getRemoteAddr();
        String jwt = maps.get("authorization");
        String deviceInfo = maps.get("deviceInfo");

        return new JwtToken(ipHost,deviceInfo,jwt,appId);
    }

    // 验证当前用户是否属于mappedValue任意一个角色
    private boolean checkRoles(Subject subject, Object mappedValue){
        String[] rolesArray = (String[]) mappedValue;
        return rolesArray == null || rolesArray.length == 0 || Stream.of(rolesArray).anyMatch(role -> subject.hasRole(role.trim()));
    }

    // 验证当前用户是否拥有mappedValue任意一个权限
    private boolean checkPerms(Subject subject, Object mappedValue){
        String[] perms = (String[]) mappedValue;
        boolean isPermitted = true;
        if (perms != null && perms.length > 0) {
            if (perms.length == 1) {
                if (!subject.isPermitted(perms[0])) {
                    isPermitted = false;
                }
            } else {
                if (!subject.isPermittedAll(perms)) {
                    isPermitted = false;
                }
            }
        }
        return isPermitted;
    }

    public void setRedisTemplate(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }


    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }
}

````
realm数据源，数据提供service，匹配matchs，自定义token，spring集成shiro配置等其他详见项目代码。  
最后项目实现了基于jwt的动态restful api权限认证。  

#### 签发的用户认证token超时刷新策略   

对于登录的用户签发其对应的jwt，我们在jwt设置他的固定有效期时间，在有效期内用户携带jwt访问没问题，当过有效期后jwt失效，用户需要重新登录获取新的jwt。这个体验不太好，好的体验应该是：活跃的用户应该在无感知的情况下在jwt失效后获取到新的jwt，携带这个新的jwt进行访问，而长时间不活跃的用户应该在jwt失效后需要进行重新的登录认证。  

这里就涉及到了token的超时刷新问题，解决方案看图：  

![image8](/image/image8.PNG)   

在签发有效期为 t 时间的jwt后，把jwt用（"JWT-SESSION-"+appId,jwt）的key-value形式存储到redis中，有效期设置为2倍的 t 。这样jwt在有效期过后的 t 时间段内可以申请刷新token。  
还有个问题是用户携带过期的jwt对后台请求，在可刷新时间段内返回了新的jwt，应该在用户无感知的情况下返回请求的内容，而不是接收一个刷新的jwt。我们是不是可以在每次request请求回调的时候判断返回的是不是刷新jwt，但是判断是之后我们是否放弃之前的用户请求，如果不放弃，那是不是应该在最开始的用户request请求前先保存这个请求，在之后的回调中如果是返回刷新jwt，我们再携带这个新的jwt再请求一次保存好的request请求？但对于前端这么大量的不同请求，这样是不是太麻烦了？  

这困扰了我很久哎，直到我用到了angualr的```HttpInterceptor```哈哈哈哈哈哈哈哈哈哈哈哈哈哈。  

angualr的```HttpInterceptor```就是前端的拦截过滤器,发起请求会拦截处理,接收请求也会拦截处理。最大的好处对每次的原始request他都会完整的保存下来，我们向后台发生的request是他的clone。```next.handle(request.clone)```  
继承HttpInterceptor的AuthInterceptor，拦截response判断是否为refresh token，是则携带新token再次发起保存的request：  

````
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getAuthorizationToken();
    const uid = this.authService.getUid();
    let authReq: any;
    if (authToken != null && uid != null) {
      authReq = req.clone({
        setHeaders: {
          'authorization': authToken,
          'appId': uid
        }
      });
    } else {
      authReq = req.clone();
    }

    console.log(authReq);
    return next.handle(authReq).pipe(
      mergeMap(event => {
        // 返回response
        if (event instanceof HttpResponse) {
          if (event.status === 200) {
            // 若返回JWT过期但refresh token未过期,返回新的JWT 状态码为1005
            if (event.body.meta.code === 1005) {
              const jwt = event.body.data.jwt;
              // 更新AuthorizationToken
              this.authService.updateAuthorizationToken(jwt);
              // clone request 重新发起请求
              // retry(1);
              authReq = req.clone({
                setHeaders: {
                  'authorization': jwt,
                  'appId': uid
                }
              });
              return next.handle(authReq);

            }
          }
          if (event.status === 404) {
            // go to 404 html
            this.router.navigateByUrl('/404');
          }
          if (event.status === 500) {
            // go to 500 html
            this.router.navigateByUrl('/500');
          }
        }
        console.log(event);
        // 返回正常情况的可观察对象
        return of(event);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error( `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    repeat(1);
    return new ErrorObservable('亲请检查网络');

  }
}

````
后端签发jwt时所做的：  

````
 /* *
     * @Description 这里已经在 passwordFilter 进行了登录认证
     * @Param [] 登录签发 JWT
     * @Return java.lang.String
     */
    @ApiOperation(value = "用户登录",notes = "POST用户登录签发JWT")
    @PostMapping("/login")
    public Message accountLogin(HttpServletRequest request, HttpServletResponse response) {
        Map<String,String> params = RequestResponseUtil.getRequestParameters(request);
        String appId = params.get("appId");
        // 根据appId获取其对应所拥有的角色(这里设计为角色对应资源，没有权限对应资源)
        String roles = accountService.loadAccountRole(appId);
        // 时间以秒计算,token有效刷新时间是token有效过期时间的2倍
        long refreshPeriodTime = 36000L;
        String jwt = JsonWebTokenUtil.issueJWT(UUID.randomUUID().toString(),appId,
                "token-server",refreshPeriodTime >> 2,roles,null, SignatureAlgorithm.HS512);
        // 将签发的JWT存储到Redis： {JWT-SESSION-{appID} , jwt}
        redisTemplate.opsForValue().set("JWT-SESSION-"+appId,jwt,refreshPeriodTime, TimeUnit.SECONDS);
        AuthUser authUser = userService.getUserByAppId(appId);

        return new Message().ok(1003,"issue jwt success").addData("jwt",jwt).addData("user",authUser);
    }
````

后端refresh token时所做的：  

````
protected boolean isAccessAllowed(ServletRequest servletRequest, ServletResponse servletResponse, Object mappedValue) throws Exception {
        Subject subject = getSubject(servletRequest,servletResponse);
        // 判断是否为JWT认证请求
        if ((null == subject || !subject.isAuthenticated()) && isJwtSubmission(servletRequest)) {
            AuthenticationToken token = createJwtToken(servletRequest);
            try {
                subject.login(token);
//                return this.checkRoles(subject,mappedValue) && this.checkPerms(subject,mappedValue);
                return this.checkRoles(subject,mappedValue);
            }catch (AuthenticationException e) {
                LOGGER.info(e.getMessage(),e);
                // 如果是JWT过期
                if (e.getMessage().equals("expiredJwt")) {
                    // 这里初始方案先抛出令牌过期，之后设计为在Redis中查询当前appId对应令牌，其设置的过期时间是JWT的两倍，此作为JWT的refresh时间
                    // 当JWT的有效时间过期后，查询其refresh时间，refresh时间有效即重新派发新的JWT给客户端，
                    // refresh也过期则告知客户端JWT时间过期重新认证

                    // 当存储在redis的JWT没有过期，即refresh time 没有过期
                    String appId = WebUtils.toHttp(servletRequest).getHeader("appId");
                    String jwt = WebUtils.toHttp(servletRequest).getHeader("authorization");
                    String refreshJwt = redisTemplate.opsForValue().get("JWT-SESSION-"+appId);
                    if (null != refreshJwt && refreshJwt.equals(jwt)) {
                        // 重新申请新的JWT
                        // 根据appId获取其对应所拥有的角色(这里设计为角色对应资源，没有权限对应资源)
                        String roles = accountService.loadAccountRole(appId);
                        long refreshPeriodTime = 36000L;  //seconds为单位,10 hours
                        String newJwt = JsonWebTokenUtil.issueJWT(UUID.randomUUID().toString(),appId,
                                "token-server",refreshPeriodTime >> 2,roles,null, SignatureAlgorithm.HS512);
                        // 将签发的JWT存储到Redis： {JWT-SESSION-{appID} , jwt}
                        redisTemplate.opsForValue().set("JWT-SESSION-"+appId,newJwt,refreshPeriodTime, TimeUnit.SECONDS);
                        Message message = new Message().ok(1005,"new jwt").addData("jwt",newJwt);
                        RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                        return false;
                    }else {
                        // jwt时间失效过期,jwt refresh time失效 返回jwt过期客户端重新登录
                        Message message = new Message().error(1006,"expired jwt");
                        RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                        return false;
                    }

                }
                // 其他的判断为JWT错误无效
                Message message = new Message().error(1007,"error Jwt");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                return false;

            }catch (Exception e) {
                // 其他错误
                LOGGER.warn(servletRequest.getRemoteAddr()+"JWT认证"+e.getMessage(),e);
                // 告知客户端JWT错误1005,需重新登录申请jwt
                Message message = new Message().error(1007,"error jwt");
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
                return false;
            }
        }else {
            // 请求未携带jwt 判断为无效请求
            Message message = new Message().error(1111,"error request");
            RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
            return false;
        }
    }

````




<br>
<br>

。。。。。持续更新中。。。。



### 效果展示  

![image4](/image/image4.PNG)   

![image5](/image/image5.PNG)   

![image6](/image/image6.PNG)   

![image7](/image/image7.PNG)   



github:  
[bootshiro](https://github.com/tomsun28/bootshiro)  
[usthe](https://github.com/tomsun28/usthe)  

码云:  
[bootshiro](https://gitee.com/tomsun28/bootshiro)  
[usthe](https://gitee.com/tomsun28/usthe)  


<br>
持续更新。。。。。。





<br>
<br>
<br>
<br>

*转载请注明* [from tomsun28](http://usthe.com)
