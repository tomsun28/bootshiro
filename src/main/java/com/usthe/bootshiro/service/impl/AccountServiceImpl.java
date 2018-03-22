package com.usthe.bootshiro.service.impl;

import com.usthe.bootshiro.dao.AuthUserMapper;
import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Account;
import com.usthe.bootshiro.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 22:04 2018/3/7
 */
@Service("AccountService")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AuthUserMapper userMapper;

    @Override
    public Account loadAccount(String appId) {
        AuthUser user = userMapper.selectByUniqueKey(appId);
        return new Account(user.getUsername(),user.getPassword(),user.getSalt());
    }

    @Override
    public boolean registerAccount(AuthUser account) {

        return userMapper.insertSelective(account) >=1 ? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public String loadAccountRole(String appId) {

        return userMapper.selectUserRoles(appId);
    }


}
