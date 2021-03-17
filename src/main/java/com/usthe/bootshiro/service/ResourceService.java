package com.usthe.bootshiro.service;

import com.usthe.bootshiro.domain.bo.AuthResource;

import java.util.List;
import java.util.Set;

/**
 * @author tomsun28
 * @date 13:39 2018/3/18
 */
public interface ResourceService {

    /**
     * description TODO
     *
     * @param appId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getAuthorityMenusByUid(String appId);

    /**
     * description TODO
     *
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getMenus();

    /**
     * description TODO
     *
     * @param menu 1
     * @return java.lang.Boolean
     */
    Boolean addMenu(AuthResource menu);

    /**
     * description TODO
     *
     * @param menu 1
     * @return java.lang.Boolean
     */
    Boolean modifyMenu(AuthResource menu);

    /**
     * description TODO
     *
     * @param menuId 1
     * @return java.lang.Boolean
     */
    Boolean deleteMenuByMenuId(Integer menuId);


    /**
     * description TODO
     *
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getApiTeamList();

    /**
     * description TODO
     *
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getApiList();

    /**
     * description TODO
     *
     * @param teamId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getApiListByTeamId(Integer teamId);

    /**
     * description TODO
     *
     * @param roleId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getAuthorityApisByRoleId(Integer roleId);

    /**
     * description TODO
     *
     * @param roleId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getAuthorityMenusByRoleId(Integer roleId);

    /**
     * description TODO
     *
     * @param roleId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getNotAuthorityApisByRoleId(Integer roleId);

    /**
     * description
     *
     * @param roleId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthResource>
     */
    List<AuthResource> getNotAuthorityMenusByRoleId(Integer roleId);

    /**
     * get enabled resource-path-role eg: /api/v2/host===post===[role2,role3,role4]
     * @return resource-path-role
     */
    Set<String> getAllEnableResourcePath();

    /**
     * get disable resource-path-role eg: /api/v2/host===post===[role2,role3,role4]
     * @return resource-path-role
     */
    Set<String> getAllDisableResourcePath();
}
