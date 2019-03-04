package com.usthe.bootshiro.dao;

import com.usthe.bootshiro.domain.bo.AuthUser;
import org.springframework.dao.DataAccessException;
import java.util.List;

/**
 * @author tomsun28
 * @date 10:35 2018/4/22
 */
public interface AuthUserMapper {

    /**
     * description TODO
     *
     * @param uid 1
     * @return int
     * @throws DataAccessException when
     */
    int deleteByPrimaryKey(String uid) throws DataAccessException;

    /**
     * description TODO
     *
     * @param record 1
     * @return int
     * @throws DataAccessException when
     */
    int insert(AuthUser record) throws DataAccessException;

    /**
     * description TODO
     *
     * @param record 1
     * @return int
     * @throws DataAccessException when
     */
    int insertSelective(AuthUser record) throws DataAccessException;

    /**
     * description TODO
     *
     * @param uid 1
     * @return com.usthe.bootshiro.domain.bo.AuthUser
     * @throws DataAccessException when
     */
    AuthUser selectByPrimaryKey(String uid) throws DataAccessException;

    /**
     * description TODO
     *
     * @param record 1
     * @return int
     * @throws DataAccessException when
     */
    int updateByPrimaryKeySelective(AuthUser record) throws DataAccessException;

    /**
     * description TODO
     *
     * @param record 1
     * @return int
     * @throws DataAccessException when
     */
    int updateByPrimaryKey(AuthUser record) throws DataAccessException;

    /**
     * description TODO
     *
     * @param appId 1
     * @return java.lang.String
     * @throws DataAccessException when
     */
    String selectUserRoles(String appId) throws DataAccessException;

    /**
     * description TODO
     *
     * @param appId 1
     * @return com.usthe.bootshiro.domain.bo.AuthUser
     * @throws DataAccessException when
     */
    AuthUser selectByUniqueKey(String appId) throws DataAccessException;

    /**
     * description TODO
     *
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthUser>
     * @throws DataAccessException when
     */
    List<AuthUser> selectUserList() throws DataAccessException;

    /**
     * description TODO
     *
     * @param roleId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthUser>
     * @throws DataAccessException when
     */
    List<AuthUser> selectUserListByRoleId(Integer roleId) throws DataAccessException;

    /**
     * description TODO
     *
     * @param roleId 1
     * @return java.util.List<com.usthe.bootshiro.domain.bo.AuthUser>
     * @throws DataAccessException when
     */
    List<AuthUser> selectUserListExtendByRoleId(Integer roleId) throws DataAccessException;
}