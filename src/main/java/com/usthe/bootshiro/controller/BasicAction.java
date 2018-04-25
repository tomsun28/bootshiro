package com.usthe.bootshiro.controller;

import com.usthe.bootshiro.util.RequestResponseUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/* *
 * @Author tomsun28
 * @Description controller基础抽象类
 * @Date 11:09 2018/3/20
 */
public abstract class BasicAction {


    /* *
     * @Description获得来的request中的 key value数据封装到map返回
     * @Param [request]
     * @Return java.util.Map<java.lang.String,java.lang.String>
     */
    @SuppressWarnings("rawtypes")
    protected Map<String, String> getRequestParameter(HttpServletRequest request) {

        return RequestResponseUtil.getRequestParameters(request);
    }

    protected Map<String, String > getRequestHeader(HttpServletRequest request) {
        return RequestResponseUtil.getRequestHeaders(request);
    }
}
