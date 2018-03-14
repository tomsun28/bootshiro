package com.usthe.bootshiro.domain.vo;

import java.io.Serializable;
import java.util.Date;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 11:55 2018/3/12
 */
public class JwtAccount implements Serializable {

    private static final long serialVersionUID = -895875540581785581L;

    private String tokenId;// 令牌id
    private String appId;// 客户标识（用户名、账号）
    private String issuer;// 签发者(JWT令牌此项有值)
    private Date issuedAt;// 签发时间
    private String audience;// 接收方(JWT令牌此项有值)
    private String roles;// 访问主张-角色(JWT令牌此项有值)
    private String perms;// 访问主张-资源(JWT令牌此项有值)
    private String host;// 客户地址

    public JwtAccount() {

    }
    public JwtAccount(String tokenId, String appId, String issuer, Date issuedAt, String audience, String roles, String perms, String host) {
        this.tokenId = tokenId;
        this.appId = appId;
        this.issuer = issuer;
        this.issuedAt = issuedAt;
        this.audience = audience;
        this.roles = roles;
        this.perms = perms;
        this.host = host;
    }

    public String getTokenId() {
        return tokenId;
    }

    public void setTokenId(String tokenId) {
        this.tokenId = tokenId;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public Date getIssuedAt() {
        return issuedAt;
    }

    public void setIssuedAt(Date issuedAt) {
        this.issuedAt = issuedAt;
    }

    public String getAudience() {
        return audience;
    }

    public void setAudience(String audience) {
        this.audience = audience;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }

    public String getPerms() {
        return perms;
    }

    public void setPerms(String perms) {
        this.perms = perms;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }
}
