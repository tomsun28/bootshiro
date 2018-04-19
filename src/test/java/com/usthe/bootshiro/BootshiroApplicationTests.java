package com.usthe.bootshiro;

import org.jasypt.encryption.StringEncryptor;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Date;
import java.util.concurrent.TimeUnit;


@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class BootshiroApplicationTests {

	@Autowired
    private StringRedisTemplate template;

	@Test
	public void contextLoads() {
		template.opsForValue().set("hahahaha","lallal",10, TimeUnit.SECONDS);
		System.out.println(new Timestamp(new Date().getTime()));
		Assert.assertEquals("lallal",template.opsForValue().get("hahahaha"));
	}

	@Autowired
	StringEncryptor stringEncryptor;

	@Test
	public void test() {
		System.out.println(stringEncryptor.encrypt("hahhaha"));
	}



}
