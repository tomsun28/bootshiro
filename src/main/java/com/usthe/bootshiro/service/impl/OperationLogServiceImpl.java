package com.usthe.bootshiro.service.impl;

import com.usthe.bootshiro.dao.AuthOperationLogMapper;
import com.usthe.bootshiro.domain.bo.AuthOperationLog;
import com.usthe.bootshiro.service.OperationLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/**
 * @author tomsun28
 * @date 9:34 2018/4/22
 */
@Service
public class OperationLogServiceImpl implements OperationLogService {

    @Autowired
    AuthOperationLogMapper authOperationLogMapper;

    @Override
    public List<AuthOperationLog> getOperationList() {
        return authOperationLogMapper.selectOperationLogList();
    }
}
