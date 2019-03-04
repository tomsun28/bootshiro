package com.usthe.bootshiro.service;

import com.usthe.bootshiro.domain.bo.AuthOperationLog;

import java.util.List;

/**
 * @author tomsun28
 * @date 9:30 2018/4/22
 */
public interface OperationLogService {

    /**
     * description TODO
     *
     * @param  1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthOperationLog>
     */
    List<AuthOperationLog> getOperationList();
}
