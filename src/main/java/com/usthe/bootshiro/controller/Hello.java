package com.usthe.bootshiro.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

/* *
 * @Author tomsun28
 * @Description 
 * @Date 10:10 2018/3/5
 */
@RestController
public class Hello {

    @GetMapping("/hello")
    public String hello() {
        return "hello springBoot！";
    }
}
