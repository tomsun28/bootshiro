package com.usthe.bootshiro.service.impl;

import com.usthe.bootshiro.dao.AuthUserMapper;
import com.usthe.bootshiro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 21:15 2018/3/17
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private AuthUserMapper userMapper;

    @Override
    public String loadAccountRole(String appId) {

        return userMapper.selectUserRoles(appId);
    }
}
