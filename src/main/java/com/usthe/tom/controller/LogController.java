package com.usthe.tom.controller;

import com.usthe.tom.pojo.dto.Message;
import com.usthe.tom.pojo.entity.AuthAccountLog;
import com.usthe.tom.pojo.entity.AuthOperationLog;
import com.usthe.tom.service.LogService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author tomsun28
 * @date 12:20 2018/4/22
 */
@RestController
@RequestMapping("/log")
public class LogController {

    @Autowired
    LogService logService;

    @ApiOperation(value = "获取日志记录", httpMethod = "GET")
    @RequestMapping("/account/{currentPage}/{pageSize}")
    public ResponseEntity<Message> getAccountLogList(@PathVariable Integer currentPage, @PathVariable Integer pageSize ) {
        Page<AuthAccountLog> accountLogs = logService.getAccountLogs(currentPage, pageSize);
        Message message = Message.builder().data(accountLogs).build();
        return ResponseEntity.ok().body(message);
    }

    @ApiOperation(value = "获取用户操作api日志列表", httpMethod = "GET")
    @RequestMapping("/operation/{currentPage}/{pageSize}")
    public ResponseEntity<Message> getOperationLogList(@PathVariable Integer currentPage, @PathVariable Integer pageSize) {
        Page<AuthOperationLog> accountLogs = logService.getOperationLogs(currentPage, pageSize);
        Message message = Message.builder().data(accountLogs).build();
        return ResponseEntity.ok().body(message);
    }
}
