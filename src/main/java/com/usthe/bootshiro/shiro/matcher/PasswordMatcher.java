package com.usthe.bootshiro.shiro.matcher;

import com.usthe.bootshiro.shiro.provider.AccountProvider;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.credential.CredentialsMatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 18:00 2018/3/3
 */
@Component
public class PasswordMatcher implements CredentialsMatcher {

    @Override
    public boolean doCredentialsMatch(AuthenticationToken authenticationToken, AuthenticationInfo authenticationInfo) {

        return authenticationToken.getPrincipal()==authenticationInfo.getPrincipals()
                && authenticationToken.getCredentials()==authenticationInfo.getCredentials();
    }
}
