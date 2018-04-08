package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthRoleResource;

public interface AuthRoleResourceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AuthRoleResource record);

    int insertSelective(AuthRoleResource record);

    AuthRoleResource selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AuthRoleResource record);

    int updateByPrimaryKey(AuthRoleResource record);

    int deleteByUniqueKey(Integer roleId, Integer resourceId);
}