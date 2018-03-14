package com.usthe.bootshiro.shiro.matcher;

import com.usthe.bootshiro.domain.vo.JwtAccount;
import com.usthe.bootshiro.util.JsonWebTokenUtil;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.credential.CredentialsMatcher;
import org.springframework.stereotype.Component;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 18:01 2018/3/3
 */
@Component
public class JwtMatcher implements CredentialsMatcher {

    @Override
    public boolean doCredentialsMatch(AuthenticationToken authenticationToken, AuthenticationInfo authenticationInfo) {

        String jwt = (String) authenticationInfo.getCredentials();
        JwtAccount jwtAccount = null;
        try{
            jwtAccount = JsonWebTokenUtil.parseJwt(jwt,JsonWebTokenUtil.SECRET_KEY);
        } catch(SignatureException e){
            throw new AuthenticationException("令牌秘钥错误");
        } catch(ExpiredJwtException e){
            throw new AuthenticationException("令牌过期");
        } catch(Exception e){
            throw new AuthenticationException("令牌错误");
        }
        if(null == jwtAccount){
            throw new AuthenticationException("令牌错误");
        }
        return true;
    }
}
