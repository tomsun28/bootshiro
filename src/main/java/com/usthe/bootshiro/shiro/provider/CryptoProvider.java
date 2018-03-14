package com.usthe.bootshiro.shiro.provider;

/* *
 * @Author tomsun28
 * @Description Hmac 签名摘要提供
 * @Date 16:32 2018/2/11
 */
public interface CryptoProvider {

     String hmacDigest(String plaintext, String appKey);
}
