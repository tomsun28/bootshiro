package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthRole;
import org.springframework.dao.DataAccessException;

import java.util.List;

public interface AuthRoleMapper {
    int deleteByPrimaryKey(Integer id) throws DataAccessException;

    int insert(AuthRole record) throws DataAccessException;

    int insertSelective(AuthRole record) throws DataAccessException;

    AuthRole selectByPrimaryKey(Integer id) throws DataAccessException;

    int updateByPrimaryKeySelective(AuthRole record) throws DataAccessException;

    int updateByPrimaryKey(AuthRole record) throws DataAccessException;

    List<AuthRole> selectRoles() throws DataAccessException;
}