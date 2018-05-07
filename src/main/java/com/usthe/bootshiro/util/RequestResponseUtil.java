package com.usthe.bootshiro.util;


import com.alibaba.fastjson.JSON;
import com.usthe.bootshiro.support.XssSqlHttpServletRequestWrapper;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

/* *
 * @Author tomsun28
 * @Description http request response 过滤XSS SQL 数据工具类
 * @Date 10:13 2018/2/14
 */
public class RequestResponseUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(RequestResponseUtil.class);

    /* *
     * @Description 取request中的已经被防止XSS，SQL注入过滤过的key value数据封装到map 返回
     * @Param [request]
     * @Return java.util.Map<java.lang.String,java.lang.String>
     */
    public static Map<String,String> getRequestParameters(ServletRequest request) {
        Map<String,String> dataMap = new HashMap<>();
        Enumeration enums = request.getParameterNames();
        while (enums.hasMoreElements()) {
            String paraName = (String)enums.nextElement();
            String paraValue = RequestResponseUtil.getRequest(request).getParameter(paraName);
            if(null!=paraValue && !"".equals(paraValue)) {
                dataMap.put(paraName,paraValue);
            }
        }
        return dataMap;
    }

    /* *
     * @Description 获取request中的body json 数据转化为map
     * @Param [request]
     * @Return java.util.Map<java.lang.String,java.lang.String>
     */
    @SuppressWarnings("unchecked")
    public static Map<String, String> getRequestBodyMap(ServletRequest request) {
        Map<String ,String > dataMap = new HashMap<>();
        // 判断是否已经将 inputStream 流中的 body 数据读出放入 attribute
        if (request.getAttribute("body") != null) {
            // 已经读出则返回attribute中的body
            return (Map<String,String>)request.getAttribute("body");
        } else {
            try {
                Map<String,String > maps = JSON.parseObject(request.getInputStream(),Map.class);
                dataMap.putAll(maps);
                request.setAttribute("body",dataMap);
            }catch (IOException e) {
                e.printStackTrace();
            }
            return dataMap;
        }
    }



    /* *
     * @Description 读取request 已经被防止XSS，SQL注入过滤过的 请求参数key 对应的value
     * @Param [request, key]
     * @Return java.lang.String
     */
    public static String getParameter(ServletRequest request, String key) {
        return RequestResponseUtil.getRequest(request).getParameter(key);
    }

    /* *
     * @Description 读取request 已经被防止XSS，SQL注入过滤过的 请求头key 对应的value
     * @Param [request, key]
     * @Return java.lang.String
     */
    public static String getHeader(ServletRequest request, String key) {
        return RequestResponseUtil.getRequest(request).getHeader(key);
    }

    /* *
     * @Description 取request头中的已经被防止XSS，SQL注入过滤过的 key value数据封装到map 返回
     * @Param [request]
     * @Return java.util.Map<java.lang.String,java.lang.String>
     */
    public static Map<String,String> getRequestHeaders(ServletRequest request) {
        Map<String,String> headerMap = new HashMap<>();
        Enumeration enums = RequestResponseUtil.getRequest(request).getHeaderNames();
        while (enums.hasMoreElements()) {
            String name = (String) enums.nextElement();
            String value = RequestResponseUtil.getRequest(request).getHeader(name);
            if (null != value && !"".equals(value)) {
                headerMap.put(name,value);
            }
        }
        return headerMap;
    }

    public static HttpServletRequest getRequest(ServletRequest request) {
        return new XssSqlHttpServletRequestWrapper((HttpServletRequest) request);
    }

    /* *
     * @Description 封装response  统一json返回
     * @Param [encoding, outStr, response]
     * @Return void
     */
    public static void responseWrite(String outStr, ServletResponse response) {

        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=utf-8");
        PrintWriter printWriter = null;
        try {
            printWriter = WebUtils.toHttp(response).getWriter();
            printWriter.write(outStr);
        }catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
        }finally {
            if (null != printWriter) {
                printWriter.close();
            }
        }
    }


}
