package com.usthe.bootshiro.controller;

import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.AccountService;
import com.usthe.bootshiro.util.*;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

/* *
 * @Author tomsun28
 * @Description post新增,get读取,put完整更新,patch部分更新,delete删除
 * @Date 14:40 2018/3/8
 */
@RestController
@RequestMapping("/account")
public class AccountController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountController.class);

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Autowired(required = false)
    @Qualifier("AccountService")
    private AccountService accountService;

    /* *
     * @Description 这里已经在 passwordFilter 进行了登录认证
     * @Param [] 登录签发 JWT
     * @Return java.lang.String
     */
    @PostMapping("/login")
    public Message accountLogin(HttpServletRequest request, HttpServletResponse response) {
        Map<String,String> params = RequestResponseUtil.getRequestParamter(request);
        String appId = params.get("appId");
        // 根据appId获取其对应所拥有的角色(这里设计为角色对应资源，没有权限对应资源)
        String roles = accountService.loadAccountRole(appId);
        long refreshPeriodTime = 6000000L;
        String jwt = JsonWebTokenUtil.issueJWT(UUID.randomUUID().toString(),appId,
                "token-server",refreshPeriodTime >> 2,roles,null, SignatureAlgorithm.HS512);
        // 将签发的JWT存储到Redis： {JWT-SESSION-{appID} , jwt}
        redisTemplate.opsForValue().set("JWT-SESSION-"+appId,jwt,refreshPeriodTime, TimeUnit.SECONDS);

        return new Message().ok(1003,"issue jwt success").addData("jwt",jwt);
    }

    /* *
     * @Description 用户账号的注册
     * @Param [request, response]
     * @Return com.usthe.bootshiro.domain.vo.Message
     */
    @PostMapping("/register")
    public Message accountRegister(HttpServletRequest request,HttpServletResponse response) {

        Map<String,String> params = RequestResponseUtil.getRequestParamter(request);
        AuthUser authUser = new AuthUser();
        String username = params.get("username");
        String uid = params.get("uid");
        String password = params.get("password");
        if (StringUtils.isEmpty(username)||StringUtils.isEmpty(uid)||StringUtils.isEmpty(password)) {
            // 三个必须信息缺一不可,返回注册账号信息缺失
            return new Message().error(2001,"lack account info");
        }
        authUser.setUid(uid);
        authUser.setUsername(username);

        // 从Redis取出密码传输加密解密秘钥
        String tokenKey = redisTemplate.opsForValue().get("PASSWORD_TOKEN_KEY_"+request.getRemoteAddr().toUpperCase());
        String realPassword = AESUtil.aesDecode(password,tokenKey);
        String salt = CommonUtil.getRandomString(6);
        // 存储到数据库的密码为 MD5(原密码+盐值)
        authUser.setPassword(MD5Util.md5(realPassword+salt));
        authUser.setSalt(salt);
        authUser.setCreateTime(new Date());
        if (!StringUtils.isEmpty(params.get("realName"))) {
            authUser.setRealName(params.get("realName"));
        }
        if (!StringUtils.isEmpty(params.get("avatar"))) {
            authUser.setAvatar(params.get("avatar"));
        }
        if (!StringUtils.isEmpty(params.get("phone"))) {
            authUser.setPhone(params.get("phone"));
        }
        if (!StringUtils.isEmpty(params.get("email"))) {
            authUser.setEmail(params.get("email"));
        }
        if (!StringUtils.isEmpty(params.get("sex"))) {
            authUser.setSex(Byte.valueOf(params.get("sex")));
        }
        if (!StringUtils.isEmpty(params.get("createWhere"))) {
            authUser.setCreateWhere(Byte.valueOf(params.get("createWhere")));
        }
        authUser.setStatus((byte)1);

        accountService.registerAccount(authUser);
        return new Message().ok(2002,"register success");
    }

}
