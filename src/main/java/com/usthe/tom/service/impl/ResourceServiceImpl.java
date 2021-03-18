package com.usthe.tom.service.impl;

import com.usthe.tom.dao.AuthResourceDao;
import com.usthe.tom.pojo.entity.AuthResource;
import com.usthe.tom.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * @author tomsun28
 * @date 13:09 2019-08-04
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class ResourceServiceImpl implements ResourceService {

    @Autowired
    private AuthResourceDao authResourceDao;

    @Override
    public boolean addResource(AuthResource authResource) {
        if (isResourceExist(authResource)) {
            return false;
        } else {
            authResourceDao.saveAndFlush(authResource);
            return true;
        }
    }

    @Override
    public boolean isResourceExist(AuthResource authResource) {
        AuthResource resource = AuthResource.builder()
                .uri(authResource.getUri())
                .method(authResource.getMethod())
                .build();
        Example<AuthResource> example = Example.of(resource);
        return authResourceDao.exists(example);
    }

    @Override
    public boolean updateResource(AuthResource authResource) {
        if (authResourceDao.existsById(authResource.getId())) {
            authResourceDao.saveAndFlush(authResource);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteResource(Long resourceId) {
        if (authResourceDao.existsById(resourceId)) {
            authResourceDao.deleteById(resourceId);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Optional<List<AuthResource>> getAllResource() {
        List<AuthResource> resourceList = authResourceDao.findAll();
        return Optional.of(resourceList);
    }

    @Override
    public Page<AuthResource> getPageResource(Integer currentPage, Integer pageSize) {
        PageRequest pageRequest = PageRequest.of(currentPage, pageSize);
        return authResourceDao.findAll(pageRequest);
    }

    @Override
    public Set<String> getAllEnableResourcePath() {
        Optional<List<String>> optional = authResourceDao.getEnableResourcePathRoleData();
        return optional.<Set<String>>map(HashSet::new).orElseGet(() -> new HashSet<>(0));
    }

    @Override
    public Set<String> getAllDisableResourcePath() {
        Optional<List<String>> optional = authResourceDao.getDisableResourcePathData();
        return optional.<Set<String>>map(HashSet::new).orElseGet(() -> new HashSet<>(0));
    }
}
