package com.usthe.bootshiro.controller;

import com.usthe.bootshiro.domain.bo.AuthResource;
import com.usthe.bootshiro.domain.vo.MenuTreeNode;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.ResourceService;
import com.usthe.bootshiro.util.TreeUtil;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/* *
 * @Author tomsun28
 * @Description 资源URL管理
 * @Date 21:36 2018/3/17
 */
@RestController
@RequestMapping("/resource")
public class ResourceController extends BasicAction{

    private static final Logger LOGGER = LoggerFactory.getLogger(ResourceController.class);

    @Autowired
    private ResourceService resourceService;

    @ApiOperation(value = "获取用户被授权菜单",notes = "通过appId获取对应用户被授权的菜单列表,获取完整菜单树形结构")
    @GetMapping("authorityMenu/get")
    public Message getAuthorityMenu(HttpServletRequest request) {
        String uid = request.getParameter("uid");
        List<MenuTreeNode> treeNodes = new ArrayList<>();
        List<AuthResource> resources = resourceService.getAuthorityMenusByUid(uid);

        for (AuthResource resource : resources) {
            MenuTreeNode node = new MenuTreeNode();
            BeanUtils.copyProperties(resource,node);
            treeNodes.add(node);
        }
        List<MenuTreeNode> menuTreeNodes = TreeUtil.buildTreeBy2Loop(treeNodes,-1);
        return new Message().ok(0000,"return menu list success").addData("menuTree",menuTreeNodes);
    }





}
