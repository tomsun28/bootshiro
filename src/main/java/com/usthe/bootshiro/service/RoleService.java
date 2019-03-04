package com.usthe.bootshiro.service;

import com.usthe.bootshiro.domain.bo.AuthRole;

import java.util.List;

/**
 * @author tomsun28
 * @date 9:10 2018/3/20
 */
public interface RoleService {

    /**
     * description TODO
     *
     * @param roleId 1
     * @param resourceId 2
     * @return boolean
     */
    boolean authorityRoleResource(int roleId, int resourceId);

    /**
     * description TODO
     *
     * @param role 1
     * @return boolean
     */
    boolean addRole(AuthRole role);

    /**
     * description TODO
     *
     * @param role 1
     * @return boolean
     */
    boolean updateRole(AuthRole role);

    /**
     * description TODO
     *
     * @param roleId 1
     * @return boolean
     */
    boolean deleteRoleByRoleId(Integer roleId);

    /**
     * description TODO
     *
     * @param roleId 1
     * @param resourceId 2
     * @return boolean
     */
    boolean deleteAuthorityRoleResource(Integer roleId, Integer resourceId);

    /**
     * description TODO
     *
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthRole>
     */
    List<AuthRole> getRoleList();
}
