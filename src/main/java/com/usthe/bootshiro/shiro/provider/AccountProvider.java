package com.usthe.bootshiro.shiro.provider;


import com.usthe.bootshiro.domain.vo.Account;

/* *
 * @Author tomsun28
 * @Description  数据库用户密码账户提供
 * @Date 16:35 2018/2/11
 */
public interface AccountProvider {

    Account loadAccount(String appId);

}
