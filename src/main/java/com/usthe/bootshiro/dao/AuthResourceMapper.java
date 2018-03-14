package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthResource;
import com.usthe.bootshiro.domain.bo.AuthResourceExample;
import java.util.List;

import com.usthe.bootshiro.shiro.rule.RolePermRule;
import org.apache.ibatis.annotations.Param;

public interface AuthResourceMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AuthResource record);

    int insertSelective(AuthResource record);

    List<AuthResource> selectByExample(AuthResourceExample example);

    AuthResource selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") AuthResource record, @Param("example") AuthResourceExample example);

    int updateByExample(@Param("record") AuthResource record, @Param("example") AuthResourceExample example);

    int updateByPrimaryKeySelective(AuthResource record);

    int updateByPrimaryKey(AuthResource record);

    List<RolePermRule> selectRoleRules();
}