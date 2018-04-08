package com.usthe.bootshiro.shiro.filter;

import com.alibaba.fastjson.JSON;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.AccountService;
import com.usthe.bootshiro.shiro.token.JwtToken;
import com.usthe.bootshiro.util.JsonWebTokenUtil;
import com.usthe.bootshiro.util.RequestResponseUtil;
import io.jsonwebtoken.SignatureAlgorithm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.util.StringUtils;


import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.stream.Stream;

/* *
 * @Author tomsun28
 * @Description JWT json web token 过滤器，无状态验证
 * @Date 22:20 2018/2/10
 */
public class JwtFilter extends AccessControlFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtFilter.class);

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
        String jwt = WebUtils.toHttp(request).getHeader("authorization");
        String appId = WebUtils.toHttp(request).getHeader("appId");
        return (request instanceof HttpServletRequest)
                && !StringUtils.isEmpty(jwt)
                && !StringUtils.isEmpty(appId);
    }

    private AuthenticationToken createJwtToken(ServletRequest request) {
        String appId = WebUtils.toHttp(request).getHeader("appId");
        String ipHost = request.getRemoteAddr();
        String jwt = WebUtils.toHttp(request).getHeader("authorization");
        String deviceInfo = WebUtils.toHttp(request).getHeader("deviceInfo");

        return new JwtToken(ipHost,deviceInfo,jwt,appId);
    }

    private boolean checkRoles(Subject subject, Object mappedValue){
        String[] rolesArray = (String[]) mappedValue;
        return rolesArray == null || rolesArray.length == 0 || Stream.of(rolesArray).anyMatch(role -> subject.hasRole(role));
    }

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
