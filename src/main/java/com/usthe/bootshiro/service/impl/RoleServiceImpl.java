package com.usthe.bootshiro.service.impl;

import com.usthe.bootshiro.dao.AuthRoleMapper;
import com.usthe.bootshiro.dao.AuthRoleResourceMapper;
import com.usthe.bootshiro.domain.bo.AuthRole;
import com.usthe.bootshiro.domain.bo.AuthRoleResource;
import com.usthe.bootshiro.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 12:28 2018/3/26
 */
@Service("RoleService")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private AuthRoleResourceMapper authRoleResourceMapper;

    @Autowired
    private AuthRoleMapper authRoleMapper;

    @Override
    public boolean authorityRoleResource(int roleId, int resourceId) {
        AuthRoleResource authRoleResource = new AuthRoleResource();
        authRoleResource.setRoleId(roleId);
        authRoleResource.setResourceId(resourceId);
        authRoleResource.setCreateTime(new Date());
        authRoleResource.setUpdateTime(new Date());
        return authRoleResourceMapper.insert(authRoleResource) == 1? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public boolean addRole(AuthRole role) {
        int num = authRoleMapper.insertSelective(role);
        return num == 1? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public boolean updateRole(AuthRole role) {
        int num = authRoleMapper.updateByPrimaryKeySelective(role);
        return num == 1? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public boolean deleteRoleByRoleId(Integer roleId) {
        int num = authRoleMapper.deleteByPrimaryKey(roleId);
        return num == 1? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public boolean deleteAuthorityRoleResource(Integer roleId, Integer resourceId) {
        int num = authRoleResourceMapper.deleteByUniqueKey(roleId, resourceId);
        return false;
    }
}
