package com.usthe.bootshiro.controller;

import com.usthe.bootshiro.domain.bo.AuthUser;
import com.usthe.bootshiro.domain.vo.Message;
import com.usthe.bootshiro.util.*;
import io.jsonwebtoken.SignatureAlgorithm;
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

/* *
 * @Author tomsun28
 * @Description post新增,get读取,put完整更新,patch部分更新,delete删除
 * @Date 14:40 2018/3/8
 */
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private StringRedisTemplate redisTemplate;


    /* *
     * @Description 这里已经在 passwordFilter 进行了登录认证
     * @Param [] 登录签发 JWT
     * @Return java.lang.String
     */
    @PostMapping("/login")
    public Message accountLogin(HttpServletRequest request, HttpServletResponse response) {
        Map<String,String> params = RequestResponseUtil.getRequestParamter(request);
        String appId = params.get("uid");
        // 根据appId获取其对应所拥有的角色与权限


        String jwt = JsonWebTokenUtil.issueJWT(UUID.randomUUID().toString(),appId,
                "token-server",600000L,null,null, SignatureAlgorithm.HS512);
        return new Message().addMeta("code","200").addMeta("msg","return the jwt success")
                .addMeta("success",Boolean.TRUE).addData("jwt",jwt);
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
            return new Message().addMeta("code",430).addMeta("msg","the account is not well")
                    .addMeta("success",Boolean.FALSE);
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

        return null;
    }


}
