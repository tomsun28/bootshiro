package com.usthe.bootshiro.service;

import com.usthe.bootshiro.domain.bo.AuthRole;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 9:10 2018/3/20
 */
public interface RoleService {


    boolean authorityRoleResource(int roleId, int resourceId);

    boolean addRole(AuthRole role);

    boolean updateRole(AuthRole role);

    boolean deleteRoleByRoleId(Integer roleId);

    boolean deleteAuthorityRoleResource(Integer roleId, Integer resourceId);
}
