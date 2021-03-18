**此项目正在由sureness替换apache shiro重构进行中，若您需使用apache shiro版本，请见[shiro分支](https://gitee.com/tomsun28/bootshiro/tree/shiro/)**

#### 推荐一个全新面向restful api的高性能认证鉴权框架 - sureness    

[sureness主页 - su.usthe.com](https://su.usthe.com)   
[Gitee仓库](https://gitee.com/tomsun28/sureness)   
[Github仓库](https://github.com/tomsun28/sureness)   
欢迎使用star         

#### 📫 背景   

在主流的前后端分离架构中，如何通过有效快速的认证鉴权来保护后端提供的`restful api`变得尤为重要。对现存框架，不原生支持`rest`的`apache shiro`，
还是深度绑定`spring`，较慢性能，学习曲线陡峭的`spring security`，或多或少都不是我们的理想型。   
于是乎`sureness`诞生了，我们希望能解决这些，提供一个面向**restful api**，**无框架依赖**，可以**动态修改权限**，**多认证策略**，**更快速度**，**易用易扩展**的认证鉴权框架。

#### 🎡 <font color="green">介绍</font>

> `sureness` 是我们在深度使用权限框架 `apache shiro` 之后,吸取其一些优点全新设计开发的一个认证鉴权框架  
>  面向 `restful api` 的认证鉴权,基于 `rbac` (用户-角色-资源)主要关注于对 `restful api` 的安全保护  
>  无特定框架依赖(本质就是过滤器处拦截判断,已有`springboot,quarkus,javalin,ktor`等集成样例)  
>  支持动态修改权限配置(动态修改配置每个`rest api`谁有权访问)    
>  支持 `websocket` ,主流`http`容器  `servlet` 和 `jax-rs`  
>  支持多种认证策略, `jwt, basic auth, digest auth` ... 可扩展自定义支持的认证方式   
>  [基于改进的字典匹配树拥有的高性能](#高性能匹配 )    
>  良好的扩展接口, 样例和文档

>`sureness`的低配置，易扩展，不耦合其他框架，希望能帮助开发者对自己的项目多场景快速安全的进行保护

##### 🔍 框架对比    

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


# bootshiro

**线上演示**  
[管理系统](http://47.110.55.246)    
[druid sql监控](http://47.110.55.246/api/druid/login.html)  admin/admin 
[Swagger api文档](http://47.110.55.246/api/swagger-ui.html)  
[java doc](https://apidoc.gitee.com/tomsun28/bootshiro)  

- ```bootshiro```是基于```springboot+shiro+jwt```的真正```restful URL```资源无状态认证权限管理系统的后端,前端[usthe](https://gitee.com/tomsun28/usthe)  
- 区别于一般,提供页面可配置式的,动态的 ```restful api``` 安全管理支持  
- 数据传输动态秘钥加密,```jwt```过期刷新,用户操作监控等 加固应用安全  

## 使用和一些约定   
--------

- 您使用此项目在后端开发好```api```后,需要在前端页面 资源配置->API管理 新增基于```ant```匹配风格的```api```(约定没有配置的api没有保护)
- ```eg:``` 获取角色关联的对应用户列表 ```rest-url```为 ```/role/user/{roleId}/{currentPage}/{pageSize}```访问方式为```GET```, 您需要在页面新增```api:``` ```/role/user/*/*/*``` ```GET```方式
- 自定义```url```匹配链约定为 ```url=``` ```url+"=="+httpMethod```
- 页面添加了```api```后,您需要在 资源配置->角色管理 配置您想要授权角色的API,菜单,关联用户等资源(约定授权给```auth_anon```角色的```api```可以被所有人访问,注意没有授权给任何角色的api是可以被任何人访问的)
- 授权菜单在第一次登录时已经获取存储到```sessionStorage```防止重复获取,您授权变更菜单之后想要看的效果需要关闭页面重新打开(或者清除```sessionStorage```之后会自动获取授权菜单)
- have fun  



## 项目的基础框架设计：  

总的长这样：  

![image1](/image/image1.PNG)  

<br>

#### 前端usthe  

基于```angular5 + angular-cli + typeScript + rxjs + bootstrap + adminLTE```,践行angular最佳实践。  
过程中node,webpack等有用到过,但我不熟。。。

#### 后端bootshiro  

基于```springboot + apache shiro + mybatis```框架，restful风格api，自定义状态码，json-web-token，druid数据库连接池，swagger文档生成，redis存储refreshtoken和动态秘钥，maven，MD5单向加密和AES双向等。。。  

#### gate -nginx  

这个nginx作为反向代理服务器，解决了跨域,真实IP头(现服务器端支持跨域可不用nginx)。另一个nginx作为angular应用服务器，tomcat作为bootshiro的服务器。  

反向代理的nginx.conf见: [conf](https://github.com/tomsun28/DockerFile/blob/master/nginx/nginx.conf)  

#### 持续集成  

流程长这样~：    

![image2](/image/image2.PNG)    

增加kubernetes支持:  
bootshiro.yaml

详细实现技术见另一篇:  [docker学习](https://segmentfault.com/a/1190000013088818)  


## 相关文档  
--------

- [前后端分离实践](https://segmentfault.com/blog/tomsun28)  
- [api权限管理系统与前后端分离实践](https://segmentfault.com/a/1190000014368885)  
- [基于shiro的改造集成真正支持restful请求](https://segmentfault.com/a/1190000014545172)   
- [签发的用户认证token超时刷新策略](https://segmentfault.com/a/1190000014545422)  
- [传输密码动态加密解密](https://segmentfault.com/a/1190000014544933)  
ps(之前是写在下面的太长有点乱)  




## 部署  
--------
1.IDE启动调试  

- fork 项目到自己的仓库(欢迎star^.^)  
- clone 项目到本地 git clone https://gitee.com/yourName/bootshiro.git
- 用idea导入
- 更改开发环境mysql数据库和redis地址(前提安装数据库并导入usthe.sql创建数据库usthe)
- 运行BootshiroApplication
- bootshiro就可以提供api了 http://localhost:8080
- 推荐使用postman进行api调试
- 项目中的postman_test_example.json文件就是postman样例,导入即可

2.docker本地启动  

- fork 项目到自己的仓库(欢迎star^.^)  
- clone 项目到本地 git clone https://gitee.com/yourName/bootshiro.git
- 更改生产环境mysql数据库和redis地址(前提安装数据库并导入usthe.sql创建数据库usthe)
- 前提已经存在maven环境,docker环境([docker常用看这里](https://segmentfault.com/a/1190000013088818))
- mvn clean install -Dmaven.test.skip=true打出jar包
- 在项目目录下 docker build -t bootshiro:1.0 . 
- docker images看是否生成镜像成功
- 运行 docker run -d -p 8080:8080 --name haiGirl bootshiro:1.0
- docker ps 就可以看见您的haiGirl了
- bootshiro就可以提供api了 http://localhost:8080

3.jenkins+docker持续集成持续部署CICD  

- fork 项目到自己的仓库(欢迎star^.^)  
- clone 项目到本地 git clone https://gitee.com/yourName/bootshiro.git
- 更改生产和开发环境mysql数据库和redis地址(前提安装数据库并导入usthe.sql创建数据库usthe)
- 搭建CICD环境有点繁琐，[看这里最下面](https://segmentfault.com/a/1190000013088818)
- 参照搭建完成后,bootshiro对应的jenkins下运行shell:
````
#!/bin/bash

#build in jenkins sh

#docker docker hub仓库地址,之后把生成的镜像上传到  registry or docker hub
REGISTRY_URL=127.0.0.1:5000
#docker login --username tomsun28 --password xxxx

#根据时间生成版本号
TAG=$REGISTRY_URL/$JOB_NAME:`date +%y%m%d-%H-%M`

#使用maven 镜像进行编译 打包出 jar 文件
docker run --rm --name mvn -v /opt/dockerWorkspace/maven:/root/.m2 \
-v /opt/dockerWorkspace/jenkins_home/workspace/$JOB_NAME:/usr/src/mvn -w /usr/src/mvn/ \
tomsun28/maven:1.0 mvn clean install -Dmaven.test.skip=true

#使用放在项目下面的Dockerfile打包生成镜像
docker build -t $TAG $WORKSPACE/.

docker push $TAG
docker rmi $TAG

#判断之前运行的容器是否还在，在就删除
if docker ps -a | grep -i $JOB_NAME;then
docker rm -f $JOB_NAME
fi

#用最新版本的镜像运行容器

docker run -d -p 8085:8080 --name $JOB_NAME -v /opt/dockerWorkspace/tomcat/$JOB_NAME/logs:/opt/tomcat/logs $TAG


````


## 仓库 

gitee(main rep):  

 [bootshiro](https://gitee.com/tomsun28/bootshiro)  
 [usthe](https://gitee.com/tomsun28/usthe) 

github: 

[bootshiro](https://github.com/tomsun28/bootshiro)  
[usthe](https://github.com/tomsun28/usthe)  
         

。。。。。持续同步更新。。。。

======================================

欢迎一起完善哦^^  

<br>
<br>

### 效果展示  

![image4](/image/image4.PNG)   

![image5](/image/image5.PNG)   

![image6](/image/image6.PNG)   

![image7](/image/image7.PNG)   




thanks:  

[Howieair](http://iconfont.cn/user/detail?spm=a313x.7781069.0.d214f71f6&uid=187147)的小猪图标  
[zhangkaitao](http://jinnianshilongnian.iteye.com/blog/2018936)的跟我学shiro   
网络上前辈们的教程文章开源项目

Thanks Open Source license support by   [![jetBrains Open Source](/image/jetbrains.svg)](https://www.jetbrains.com/?from=bootshiro)
<br>

[![Giteye chart](https://chart.giteye.net/gitee/tomsun28/bootshiro/C99BWU39.png)](https://giteye.net/chart/C99BWU39)   