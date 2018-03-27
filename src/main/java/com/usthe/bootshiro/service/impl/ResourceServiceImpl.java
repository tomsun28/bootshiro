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
}
