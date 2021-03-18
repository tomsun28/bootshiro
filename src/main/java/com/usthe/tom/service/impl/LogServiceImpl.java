package com.usthe.tom.service.impl;

import com.usthe.tom.dao.AuthAccountLogDao;
import com.usthe.tom.dao.AuthOperationLogDao;
import com.usthe.tom.pojo.entity.AuthAccountLog;
import com.usthe.tom.pojo.entity.AuthOperationLog;
import com.usthe.tom.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author tomsun28
 * @date 2021/3/18 22:26
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class LogServiceImpl implements LogService {

    @Autowired
    AuthAccountLogDao accountLogDao;

    @Autowired
    AuthOperationLogDao operationLogDao;

    @Override
    public Page<AuthAccountLog> getAccountLogs(Integer currentPage, Integer pageSize) {
        Sort sort = Sort.by(Sort.Order.desc("gmt_create"));
        PageRequest pageRequest = PageRequest.of(currentPage, pageSize, sort);
        return accountLogDao.findAll(pageRequest);
    }

    @Override
    public Page<AuthOperationLog> getOperationLogs(Integer currentPage, Integer pageSize) {
        Sort sort = Sort.by(Sort.Order.desc("gmt_create"));
        PageRequest pageRequest = PageRequest.of(currentPage, pageSize, sort);
        return operationLogDao.findAll(pageRequest);
    }
}
