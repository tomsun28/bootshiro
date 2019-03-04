package com.usthe.bootshiro.shiro.provider;


import com.usthe.bootshiro.domain.vo.Account;

/**
 *    数据库用户密码账户提供
 * @author tomsun28
 * @date 16:35 2018/2/11
 */
public interface AccountProvider {

    /**
     * description 数据库用户密码账户提供
     *
     * @param appId 1
     * @return com.usthe.bootshiro.domain.vo.Account
     */
    Account loadAccount(String appId);

}
