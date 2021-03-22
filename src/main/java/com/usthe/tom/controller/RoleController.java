package com.usthe.tom.controller;

import com.usthe.tom.pojo.dto.Message;
import com.usthe.tom.pojo.entity.AuthResource;
import com.usthe.tom.pojo.entity.AuthRole;
import com.usthe.tom.service.RoleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


/**
 * @author tomsun28
 * @date 00:24 2019-08-01
 */
@RestController
@RequestMapping("/role")
@Slf4j
public class RoleController {

    @Autowired
    private RoleService roleService;


    @GetMapping("/resource/{roleId}")
    public ResponseEntity<Message> getResourceOwnByRole(@PathVariable Long roleId, @RequestParam Integer currentPage, @RequestParam Integer pageSize) {
        currentPage = currentPage == null ? 0 : currentPage;
        pageSize = pageSize == null ? 8 : pageSize;
        Page<AuthResource> resourcePage = roleService.getPageResourceOwnRole(roleId, currentPage, pageSize);
        Message message = Message.builder().data(resourcePage).build();
        return ResponseEntity.ok().body(message);
    }

    @GetMapping("/resource/-/{roleId}")
    public ResponseEntity<Message> getResourceNotOwnByRole(@PathVariable Long roleId, @RequestParam Integer currentPage, @RequestParam Integer pageSize) {
        currentPage = currentPage == null ? 0 : currentPage;
        pageSize = pageSize == null ? 8 : pageSize;
        Page<AuthResource> resourcePage = roleService.getPageResourceNotOwnRole(roleId, currentPage, pageSize);
        Message message = Message.builder().data(resourcePage).build();
        return ResponseEntity.ok().body(message);
    }

    @PostMapping("/authority/resource/{roleId}/{resourceId}")
    public ResponseEntity<Message> authorityRoleResource(@PathVariable Long roleId,
                                                         @PathVariable Long resourceId) {
        roleService.authorityRoleResource(roleId,resourceId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/authority/resource/{roleId}/{resourceId}")
    public ResponseEntity<Message> deleteAuthorityRoleResource(@PathVariable Long roleId,
                                                         @PathVariable Long resourceId) {
        roleService.deleteAuthorityRoleResource(roleId,resourceId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping
    public ResponseEntity<Message> addRole(@RequestBody @Validated AuthRole authRole) {
        if (roleService.addRole(authRole)) {
            if (log.isDebugEnabled()) {
                log.debug("add role success: {}", authRole);
            }
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            Message message = Message.builder()
                    .errorMsg("role already exist").build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
        }
    }

    @PutMapping
    public ResponseEntity<Message> updateRole(@RequestBody @Validated AuthRole authRole) {
        if (roleService.updateRole(authRole)) {
            if (log.isDebugEnabled()) {
                log.debug("update role success: {}", authRole);
            }
            return ResponseEntity.ok().build();
        } else {
            Message message = Message.builder()
                    .errorMsg("role not exist").build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
        }
    }

    @DeleteMapping("/{roleId}")
    public ResponseEntity<Message> deleteRole(@PathVariable Long roleId) {
        if (roleService.deleteRole(roleId)) {
            if (log.isDebugEnabled()) {
                log.debug("delete role success: {}", roleId);
            }
            return ResponseEntity.ok().build();
        } else {
            Message message = Message.builder()
                    .errorMsg("delete role fail, no this role here").build();
            log.debug("delete role fail: {}", roleId);
            return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
        }
    }

    @GetMapping
    public ResponseEntity<Message> getRole(@RequestParam Integer currentPage, @RequestParam Integer pageSize ) {
        currentPage = currentPage == null ? 0 : currentPage;
        pageSize = pageSize == null ? 8 : pageSize;
        Page<AuthRole> rolePage = roleService.getPageRole(currentPage, pageSize);
        Message message = Message.builder().data(rolePage).build();
        return ResponseEntity.ok().body(message);
    }

}
