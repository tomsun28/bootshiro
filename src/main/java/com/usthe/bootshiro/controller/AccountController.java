package com.usthe.bootshiro.controller;

import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.service.AccountService;
import com.usthe.bootshiro.service.UserService;
import com.usthe.bootshiro.support.factory.LogTaskFactory;
import com.usthe.bootshiro.support.manager.LogExeManager;
import com.usthe.bootshiro.util.*;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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
public class AccountController extends BasicAction{

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountController.class);

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Autowired
    private AccountService accountService;

    @Autowired
    private UserService userService;

    /* *
     * @Description 这里已经在 passwordFilter 进行了登录认证
     * @Param [] 登录签发 JWT
     * @Return java.lang.String
     */
    @ApiOperation(value = "用户登录",notes = "POST用户登录签发JWT")
    @PostMapping("/login")
    public Message accountLogin(HttpServletRequest request, HttpServletResponse response) {
        Map<String,String> params = RequestResponseUtil.getRequestParameters(request);
        String appId = params.get("appId");
        // 根据appId获取其对应所拥有的角色(这里设计为角色对应资源，没有权限对应资源)
        String roles = accountService.loadAccountRole(appId);
        // 时间以秒计算,token有效刷新时间是token有效过期时间的2倍
        long refreshPeriodTime = 36000L;
        String jwt = JsonWebTokenUtil.issueJWT(UUID.randomUUID().toString(),appId,
                "token-server",refreshPeriodTime >> 2,roles,null, SignatureAlgorithm.HS512);
        // 将签发的JWT存储到Redis： {JWT-SESSION-{appID} , jwt}
        redisTemplate.opsForValue().set("JWT-SESSION-"+appId,jwt,refreshPeriodTime, TimeUnit.SECONDS);
        AuthUser authUser = userService.getUserByAppId(appId);
        authUser.setPassword(null);
        authUser.setSalt(null);

        LogExeManager.getInstance().executeLogTask(LogTaskFactory.loginLog(appId,IpUtil.getIpFromRequest(WebUtils.toHttp(request)),(short)1,null));

        return new Message().ok(1003,"issue jwt success").addData("jwt",jwt).addData("user",authUser);
    }

    /* *
     * @Description 用户账号的注册
     * @Param [request, response]
     * @Return com.usthe.bootshiro.domain.vo.Message
     */
    @ApiOperation(value = "用户注册",notes = "POST用户注册")
    @PostMapping("/register")
    public Message accountRegister(HttpServletRequest request,HttpServletResponse response) {

        Map<String,String> params = RequestResponseUtil.getRequestParameters(request);
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
        LogExeManager.getInstance().executeLogTask(LogTaskFactory.registerLog(uid,IpUtil.getIpFromRequest(WebUtils.toHttp(request)),(short)1,null));

        return new Message().ok(2002,"register success");
    }

}
