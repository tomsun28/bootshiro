package com.usthe.bootshiro.shiro.rule;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 11:23 2018/3/1
 */
public class RolePermRule extends AuthorizedRule {

    private static final long serialVersionUID = 1L;

    private String url; // 资源URL
    private String needRoles; // 访问资源所需要的角色列表，多个列表用逗号间隔

    public String getUrl() {
        return url;
    }

    public String getNeedRoles() {
        return needRoles;
    }

    /* *
     * @Description  将url needRoles 转化成shiro可识别的过滤器链：url=jwt[角色1、角色2、角色n]
     * @Param []
     * @Return java.lang.StringBuilder
     */
    public StringBuilder toFilterChain() {

        if (null == this.url || this.url.isEmpty())
            return null;
        StringBuilder stringBuilder = new StringBuilder();
        if (null != this.getNeedRoles() && !this.getNeedRoles().isEmpty()) {
            stringBuilder.append("jwt"+"["+this.getNeedRoles()+"]");
        }

        return stringBuilder.length() > 0 ? stringBuilder : null;
    }

    public String toString() {
        return "RolePermRule [url="+url+", needRoles="+needRoles+"]";
    }
}
