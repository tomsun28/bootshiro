package com.usthe.bootshiro.shiro.token;

import org.apache.shiro.authc.AuthenticationToken;

/**
 *   JWT token
 * @author tomsun28
 * @date 19:37 2018/2/10
 */
public class JwtToken implements AuthenticationToken{

    private static final long serialVersionUID = 1L;

    /**
     * 用户的标识
     */
    private String appId;
    /**
     * 用户的IP
     */
    private String ipHost;
    /**
     * 设备信息
     */
    private String deviceInfo;
    /**
     * json web token值
     */
    private String jwt;

    public JwtToken(String ipHost, String deviceInfo, String jwt,String appId) {
        this.ipHost = ipHost;
        this.deviceInfo = deviceInfo;
        this.jwt = jwt;
        this.appId = appId;
    }

    @Override
    public Object getPrincipal() {
        return this.appId;
    }

    @Override
    public Object getCredentials() {
        return this.jwt;
    }

    public String getIpHost() {
        return ipHost;
    }

    public void setIpHost(String ipHost) {
        this.ipHost = ipHost;
    }

    public String getDeviceInfo() {
        return deviceInfo;
    }

    public void setDeviceInfo(String deviceInfo) {
        this.deviceInfo = deviceInfo;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }
}
