**此项目正在由sureness替换apache shiro重构进行中，若您需使用apache shiro版本，请见[shiro分支](https://gitee.com/tomsun28/bootshiro/tree/shiro/)**

#### 推荐一个面向REST API的高性能认证鉴权框架 - Sureness    

[Sureness官网](https://su.usthe.com)   
[Gitee仓库](https://gitee.com/tomsun28/sureness)   
[Github仓库](https://github.com/tomsun28/sureness)    

#### 🎡 <font color="green">Sureness 介绍</font>

> `sureness` 是我们在深度使用权限框架 `apache shiro` 之后,吸取其优点全新设计开发的一个认证鉴权框架  
>  面向 `REST API` 的认证鉴权,基于 `RBAC` (用户-角色-资源)主要关注于对 `API` 的安全保护  
>  无特定框架依赖(本质就是过滤器处拦截判断,已有 `Springboot,Quarkus,Javalin,Ktor` 等集成样例)  
>  支持动态修改权限配置(动态修改配置每个 `API` 谁有权访问)
>  支持 `Websocket` ,主流 `HTTP` 容器 `Servlet` 和 `JAX-RS`  
>  支持多种认证策略, `JWT, Basic auth, Digest auth` ... 可扩展自定义支持的认证方式   
>  基于改进的字典匹配树拥有的高性能    
>  良好的扩展接口, 样例和文档助急速理解扩展

>`sureness`的低配置，易扩展，不耦合其他框架，希望能帮助开发者对自己的项目多场景快速安全的进行保护

##### 🔍 框架对比

| ~         | sureness | shiro | spring security |
| ---       | ---      | ---   | ---  |
| **多框架支持**  | 支持      | 需改动支持   | 不支持 |
| **REST API** | 支持 | 需改动支持   | 支持 |
| **Websocket** | 支持 | 不支持   | 不支持 |
| **过滤链匹配**  | 优化的字典匹配树 | ant匹配 | ant匹配 |
| **注解支持**    | 支持      | 支持      | 支持 |
| **Servlet**    | 支持      | 支持      | 支持|
| **JAX-RS**     | 支持      | 不支持    | 不支持|
| **权限动态修改** | 支持 | 需改动支持 | 需改动支持|
| **性能速度** | 较快 | 较慢 | 较慢|
| **学习曲线** | 简单 | 简单 | 陡峭| 


# bootshiro

[演示环境](http://47.110.55.246)

此项目正在由sureness替换apache shiro重构进行中，若您需使用apache shiro版本，请见[shiro分支](https://gitee.com/tomsun28/bootshiro/tree/shiro/)   

- ```bootshiro```是基于```springboot+sureness```的面向```REST API```资源无状态认证权限管理系统的后端,前端为另一个项目[usthe](https://gitee.com/tomsun28/usthe)  
- 提供页面可配置式的,动态的 ```API``` 权限安全管理支持  
- 数据传输动态秘钥加密,```JWT```过期刷新,用户操作监控等加固应用安全  





#### 前端 usthe   

[仓库地址](https://gitee.com/tomsun28/usthe)  

基于```angular5 + angular-cli + typeScript + rxjs + bootstrap + adminLTE```,践行angular最佳实践。

#### 持续集成  

流程长这样~：    

![image2](/image/image2.PNG)    

增加kubernetes支持:  
bootshiro.yaml

详细实现技术见另一篇:  [docker学习](https://segmentfault.com/a/1190000013088818)


## 开源推荐   

* **```JustAuth```** 小而全而美的第三方登录开源组件: [https://gitee.com/yadong.zhang/JustAuth](https://gitee.com/yadong.zhang/JustAuth)   
* **```MaxKey```** 业界领先的企业级开源IAM身份管理和身份认证产品: [https://gitee.com/dromara/MaxKey](https://gitee.com/dromara/MaxKey)    
* **```PhalApi```** 一个轻量级PHP开源接口框架: [https://www.phalapi.net/](https://www.phalapi.net/)       




======================================

欢迎一起完善哦^^  

<br>
<br>

### 效果展示  

![image4](/image/image4.PNG)   

![image5](/image/image5.PNG)   

![image6](/image/image6.PNG)   

![image7](/image/image7.PNG)   



Thanks:

Thanks Open Source license support by   [![jetBrains Open Source](/image/jetbrains.svg)](https://www.jetbrains.com/?from=bootshiro)
<br>

[![Giteye chart](https://chart.giteye.net/gitee/tomsun28/bootshiro/C99BWU39.png)](https://giteye.net/chart/C99BWU39)   