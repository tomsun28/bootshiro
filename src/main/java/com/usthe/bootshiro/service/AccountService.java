package com.usthe.bootshiro.service;

import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Account;

/**
 * @author tomsun28
 * @date 22:02 2018/3/7
 */
public interface AccountService {

    /**
     * description TODO
     *
     * @param appId 1
     * @return com.usthe.bootshiro.domain.vo.Account
     */
    Account loadAccount(String appId);
    /**
     * description TODO
     *
     * @param uid 1
     * @return boolean
     */
    boolean isAccountExistByUid(String uid);
    /**
     * description TODO
     *
     * @param account 1
     * @return boolean
     */
    boolean registerAccount(AuthUser account);
    /**
     * description TODO
     *
     * @param appId 1
     * @return java.lang.String
     */
    String loadAccountRole(String appId);
}
