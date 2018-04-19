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
