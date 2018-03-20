package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthUser;

public interface AuthUserMapper {
    int deleteByPrimaryKey(String uid);

    int insert(AuthUser record);

    int insertSelective(AuthUser record);

    AuthUser selectByPrimaryKey(String uid);

    int updateByPrimaryKeySelective(AuthUser record);

    int updateByPrimaryKey(AuthUser record);

    String selectUserRoles(String appId);
}