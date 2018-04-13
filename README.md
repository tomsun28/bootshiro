# bootshiro

## 自己在前后端分离上的实践    

要想实现完整的前后端分离，安全这块是绕不开的，这个系统主要功能就是动态restful api管理，这次实践包含两个模块,基于```springBoot + shiro```搭建的权限管理系统后台**bootshiro**, ```angular5 + typeScript```编写的前端管理**usthe**。(ps:考虑到我幼小的心灵和水平,大神误喷啊^_^~)  

### 项目的基础框架设计：    

```总的长这样~```:  
![image1](/image/image1.PNG)  

<br>

#### 前端usthe  

基于```angular5 + angular-cli + typeScript + rxjs + bootstrap + adminLTE```,践行angular最佳实践。  
过程中node,webpack等有用到过,但我不熟。。。

#### 后端bootshiro  

基于```springboot + apache shiro + mybatis```框架，restful风格api，自定义状态码，json-web-token，druid数据库连接池，swagger文档生成，redis存储refreshtoken和动态秘钥，maven，MD5单向加密和AES双向等。。。  

#### gate -nginx  

这个nginx作为反向代理服务器，解决了跨域请求的问题。另一个nginx作为angular应用服务器，tomcat作为bootshiro的服务器。  

反向代理的nginx.conf见: [conf](https://github.com/tomsun28/DockerFile/blob/master/nginx/nginx.conf)  

#### 持续集成  

```流程长这样~```  
![image1](/image/image2.PNG)  

详细实现技术见另一篇:  [docker学习](usthe.com/2017/12/docker_learn/)  

<br>

### 一些实现细节方案  

对加密认证签发，api动态权限，token过期刷新，前后端交互等等实现的细节，慢慢更。  
<br>
<br>

#### 动态加密认证     

<br>
<br>

。。。。。持续更新中。。。。







[github代码bootshiro](https://github.com/tomsun28/bootshiro)  
[github代码usthe](https://github.com/tomsun28/usthe)  

<br>
<br>
<br>
<br>

*转载请注明* [from tomsun28](http://usthe.com)
