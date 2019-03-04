package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthOperationLog;
import org.springframework.dao.DataAccessException;

import java.util.List;

/**
 * @author tomsun28
 * @date 8:28 2018/4/22
 */
public interface AuthOperationLogMapper {

    /**
     * description 获取资源相关操作日志
     *
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthOperationLog>
     */
    List<AuthOperationLog> selectOperationLogList();

    /**
     * description 插入资源相关操作日志
     *
     * @param operationLog 1
     * @return int
     * @throws DataAccessException when
     */
    int insertSelective(AuthOperationLog operationLog) throws DataAccessException;
}
