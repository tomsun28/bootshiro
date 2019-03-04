package com.usthe.bootshiro.domain.vo;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 *  前后端统一消息定义协议 Message  之后前后端数据交互都按照规定的类型进行交互
 * {
 *   meta:{"code":code,“msg”:message}
 *   data:{....}
 * }
 * @author tomsun28
 * @date 10:48 2018/2/14
 */
public class Message {

    /**
     * 消息头meta 存放状态信息 code message
     */
    private Map<String,Object> meta = new HashMap<String,Object>();
    /**
     * 消息内容  存储实体交互数据
     */
    private Map<String,Object> data = new HashMap<String,Object>();

    public Map<String, Object> getMeta() {
        return meta;
    }

    public Message setMeta(Map<String, Object> meta) {
        this.meta = meta;
        return this;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public Message setData(Map<String, Object> data) {
        this.data = data;
        return this;
    }
    public Message addMeta(String key, Object object) {
        this.meta.put(key,object);
        return this;
    }
    public Message addData(String key,Object object) {
        this.data.put(key,object);
        return this;
    }
    public Message ok(int statusCode,String statusMsg) {
        this.addMeta("success",Boolean.TRUE);
        this.addMeta("code",statusCode);
        this.addMeta("msg",statusMsg);
        this.addMeta("timestamp",new Timestamp(System.currentTimeMillis()));
        return this;
    }
    public Message error(int statusCode,String statusMsg) {
        this.addMeta("success",Boolean.FALSE);
        this.addMeta("code",statusCode);
        this.addMeta("msg",statusMsg);
        this.addMeta("timestamp",new Timestamp(System.currentTimeMillis()));
        return this;
    }
}
