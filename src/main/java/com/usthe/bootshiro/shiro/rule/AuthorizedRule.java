package com.usthe.bootshiro.shiro.rule;

import java.io.Serializable;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 11:19 2018/3/1
 */
public abstract class AuthorizedRule implements Serializable {

    private static final long serialVersionUID = 1L;

    public abstract StringBuilder toFilterChain();

}
