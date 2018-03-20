package com.usthe.bootshiro.util;

import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 10:13 2018/2/14
 */
public class RequestResponseUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(RequestResponseUtil.class);

    /* *
     * @Description 取request中的key value数据封装到map 返回
     * @Param [request]
     * @Return java.util.Map<java.lang.String,java.lang.String>
     */
    public static Map<String,String> getRequestParamter(ServletRequest request) {
        Map<String,String> dataMap = new HashMap<String, String>();
        Enumeration enums = request.getParameterNames();
        while (enums.hasMoreElements()) {
            String paraName = (String)enums.nextElement();
            String paraValue = (String)request.getParameter(paraName);
            if(null!=paraValue&&!"".equals(paraValue)) {
                dataMap.put(paraName,paraValue);
            }
        }
        return dataMap;
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
