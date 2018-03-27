package com.usthe.bootshiro.service.impl;

import com.usthe.bootshiro.dao.AuthRoleResourceMapper;
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

    @Override
    public boolean authorityRoleResource(int roleId, int resourceId) {
        AuthRoleResource authRoleResource = new AuthRoleResource();
        authRoleResource.setRoleId(roleId);
        authRoleResource.setResourceId(resourceId);
        authRoleResource.setCreateTime(new Date());
        authRoleResource.setUpdateTime(new Date());
        return authRoleResourceMapper.insert(authRoleResource) == 1? Boolean.TRUE : Boolean.FALSE;
    }
}
