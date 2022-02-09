自荐下我们新的全职开源项目  **[HertzBeat赫兹节拍](https://gitee.com/usthe/hertzbeat)** - 易用友好的高性能监控告警系统。  
网站监测，PING连通性，端口可用性，数据库监控，API监控，自定义监控，阈值告警，告警通知。

**代码仓库: [GITHUB](https://github.com/dromara/sureness) | [GITEE](https://gitee.com/usthe/hertzbeat)**   
**官网: [hertzbeat.com](https://hertzBeat.com) | [tancloud.cn](https://tancloud.cn)**  
**[在线使用](https://console.tancloud.cn)** https://console.tancloud.cn

欢迎使用，点赞，推荐，全职开源不易，灰常感谢🙏。

----   

## Bootshiro   

**此项目正在由sureness替换apache shiro重构进行中，若您需使用apache shiro版本，请见[shiro分支](https://gitee.com/tomsun28/bootshiro/tree/shiro/)**

#### 面向REST API的高性能认证鉴权框架 - Sureness    

[Sureness官网](https://su.usthe.com)   
[Gitee仓库](https://gitee.com/dromara/sureness)   
[Github仓库](https://github.com/dromara/sureness)

#### 📫 背景

在主流的前后端分离架构中，如何通过有效快速的认证鉴权来保护后端提供的`REST API`变得尤为重要。对现存框架，不原生支持`RESTful`的`Apache Shiro`，
还是深度绑定`Spring`的`Spring Security`，或多或少都不是我们的理想型。   
于是乎`Sureness`诞生了，我们希望能解决这些，提供一个面向**REST API**，**无框架依赖**，可以**动态修改权限**，**多认证策略**，**更快速度**，**易用易扩展**的认证鉴权框架。

## 🎡 <font color="green">介绍</font>

> [Sureness](https://github.com/dromara/sureness) 是我们在深度使用 `Apache Shiro` 之后,吸取其优点全新设计开发的一个认证鉴权框架     
> 面向 `REST API` 的认证鉴权,基于 `RBAC` (用户-角色-资源)主要关注于对 `API` 的安全保护     
> 无特定Web框架依赖(已有 `Spring Boot,Quarkus,Javalin,Ktor,Micronaut,Jfinal,Solon` 等集成样例)     
> 支持动态修改权限配置(动态修改配置每个 `API` 谁有权访问)   
> 支持 `Websocket` ,主流 `HTTP` 容器 `Servlet` 和 `JAX-RS`       
> 支持多种认证策略, `JWT, Basic Auth, Digest Auth` ... 可扩展自定义认证方式      
> 基于改进的字典匹配树拥有的高性能      
> 良好的扩展接口, 样例和文档助急速理解扩展使用

> `Sureness`的低配置，易扩展，不耦合其他框架，希望能对系统多场景快速安全的保护

##### 🔍 对比

| ~         | sureness | shiro | spring security |
| ---       | ---      | ---   | ---  |
| **多框架支持**  | 支持      | 需改动支持   | 不支持 |
| **restful api** | 支持 | 需改动支持   | 支持 |
| **websocket** | 支持 | 不支持   | 不支持 |
| **过滤链匹配**  | 优化的字典匹配树 | ant匹配 | ant匹配 |
| **注解支持**    | 支持      | 支持      | 支持 |
| **servlet**    | 支持      | 支持      | 支持|
| **jax-rs**     | 支持      | 不支持    | 不支持|
| **权限动态修改** | 支持 | 需改动支持 | 需改动支持|
| **性能速度** | 较快 | 较慢 | 较慢|
| **学习曲线** | 简单 | 简单 | 陡峭|

##### ✌ 支持样例

- [x] Sureness集成**Spring Boot**样例(配置文件方案) [sample-bootstrap](https://gitee.com/dromara/sureness/tree/master/sample-bootstrap)
- [x] Sureness集成**Spring Boot**样例(数据库方案) [sample-tom](https://gitee.com/dromara/sureness/tree/master/sample-tom)
- [x] Sureness集成**Quarkus**样例 [sample-quarkus](https://gitee.com/dromara/sureness/tree/master/samples/quarkus-sureness)
- [x] Sureness集成**Javalin**样例 [sample-javalin](https://gitee.com/dromara/sureness/tree/master/samples/javalin-sureness)
- [x] Sureness集成**Ktor**样例 [sample-ktor](https://gitee.com/dromara/sureness/tree/master/samples/ktor-sureness)
- [x] Sureness集成**Spring Webflux**样例 [sample-spring-webflux](https://gitee.com/dromara/sureness/tree/master/samples/spring-webflux-sureness)
- [x] Sureness集成**Micronaut**样例 [sample-micronaut](https://gitee.com/dromara/sureness/tree/master/samples/micronaut-sureness)
- [x] Sureness集成**Jfinal**样例 [sample-jfinal](https://gitee.com/dromara/sureness/tree/master/samples/jfinal-sureness)
- [x] Sureness集成**Solon**样例 [sample-solon](https://gitee.com/dromara/sureness/tree/master/samples/solon-sureness)
- [x] Sureness集成**Spring Gateway**样例 [sample-spring-gateway](https://gitee.com/dromara/sureness/tree/master/samples/spring-gateway-sureness)
- [x] Sureness集成**Zuul**样例 [sample-zuul](https://gitee.com/dromara/sureness/tree/master/samples/zuul-sureness)
- [x] Sureness使用Session样例 [sureness-session](https://gitee.com/dromara/sureness/tree/master/samples/sureness-session)
- [x] Sureness分布式缓存Session样例 [sureness-redis-session](https://gitee.com/dromara/sureness/tree/master/samples/sureness-redis-session)
- [x] More samples todo


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