package com.usthe.bootshiro.service;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 9:10 2018/3/20
 */
public interface RoleService {


    boolean authorityRoleResource(int roleId, int resourceId);
}
