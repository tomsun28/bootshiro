package com.usthe.bootshiro.shiro.filter;

import com.alibaba.fastjson.JSON;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.shiro.token.JwtToken;
import com.usthe.bootshiro.util.RequestResponseUtil;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.util.stream.Stream;

/* *
 * @Author tomsun28
 * @Description JWT json web token 过滤器，无状态验证
 * @Date 22:20 2018/2/10
 */
public class JwtFilter extends AccessControlFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(JwtFilter.class);

    protected boolean isAccessAllowed(ServletRequest servletRequest, ServletResponse servletResponse, Object mappedValue) throws Exception {
        Subject subject = getSubject(servletRequest,servletResponse);
        // 判断是否为JWT认证请求
        if ((null == subject || !subject.isAuthenticated()) && isJwtSubmission(servletRequest)) {
            AuthenticationToken token = createJwtToken(servletRequest);
            try {

                subject.login(token);
                return this.checkRoles(subject,mappedValue) && this.checkPerms(subject,mappedValue);
            }catch (AuthenticationException e) {
                LOGGER.warn(servletRequest.getRemoteAddr()+"JWT认证"+e.getMessage());
                // 告知客户端JWT登录认证失败或者权限认证失败
                Message message = new Message();
                message.addMeta("code","203").addMeta("msg",e.getMessage())
                        .addMeta("success",Boolean.FALSE);
                RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
            }
        }
        return false;

    }

    protected boolean onAccessDenied(ServletRequest servletRequest, ServletResponse servletResponse) throws Exception {
        Subject subject = getSubject(servletRequest,servletResponse);

        // 未认证的情况
        if (null == subject || !subject.isAuthenticated()) {
            // 告知客户端JWT认证失败需跳转到登录页面
            Message message = new Message();
            message.addMeta("code","322").addMeta("msg","认证失败")
                    .addMeta("success",Boolean.FALSE);
            RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
        }else {
            // 未授权的情况
            // 告知客户端JWT没有权限访问此资源
            Message message = new Message();
            message.addMeta("code","222").addMeta("msg","无此权限")
                    .addMeta("success",Boolean.FALSE);
            RequestResponseUtil.responseWrite(JSON.toJSONString(message),servletResponse);
        }
        // 过滤链终止
        return false;
    }

    private boolean isJwtSubmission(ServletRequest request) {
        String jwt = request.getParameter("jwt");
        return (request instanceof HttpServletRequest) && !StringUtils.isEmpty(jwt);
    }

    private AuthenticationToken createJwtToken(ServletRequest request) {
        String ipHost = request.getRemoteAddr();
        String jwt = request.getParameter("jwt");
        String deviceInfo = request.getParameter("deviceInfo");
        return new JwtToken(ipHost,deviceInfo,jwt);
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
}
