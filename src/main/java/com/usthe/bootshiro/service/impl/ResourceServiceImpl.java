package com.usthe.bootshiro.service.impl;

import com.usthe.bootshiro.dao.AuthResourceMapper;
import com.usthe.bootshiro.domain.bo.AuthResource;
import com.usthe.bootshiro.service.ResourceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 10:59 2018/3/26
 */
@Service("ResourceService")
public class ResourceServiceImpl implements ResourceService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ResourceServiceImpl.class);

    @Autowired
    private AuthResourceMapper authResourceMapper;

    @Override
    public List<AuthResource> getAuthorityMenusByUid(String appId) {
        return authResourceMapper.selectAuthorityMenusByUid(appId);
    }

    @Override
    public List<AuthResource> getMenus() {
        return authResourceMapper.selectMenus();
    }

    @Override
    public Boolean addMenu(AuthResource menu) {
        int num = authResourceMapper.insertSelective(menu);
        return num == 1 ? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public Boolean modifyMenu(AuthResource menu) {
        int num = authResourceMapper.updateByPrimaryKeySelective(menu);
        return num == 1 ? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public Boolean deleteMenuByMenuId(Integer menuId) {
        int num = authResourceMapper.deleteByPrimaryKey(menuId);
        return num == 1 ? Boolean.TRUE : Boolean.FALSE;
    }

    @Override
    public List<AuthResource> getApiTeamList() {
        return authResourceMapper.selectApiTeamList();
    }

    @Override
    public List<AuthResource> getApiList() {
        return authResourceMapper.selectApiList();
    }

    @Override
    public List<AuthResource> getApiListByTeamId(Integer teamId) {
        return authResourceMapper.selectApiListByTeamId(teamId);
    }

    @Override
    public List<AuthResource> getAuthorityApisByRoleId(Integer roleId) {
        return authResourceMapper.selectApisByRoleId(roleId);
    }

    @Override
    public List<AuthResource> getAuthorityMenusByRoleId(Integer roleId) {
        return authResourceMapper.selectMenusByRoleId(roleId);
    }

}
