package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthUserRole;

public interface AuthUserRoleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AuthUserRole record);

    int insertSelective(AuthUserRole record);

    AuthUserRole selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AuthUserRole record);

    int updateByPrimaryKey(AuthUserRole record);

    int deleteByUniqueKey(AuthUserRole record);
}