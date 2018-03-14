package com.usthe.bootshiro.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
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
     * @Description 封装response返回
     * @Param [encoding, outStr, response]
     * @Return void
     */
    public static void responseWrite(String encoding, String outStr, ServletResponse response) {
        try {
            response.setCharacterEncoding(encoding);
            PrintWriter printWriter = response.getWriter();
            printWriter.write(outStr);
            printWriter.close();
        }catch (Exception e) {
            LOGGER.warn(e.getMessage(),e);
        }
    }
    public static void responseWrite(String outStr,ServletResponse response) {
        responseWrite("UTF8",outStr,response);
    }

}
