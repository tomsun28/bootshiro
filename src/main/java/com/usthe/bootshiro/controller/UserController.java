package com.usthe.bootshiro.controller;

import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.UserService;
import com.usthe.bootshiro.util.JsonWebTokenUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

/* *
 * @Author tomsun28
 * @Description 用户相关操作
 * @Date 21:05 2018/3/17
 */
@RestController
@RequestMapping("/user")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping("/role/get")
    public Message getUserRoleList(HttpServletRequest request) {

        String appId = request.getParameter("appId");
        String roles = userService.loadAccountRole(appId);
        Set<String> roleSet = JsonWebTokenUtil.split(roles);
        LOGGER.info(roleSet.toString());
        return new Message().ok(0000,"return roles success").addData("roles",roleSet);
    }

}
