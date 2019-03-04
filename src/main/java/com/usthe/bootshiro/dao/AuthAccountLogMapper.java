package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthAccountLog;
import org.springframework.dao.DataAccessException;

import java.util.List;

/**
 * @author tomsun28
 * @date 8:27 2018/4/22
 */
public interface AuthAccountLogMapper {

    /**
     * description 获取账户操作相关日志
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthAccountLog>
     */
    List<AuthAccountLog> selectAccountLogList();

    /**
     * description 插入日志到数据库
     *
     * @param authAccountLog 1
     * @return int
     * @throws DataAccessException when
     */
    int insertSelective(AuthAccountLog authAccountLog) throws DataAccessException;

}
