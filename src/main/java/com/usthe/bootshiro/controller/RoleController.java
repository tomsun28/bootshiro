package com.usthe.bootshiro.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.usthe.bootshiro.domain.bo.AuthResource;
import com.usthe.bootshiro.domain.bo.AuthRole;
import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.ResourceService;
import com.usthe.bootshiro.service.RoleService;
import com.usthe.bootshiro.service.UserService;
import com.usthe.bootshiro.shiro.filter.ShiroFilterChainManager;
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

    @Autowired
    private ResourceService resourceService;

    @Autowired
    private ShiroFilterChainManager shiroFilterChainManager;

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色关联的(roleId)对应用户列表",httpMethod = "GET")
    @GetMapping("user/{roleId}/{currentPage}/{pageSize}")
    public Message getUserListByRoleId(@PathVariable Integer roleId, @PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        PageHelper.startPage(currentPage,pageSize);
        List<AuthUser> users = userService.getUserListByRoleId(roleId);
        users.forEach(user->user.setPassword(null));
        PageInfo pageInfo = new PageInfo(users);
        return new Message().ok(6666,"return users success").addData("data",pageInfo);
    }

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色未关联的用户列表", httpMethod = "GET")
    @GetMapping("user/-/{roleId}/{currentPage}/{pageSize}")
    public Message getUserListExtendByRoleId(@PathVariable Integer roleId, @PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<AuthUser> users = userService.getNotAuthorityUserListByRoleId(roleId);
        users.forEach(user -> user.setPassword(null));
        PageInfo pageInfo = new PageInfo(users);
        return new Message().ok(6666, "return users success").addData("data", pageInfo);
    }


    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色(roleId)所被授权的API资源")
    @GetMapping("api/{roleId}/{currentPage}/{pageSize}")
    public Message getRestApiExtendByRoleId(@PathVariable Integer roleId, @PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<AuthResource> authResources = resourceService.getAuthorityApisByRoleId(roleId);
        PageInfo pageInfo = new PageInfo(authResources);
        return new Message().ok(6666, "return api success").addData("data", pageInfo);
    }

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色(roleId)未被授权的API资源")
    @GetMapping("api/-/{roleId}/{currentPage}/{pageSize}")
    public Message getRestApiByRoleId(@PathVariable Integer roleId, @PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<AuthResource> authResources = resourceService.getNotAuthorityApisByRoleId(roleId);
        PageInfo pageInfo = new PageInfo(authResources);
        return new Message().ok(6666, "return api success").addData("data", pageInfo);
    }

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色(roleId)所被授权的menu资源")
    @GetMapping("menu/{roleId}/{currentPage}/{pageSize}")
    public Message getMenusByRoleId(@PathVariable Integer roleId, @PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<AuthResource> authResources = resourceService.getAuthorityMenusByRoleId(roleId);
        PageInfo pageInfo = new PageInfo(authResources);
        return new Message().ok(6666, "return api success").addData("data", pageInfo);
    }

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色(roleId)未被授权的menu资源")
    @GetMapping("menu/-/{roleId}/{currentPage}/{pageSize}")
    public Message getMenusExtendByRoleId(@PathVariable Integer roleId, @PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        PageHelper.startPage(currentPage, pageSize);
        List<AuthResource> authResources = resourceService.getNotAuthorityMenusByRoleId(roleId);
        PageInfo pageInfo = new PageInfo(authResources);
        return new Message().ok(6666, "return api success").addData("data", pageInfo);
    }

    @ApiOperation(value = "授权资源给角色",httpMethod = "POST")
    @PostMapping("/authority/resource")
    public Message authorityRoleResource(HttpServletRequest request) {
        Map<String,String> map = getRequestParameter(request);
        int roleId = Integer.valueOf(map.get("roleId"));
        int resourceId = Integer.valueOf(map.get("resourceId"));
        boolean flag = roleService.authorityRoleResource(roleId,resourceId);
        shiroFilterChainManager.reloadFilterChain();
        return flag ? new Message().ok(6666,"authority success") : new Message().error(1111,"authority error");
    }

    @ApiOperation(value = "删除对应的角色的授权资源",httpMethod = "DELETE")
    @DeleteMapping("/authority/resource/{roleId}/{resourceId}")
    public Message deleteAuthorityRoleResource(@PathVariable Integer roleId, @PathVariable Integer resourceId ) {
        boolean flag = roleService.deleteAuthorityRoleResource(roleId,resourceId);
        shiroFilterChainManager.reloadFilterChain();
        return flag ? new Message().ok(6666,"authority success") : new Message().error(1111,"authority error");
    }

    @SuppressWarnings("unchecked")
    @ApiOperation(value = "获取角色LIST", httpMethod = "GET")
    @GetMapping("{currentPage}/{pageSize}")
    public Message getRoles(@PathVariable Integer currentPage, @PathVariable Integer pageSize) {

        PageHelper.startPage(currentPage, pageSize);
        List<AuthRole> roles = roleService.getRoleList();
        PageInfo pageInfo = new PageInfo(roles);
        return new Message().ok(6666, "return roles success").addData("data", pageInfo);
    }

    @ApiOperation(value = "添加角色", httpMethod = "POST")
    @PostMapping("")
    public Message addRole(@RequestBody AuthRole role) {
        LOGGER.info(role.toString());
        boolean flag = roleService.addRole(role);
        if (flag) {
            return new Message().ok(6666, "add role success");
        } else {
            return new Message().error(111, "add role fail");
        }
    }

    @ApiOperation(value = "更新角色", httpMethod = "PUT")
    @PutMapping("")
    public Message updateRole(@RequestBody AuthRole role) {
        LOGGER.info(role.toString());
        boolean flag = roleService.updateRole(role);
        if (flag) {
            return new Message().ok(6666, "update success");
        } else {
            return new Message().error(1111, "update fail");
        }
    }

    @ApiOperation(value = "根据角色ID删除角色", httpMethod = "DELETE")
    @DeleteMapping("{roleId}")
    public Message deleteRoleByRoleId(@PathVariable Integer roleId) {
        LOGGER.info(roleId.toString() + "==========");
        boolean flag = roleService.deleteRoleByRoleId(roleId);
        if (flag) {
            return new Message().ok(6666, "delete success");
        } else {
            return new Message().error(1111, "delete fail");
        }
    }


}
