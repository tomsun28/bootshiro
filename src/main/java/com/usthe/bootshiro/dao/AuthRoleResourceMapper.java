package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthRoleResource;
import org.apache.ibatis.annotations.Param;

public interface AuthRoleResourceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AuthRoleResource record);

    int insertSelective(AuthRoleResource record);

    AuthRoleResource selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AuthRoleResource record);

    int updateByPrimaryKey(AuthRoleResource record);

    int deleteByUniqueKey(@Param("roleId") Integer roleId,@Param("resourceId") Integer resourceId);
}