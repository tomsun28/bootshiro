package com.usthe.tom.controller;



import com.usthe.tom.pojo.dto.Account;
import com.usthe.tom.pojo.dto.Message;
import com.usthe.tom.service.AccountService;
import com.usthe.sureness.util.JsonWebTokenUtil;
import com.usthe.tom.support.log.LogExeManager;
import com.usthe.tom.support.log.LogTaskFactory;
import com.usthe.tom.util.CommonUtil;
import com.usthe.tom.util.IpUtil;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;
import java.util.concurrent.TimeUnit;

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

    @Autowired
    private StringRedisTemplate redisTemplate;

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

    @ApiOperation(value = "获取账户信息传输密钥", notes = "适用 password 加密")
    @GetMapping("/transfer/key")
    public ResponseEntity<Message> transferKey(HttpServletRequest request) {
        // 动态生成秘钥，redis存储秘钥供之后秘钥验证使用，设置有效期30秒用完即丢弃
        String transferKey = CommonUtil.getRandomString(8);
        String userKey = CommonUtil.getRandomString(4);
        String saveKey = "tom-transfer-key-" + IpUtil.getIpFromRequest(request) + userKey;
        redisTemplate.opsForValue().set(saveKey, transferKey,30, TimeUnit.SECONDS);
        Map<String, String> responseMap = new HashMap<>(4);
        responseMap.put("transferKey", transferKey);
        responseMap.put("userKey", userKey);
        return ResponseEntity.ok().body(Message.builder().data(responseMap).build());
    }
}
