package com.usthe.bootshiro.shiro.config;

import com.usthe.bootshiro.shiro.filter.ASubjectFactory;
import com.usthe.bootshiro.shiro.filter.ShiroFilterChainManager;
import com.usthe.bootshiro.shiro.realm.AModularRealmAuthenticator;
import com.usthe.bootshiro.shiro.realm.RealmManager;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.DefaultSessionStorageEvaluator;
import org.apache.shiro.mgt.DefaultSubjectDAO;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/* *
 * @Author tomsun28
 * @Description shiro配置
 * @Date 12:41 2018/3/6
 */
@Configuration
public class ShiroConfiguration {

    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(SecurityManager securityManager,ShiroFilterChainManager filterChainManager) {
//        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        RestShiroFilterFactoryBean shiroFilterFactoryBean = new RestShiroFilterFactoryBean();
        shiroFilterFactoryBean.setSecurityManager(securityManager);
        shiroFilterFactoryBean.setFilters(filterChainManager.initGetFilters());
        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainManager.initGetFilterChain());
        return shiroFilterFactoryBean;
    }

    @Bean
    public SecurityManager securityManager(RealmManager realmManager) {
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
        securityManager.setAuthenticator(new AModularRealmAuthenticator());
        DefaultSubjectDAO subjectDAO = (DefaultSubjectDAO) securityManager.getSubjectDAO();
        DefaultSessionStorageEvaluator evaluator = (DefaultSessionStorageEvaluator) subjectDAO.getSessionStorageEvaluator();
        ASubjectFactory subjectFactory = new ASubjectFactory(evaluator);
        securityManager.setSubjectFactory(subjectFactory);
        securityManager.setRealms(realmManager.initGetRealm());
        SecurityUtils.setSecurityManager(securityManager);
        return securityManager;
    }

}
