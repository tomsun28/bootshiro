package com.usthe.bootshiro.shiro.filter;


import com.usthe.bootshiro.service.AccountService;
import com.usthe.bootshiro.shiro.config.RestPathMatchingFilterChainResolver;
import com.usthe.bootshiro.shiro.provider.AccountProvider;
import com.usthe.bootshiro.shiro.provider.ShiroFilterRulesProvider;
import com.usthe.bootshiro.shiro.rule.RolePermRule;
import com.usthe.bootshiro.support.SpringContextHolder;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.filter.mgt.DefaultFilterChainManager;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.servlet.AbstractShiroFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/* *
 * @Author tomsun28
 * @Description Filter 管理器
 * @Date 11:16 2018/2/28
 */
@Component
public class ShiroFilterChainManager {

    private static final Logger LOGGER = LoggerFactory.getLogger(ShiroFilterChainManager.class);

    private final ShiroFilterRulesProvider shiroFilterRulesProvider;
    private final StringRedisTemplate redisTemplate;
    private final AccountService accountService;

    @Autowired
    public ShiroFilterChainManager(ShiroFilterRulesProvider shiroFilterRulesProvider,StringRedisTemplate redisTemplate,AccountService accountService){
        this.shiroFilterRulesProvider = shiroFilterRulesProvider;
        this.redisTemplate = redisTemplate;
        this.accountService = accountService;
    }

    // 初始化获取过滤链
    public Map<String,Filter> initGetFilters() {
        Map<String,Filter> filters = new LinkedHashMap<>();
        PasswordFilter passwordFilter = new PasswordFilter();
        passwordFilter.setRedisTemplate(redisTemplate);
        filters.put("auth",passwordFilter);
//        JwtFilter jwtFilter = new JwtFilter();
        BJwtFilter jwtFilter = new BJwtFilter();
        jwtFilter.setRedisTemplate(redisTemplate);
        jwtFilter.setAccountService(accountService);
        filters.put("jwt",jwtFilter);
        return filters;
    }
    // 初始化获取过滤链规则
    public Map<String,String> initGetFilterChain() {
        Map<String,String> filterChain = new LinkedHashMap<>();
        // -------------anon 默认过滤器忽略的URL
        List<String> defalutAnon = Arrays.asList("/css/**","/js/**");
        defalutAnon.forEach(ignored -> filterChain.put(ignored,"anon"));
        // -------------auth 默认需要认证过滤器的URL
        List<String> defalutAuth = Arrays.asList("/account/**");
        defalutAuth.forEach(auth -> filterChain.put(auth,"auth"));
        // -------------dynamic 动态URL
        if (shiroFilterRulesProvider != null) {
            List<RolePermRule> rolePermRules = this.shiroFilterRulesProvider.loadRolePermRules();
            if (null != rolePermRules) {
                rolePermRules.forEach(rule -> {
                    StringBuilder Chain = rule.toFilterChain();
                    if (null != Chain) {
                        filterChain.putIfAbsent(rule.getUrl(),Chain.toString());
                    }
                });
            }
        }
        return filterChain;
    }
    // 动态重新加载过滤链规则
    public void reloadFilterChain() {
            ShiroFilterFactoryBean shiroFilterFactoryBean = SpringContextHolder.getBean(ShiroFilterFactoryBean.class);
            AbstractShiroFilter abstractShiroFilter = null;
            try {
                abstractShiroFilter = (AbstractShiroFilter)shiroFilterFactoryBean.getObject();
                RestPathMatchingFilterChainResolver filterChainResolver = (RestPathMatchingFilterChainResolver)abstractShiroFilter.getFilterChainResolver();
                DefaultFilterChainManager filterChainManager = (DefaultFilterChainManager)filterChainResolver.getFilterChainManager();
                filterChainManager.getFilterChains().clear();
                shiroFilterFactoryBean.getFilterChainDefinitionMap().clear();
                shiroFilterFactoryBean.setFilterChainDefinitionMap(this.initGetFilterChain());
                shiroFilterFactoryBean.getFilterChainDefinitionMap().forEach((k,v) -> filterChainManager.createChain(k,v));
            }catch (Exception e) {
                LOGGER.error(e.getMessage(),e);
            }
    }
}
