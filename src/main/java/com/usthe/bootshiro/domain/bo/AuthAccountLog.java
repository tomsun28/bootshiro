package com.usthe.bootshiro.domain.bo;

import java.util.Date;

/**
 *   用户账户操作日志
 * @author tomsun28
 * @date 8:14 2018/4/22
 */
public class AuthAccountLog {

    private Integer id;

    private String logName;

    private String userId;

    private String ip;

    private Short succeed;

    private String message;

    private Date createTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLogName() {
        return logName;
    }

    public void setLogName(String logName) {
        this.logName = logName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Short getSucceed() {
        return succeed;
    }

    public void setSucceed(Short succeed) {
        this.succeed = succeed;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
