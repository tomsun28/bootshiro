package com.usthe.bootshiro.service.impl;

import com.sun.org.apache.bcel.internal.generic.NEW;
import com.usthe.bootshiro.dao.AuthUserMapper;
import com.usthe.bootshiro.dao.AuthUserRoleMapper;
import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.bo.AuthUserRole;
import com.usthe.bootshiro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 21:15 2018/3/17
 */
@Service("UserService")
public class UserServiceImpl implements UserService {

    @Autowired
    private AuthUserMapper userMapper;

    @Autowired
    private AuthUserRoleMapper authUserRoleMapper;

    @Override
    public String loadAccountRole(String appId) {

        return userMapper.selectUserRoles(appId);
    }

    @Override
    public List<AuthUser> getUserList() {
        return userMapper.selectUserList();
    }

    @Override
    public List<AuthUser> getUserListByRoleId(Integer roleId) {
        return userMapper.selectUserListByRoleId(roleId);
    }

    @Override
    public boolean authorityUserRole(String uid, int roleId) {
        AuthUserRole authUserRole = new AuthUserRole();
        authUserRole.setRoleId(roleId);
        authUserRole.setUserId(uid);
        authUserRole.setCreateTime(new Date());
        authUserRole.setUpdateTime(new Date());
        return authUserRoleMapper.insert(authUserRole) == 1? Boolean.TRUE :Boolean.FALSE;
    }

    @Override
    public boolean deleteAuthorityUserRole(String uid, int roleId) {
        AuthUserRole authUserRole = new AuthUserRole();
        authUserRole.setUserId(uid);
        authUserRole.setRoleId(roleId);
        return authUserRoleMapper.deleteByUniqueKey(authUserRole) == 1? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public AuthUser getUserByAppId(String appId) {

        return userMapper.selectByUniqueKey(appId);
    }
}
