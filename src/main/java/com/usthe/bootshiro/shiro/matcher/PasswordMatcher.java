package com.usthe.bootshiro.shiro.matcher;

import com.usthe.bootshiro.shiro.provider.AccountProvider;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.credential.CredentialsMatcher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 18:00 2018/3/3
 */
@Component
public class PasswordMatcher implements CredentialsMatcher {

    private static final Logger LOGGER = LoggerFactory.getLogger(PasswordMatcher.class);

    @Override
    public boolean doCredentialsMatch(AuthenticationToken authenticationToken, AuthenticationInfo authenticationInfo) {
        LOGGER.info(authenticationInfo.getPrincipals().getPrimaryPrincipal()+"======"+authenticationToken.getPrincipal());
        LOGGER.info(authenticationInfo.getCredentials()+"====="+authenticationToken.getCredentials());

        return authenticationToken.getPrincipal().toString().equals(authenticationInfo.getPrincipals().getPrimaryPrincipal().toString())
                && authenticationToken.getCredentials().toString().equals(authenticationInfo.getCredentials().toString());
    }
}
