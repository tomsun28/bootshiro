package com.usthe.bootshiro;

import org.mybatis.spring.annotation.MapperScan;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;


@SpringBootApplication
@MapperScan("com.usthe.bootshiro.dao")
@EnableCaching
public class BootshiroApplication {

	public static void main(String[] args) {
		SpringApplication.run(BootshiroApplication.class, args);
	}

}
