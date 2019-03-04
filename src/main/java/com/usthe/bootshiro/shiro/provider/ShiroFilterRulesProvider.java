package com.usthe.bootshiro.shiro.provider;



import com.usthe.bootshiro.shiro.rule.RolePermRule;
import java.util.List;

/**
 *   动态过滤规则提供者接口
 * @author tomsun28
 * @date 11:00 2018/3/1
 */
public interface ShiroFilterRulesProvider {
    /**
     * 加载基于角色/资源的过滤规则
     * 即：用户-角色-资源（URL），对应关系存储与数据库中
     * 在shiro中生成的过滤器链为：url=jwt[角色1、角色2、角色n]
     * @return java.util.List
     */
    public List<RolePermRule> loadRolePermRules();
}
