package com.usthe.bootshiro.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.RoleService;
import com.usthe.bootshiro.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 20:02 2018/3/20
 */
@RequestMapping("/role")
@RestController
public class RoleController extends BasicAction {

    private static final Logger LOGGER = LoggerFactory.getLogger(RoleController.class);

    @Autowired
    private RoleService roleService;

    @Autowired
    private UserService userService;

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色为roleId对应用户",httpMethod = "GET")
    @GetMapping("/users/{roleId}/{start}/{limit}")
    public Message getUserListByRoleId(@PathVariable Integer roleId, Integer start, Integer limit) {
        PageHelper.startPage(start,limit);
        List<AuthUser> users = userService.getUserListByRoleId(roleId);
        users.forEach(user->user.setPassword(null));
        PageInfo pageInfo = new PageInfo(users);
        return new Message().ok(6666,"return users success").addData("data",pageInfo);
    }

    @ApiOperation(value = "授权资源给角色",httpMethod = "POST")
    @PostMapping("/authority/resource")
    public Message authorityRoleResource(HttpServletRequest request) {
        Map<String,String> map = getRequestParameter(request);
        int roleId = Integer.valueOf(map.get("roleId"));
        int resourceId = Integer.valueOf(map.get("resourceId"));
        boolean flag = roleService.authorityRoleResource(roleId,resourceId);
        return flag ? new Message().ok(6666,"authority success") : new Message().error(1111,"authority error");
    }


}
