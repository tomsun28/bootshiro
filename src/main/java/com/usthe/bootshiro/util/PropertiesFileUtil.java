package com.usthe.bootshiro.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;
import java.util.HashMap;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

/* *
 * @Author tomsun28
 * @Description 资源文件读取值工具
 * @Date 17:06 2018/2/13
 */
public class PropertiesFileUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(PropertiesFileUtil.class);
    //当打开多个资源文件时，缓存对应资源文件
    private static HashMap<String ,PropertiesFileUtil> configMap = new HashMap<String, PropertiesFileUtil>();
    //打开文件时间,判断超时使用
    private Date loadTime = null;
    // 资源文件
    private ResourceBundle resourceBundle = null;
    // 默认资源文件名称
    private static final String NAME = "config";
    // 缓存时间
    private static final Integer TIMEOUT = 60*1000;
    // 私有构造方法 单例
    private PropertiesFileUtil(String name){
        this.loadTime = new Date();
        this.resourceBundle = ResourceBundle.getBundle(name);
    }

    public static synchronized PropertiesFileUtil getInstance(String name) {
        PropertiesFileUtil conf = configMap.get(name);
        if (null == conf) {
            conf = new PropertiesFileUtil(name);
            configMap.put(name,conf);
        }
        // 判断打开资源文件的时间是否超时
        if ((System.currentTimeMillis() - conf.getLoadTime().getTime()) > TIMEOUT) {
            conf = new PropertiesFileUtil(name);
            configMap.put(name ,conf);
        }
        return conf;
    }

    public static synchronized PropertiesFileUtil getInstance() {
        return getInstance(NAME);
    }

    // 根据资源文件内 key 读取字符串value
    public String getStringValue(String key) {
        try {
            String value = resourceBundle.getString(key);
            return value;
        }catch (MissingResourceException e) {
            LOGGER.warn(e.getMessage(),e);
            return "";
        }
    }
    // 读取整形value
    public Integer getIntValue(String key) {
        try {
            String value = resourceBundle.getString(key);
            return Integer.valueOf(value);
        }catch (MissingResourceException e) {
            LOGGER.warn(e.getMessage(),e);
            return null;
        }
    }
    //读取boolean value
    public boolean getBooleanValue(String key) {
        try {
            String value = resourceBundle.getString(key);
            if ("true".equals(value)) {
                return true;
            }
            return false;
        }catch (MissingResourceException e) {
            LOGGER.warn(e.getMessage(),e);
            return false;
        }
    }

    private Date getLoadTime() {
        return loadTime;
    }
}
