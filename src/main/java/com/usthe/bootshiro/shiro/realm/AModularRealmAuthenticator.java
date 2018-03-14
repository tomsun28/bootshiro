package com.usthe.bootshiro.shiro.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.pam.ModularRealmAuthenticator;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.util.CollectionUtils;

import java.util.List;

import static java.util.stream.Collectors.toList;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 21:15 2018/3/3
 */
public class AModularRealmAuthenticator extends ModularRealmAuthenticator {

    @Override
    protected AuthenticationInfo doAuthenticate(AuthenticationToken authenticationToken) throws AuthenticationException {
        assertRealmsConfigured();
        List<Realm> realms = this.getRealms()
                .stream()
                .filter(realm -> {
                    return realm.supports(authenticationToken);
                })
                .collect(toList());
        if (CollectionUtils.isEmpty(realms))
            throw new IllegalStateException("configure error: no realm support token type:" + authenticationToken.getClass());
        if (realms.size()==1) {
            return doSingleRealmAuthentication(realms.iterator().next(),authenticationToken);
        }else {
            return doMultiRealmAuthentication(realms,authenticationToken);
        }

    }
}
