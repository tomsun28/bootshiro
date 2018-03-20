package com.usthe.bootshiro.shiro.filter;


import com.alibaba.fastjson.JSON;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.shiro.token.PasswordToken;
import com.usthe.bootshiro.util.CommonUtil;
import com.usthe.bootshiro.util.RequestResponseUtil;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

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
        String tokenKey = request.getParameter("tokenKey");
        return (request instanceof HttpServletRequest)
                && ((HttpServletRequest) request).getMethod().toUpperCase().equals("GET")
                && null != tokenKey && "get".equals(tokenKey);
    }

    private boolean isPasswordLoginPost(ServletRequest request) {
        String password = request.getParameter("password");
        String timestamp = request.getParameter("timestamp");
        String methodName = request.getParameter("methodName");
        String appId = request.getParameter("appId");
        return (request instanceof HttpServletRequest)
                && ((HttpServletRequest) request).getMethod().toUpperCase().equals("POST")
                && null != password
                && null != timestamp
                && null != methodName
                && null != appId
                && methodName.equals("login");
    }

    private boolean isAccountRegisterPost(ServletRequest request) {
        String uid = request.getParameter("uid");
        String methodName = request.getParameter("methodName");
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        return (request instanceof HttpServletRequest)
                && ((HttpServletRequest) request).getMethod().toUpperCase().equals("POST")
                && null != username
                && null != password
                && null != methodName
                && null != uid
                && methodName.equals("register");
    }

    private AuthenticationToken createPasswordToken(ServletRequest request) {

        String appId = request.getParameter("appId");
        String password = request.getParameter("password");
        String timestamp = request.getParameter("timestamp");
        String host = request.getRemoteAddr();
        String tokenKey = redisTemplate.opsForValue().get("PASSWORD_TOKEN_KEY_"+host.toUpperCase());
        return new PasswordToken(appId,password,timestamp,host,tokenKey);
    }

    public void setRedisTemplate(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

}
