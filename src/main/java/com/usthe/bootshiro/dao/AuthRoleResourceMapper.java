package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthRoleResource;
import com.usthe.bootshiro.domain.bo.AuthRoleResourceExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AuthRoleResourceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AuthRoleResource record);

    int insertSelective(AuthRoleResource record);

    List<AuthRoleResource> selectByExample(AuthRoleResourceExample example);

    AuthRoleResource selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AuthRoleResource record, @Param("example") AuthRoleResourceExample example);

    int updateByExample(@Param("record") AuthRoleResource record, @Param("example") AuthRoleResourceExample example);

    int updateByPrimaryKeySelective(AuthRoleResource record);

    int updateByPrimaryKey(AuthRoleResource record);
}