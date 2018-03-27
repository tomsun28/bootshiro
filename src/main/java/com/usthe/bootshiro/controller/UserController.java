package com.usthe.bootshiro.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.UserService;
import com.usthe.bootshiro.util.JsonWebTokenUtil;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;
import java.util.Set;

/* *
 * @Author tomsun28
 * @Description 用户相关操作
 * @Date 21:05 2018/3/17
 */
@RestController
@RequestMapping("/user")
public class UserController extends BasicAction{

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;


    @ApiOperation(value = "获取对应用户角色",notes = "GET根据用户的appId获取对应用户的角色")
    @GetMapping("/role/{appId}")
    public Message getUserRoleList(@PathVariable String appId) {

        String roles = userService.loadAccountRole(appId);
        Set<String> roleSet = JsonWebTokenUtil.split(roles);
        LOGGER.info(roleSet.toString());
        return new Message().ok(0000,"return roles success").addData("roles",roleSet);
    }


    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取用户列表",notes = "GET获取所有注册用户的信息列表")
    @GetMapping("/list/{start}/{limit}")
    public Message getUserList(@PathVariable Integer start, Integer limit) {

        PageHelper.startPage(start,limit);
        List<AuthUser> authUsers = userService.getUserList();
//        authUsers.forEach(user->user.setPassword(null));
        PageInfo pageInfo = new PageInfo(authUsers);
        return new Message().ok(0000,"return user list success").addData("pageInfo",pageInfo);
    }

    @ApiOperation(value = "给用户授权添加角色",httpMethod = "POST")
    @PostMapping("/authority/role")
    public Message authorityUserRole(HttpServletRequest request) {
        Map<String,String> map = getRequestParameter(request);
        String uid = map.get("uid");
        int roleId = Integer.valueOf(map.get("roleId"));
        boolean flag = userService.authorityUserRole(uid,roleId);
        return flag ? new Message().ok(0000,"authority success") : new Message().error(1111,"authority error");
    }

    @ApiOperation(value = "删除已经授权的用户角色",httpMethod = "DELETE")
    @DeleteMapping("/authority/role")
    public Message deleteAuthorityUserRole(HttpServletRequest request) {
        Map<String,String> map = getRequestParameter(request);
        String uid = map.get("uid");
        int roleId = Integer.valueOf(map.get("roleId"));
        return userService.deleteAuthorityUserRole(uid,roleId) ? new Message().ok(0000,"delete success") : new Message().error(1111,"delete fail");
    }



}
