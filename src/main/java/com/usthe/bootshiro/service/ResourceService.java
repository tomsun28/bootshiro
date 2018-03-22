package com.usthe.bootshiro.service;

import com.usthe.bootshiro.domain.bo.AuthResource;

import java.util.List;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 13:39 2018/3/18
 */
public interface ResourceService {

    List<AuthResource> getAuthorityMenusByAppId(String appId);
}
