package com.usthe.bootshiro.util;

import java.util.regex.Pattern;

/**
 * Web防火墙工具类
 * @author from internet
 * @date 19:51 2018/4/15
 */
public class XssUtil {

    private static final String STR_SCRIPT1 = "<script>(.*?)</script>";
    private static final String STR_SCRIPT2 = "</script>";
    private static final String STR_SCRIPT3 = "<script(.*?)>";
    private static final String STR_EVAL = "eval\\((.*?)\\)";
    private static final String STR_EXP = "expression\\((.*?)\\)";
    private static final String STR_JS = "javascript:";
    private static final String STR_VB = "vbscript:";
    private static final String STR_ON = "onload(.*?)=";

    /**
     * description 过滤XSS脚本内容
     *
     * @param value 1
     * @return java.lang.String
     */
    public static String stripXSS(String value) {
        String rlt = null;

        if (null != value) {
            // NOTE: It's highly recommended to use the ESAPI library and uncomment the following line to
            // avoid encoded attacks.

            rlt = value.replaceAll("", "");

            // Avoid anything between script tags
            Pattern scriptPattern = Pattern.compile(STR_SCRIPT1, Pattern.CASE_INSENSITIVE);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Remove any lonesome </script> tag
            scriptPattern = Pattern.compile(STR_SCRIPT2, Pattern.CASE_INSENSITIVE);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Remove any lonesome <script ...> tag
            scriptPattern = Pattern.compile(STR_SCRIPT3, Pattern.CASE_INSENSITIVE
                    | Pattern.MULTILINE | Pattern.DOTALL);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Avoid eval(...) expressions
            scriptPattern = Pattern.compile(STR_EVAL, Pattern.CASE_INSENSITIVE
                    | Pattern.MULTILINE | Pattern.DOTALL);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Avoid expression(...) expressions
            scriptPattern = Pattern.compile(STR_EXP, Pattern.CASE_INSENSITIVE
                    | Pattern.MULTILINE | Pattern.DOTALL);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Avoid javascript:... expressions
            scriptPattern = Pattern.compile(STR_JS, Pattern.CASE_INSENSITIVE);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Avoid vbscript:... expressions
            scriptPattern = Pattern.compile(STR_VB, Pattern.CASE_INSENSITIVE);
            rlt = scriptPattern.matcher(rlt).replaceAll("");

            // Avoid onload= expressions
            scriptPattern = Pattern.compile(STR_ON, Pattern.CASE_INSENSITIVE
                    | Pattern.MULTILINE | Pattern.DOTALL);
            rlt = scriptPattern.matcher(rlt).replaceAll("");
        }

        return rlt;
    }

    /**
     * description 过滤SQL注入内容
     *
     * @param value 1
     * @return java.lang.String
     */
    public static String stripSqlInjection(String value) {
        return (null == value) ? null : value.replaceAll("('.+--)|(--)|(%7C)", "");
    }

    /**
     * description 过滤SQL 和 XSS注入内容
     *
     * @param value 1
     * @return java.lang.String
     */
    public static String stripSqlXss(String value) {
        return stripXSS(stripSqlInjection(value));
    }

}
