package com.usthe.tom.controller;



import com.usthe.tom.pojo.dto.Account;
import com.usthe.tom.pojo.dto.Message;
import com.usthe.tom.service.AccountService;
import com.usthe.sureness.util.JsonWebTokenUtil;
import com.usthe.tom.support.log.LogExeManager;
import com.usthe.tom.support.log.LogTaskFactory;
import com.usthe.tom.util.IpUtil;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * @author tomsun28
 * @date 00:24 2019-08-01
 */
@RestController
@RequestMapping("/auth")
@Slf4j
public class AccountController {

    @Autowired
    private AccountService accountService;

    private static final String TOKEN_SPLIT = "--";

    @ApiOperation(value = "站内登录,签发token", notes = "适用 username|email|phone + password")
    @PostMapping("/token")
    public ResponseEntity<Message> issueJwtToken(@RequestBody @Validated Account account, HttpServletRequest request) {
        boolean authenticatedFlag = accountService.authenticateAccount(account);
        if (!authenticatedFlag) {
            Message message = Message.builder()
                    .errorMsg("username or password not incorrect").build();
            if (log.isDebugEnabled()) {
                log.debug("account: {} authenticated fail", account);
            }
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(message);
        }
        List<String> ownRole = accountService.loadAccountRoles(account.getIdentifier());
        long refreshPeriodTime = 36000L;
        String jwt = JsonWebTokenUtil.issueJwt(UUID.randomUUID().toString(), account.getIdentifier(),
                "tom-auth-server", refreshPeriodTime >> 1, ownRole,
                null, false);
        Map<String, String> responseData = Collections.singletonMap("token", jwt);
        Message message = Message.builder().data(responseData).build();
        if (log.isDebugEnabled()) {
            log.debug("issue token success, account: {} -- token: {}", account, jwt);
        }
        LogExeManager.getInstance().executeLogTask(LogTaskFactory.loginLog(account.getIdentifier(), IpUtil.getIpFromRequest(request), true, "登录成功"));
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    @PostMapping("/custom/token")
    public ResponseEntity<Message> issueCustomToken(@RequestBody @Validated Account account) {
        boolean authenticatedFlag = accountService.authenticateAccount(account);
        if (!authenticatedFlag) {
            Message message = Message.builder()
                    .errorMsg("username or password not incorrect").build();
            if (log.isDebugEnabled()) {
                log.debug("account: {} authenticated fail", account);
            }
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(message);
        }
        long refreshPeriodTime = 36000L;
        String token = account.getIdentifier() + TOKEN_SPLIT + System.currentTimeMillis()
                + TOKEN_SPLIT + refreshPeriodTime
                + TOKEN_SPLIT + UUID.randomUUID().toString().replace("-", "");
        TokenStorage.addToken(account.getIdentifier(), token);
        Map<String, String> responseData = Collections.singletonMap("customToken", token);
        Message message = Message.builder().data(responseData).build();
        if (log.isDebugEnabled()) {
            log.debug("issue token success, account: {} -- token: {}", account, token);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    @ApiOperation(value = "站内注册", notes = "适用 username|email|phone + password")
    @PostMapping("/register")
    public ResponseEntity<Message> accountRegister(@RequestBody @Validated Account account, HttpServletRequest request) {
        if (accountService.registerAccount(account)) {
            Map<String, String> responseData = Collections.singletonMap("success", "sign up success, login after");
            Message message = Message.builder().data(responseData).build();
            if (log.isDebugEnabled()) {
                log.debug("account: {}, sign up success", account);
            }
            LogExeManager.getInstance().executeLogTask(LogTaskFactory.registerLog(account.getIdentifier(), IpUtil.getIpFromRequest(request), true, "注册成功"));
            return ResponseEntity.status(HttpStatus.CREATED).body(message);
        } else {
            LogExeManager.getInstance().executeLogTask(LogTaskFactory.registerLog(account.getIdentifier(), IpUtil.getIpFromRequest(request), false, "注册失败"));
            Message message = Message.builder()
                    .errorMsg("username already exist").build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
        }
    }
}
