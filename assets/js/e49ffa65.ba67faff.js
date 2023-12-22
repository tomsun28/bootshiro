"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[4820],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),s=r,u=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={id:"quickstart",title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"},i=void 0,o={unversionedId:"start/quickstart",id:"start/quickstart",title:"\u5feb\u901f\u5f00\u59cb",description:"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528",source:"@site/docs/start/quickstart.md",sourceDirName:"start",slug:"/start/quickstart",permalink:"/docs/start/quickstart",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/quickstart.md",tags:[],version:"current",frontMatter:{id:"quickstart",title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb"}},p={},d=[{value:"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528",id:"-\u5f00\u59cb\u4f7f\u7528",level:3},{value:"\ud83d\udc35 \u4f9d\u8d56\u670d\u52a1\u90e8\u7f72(\u53ef\u9009)",id:"-\u4f9d\u8d56\u670d\u52a1\u90e8\u7f72\u53ef\u9009",level:3},{value:"\u5b89\u88c5Mysql(\u53ef\u9009)",id:"\u5b89\u88c5mysql\u53ef\u9009",level:5},{value:"\u5b89\u88c5TDengine(\u53ef\u9009)",id:"\u5b89\u88c5tdengine\u53ef\u9009",level:5},{value:"\u5b89\u88c5IotDB(\u53ef\u9009)",id:"\u5b89\u88c5iotdb\u53ef\u9009",level:5},{value:"\ud83c\udf5e HertzBeat\u5b89\u88c5",id:"-hertzbeat\u5b89\u88c5",level:3},{value:"\u65b9\u5f0f\u4e00\uff1aDocker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5",id:"\u65b9\u5f0f\u4e00docker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5",level:4},{value:"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5",id:"\u65b9\u5f0f\u4e8c\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5",level:4},{value:"\u65b9\u5f0f\u4e09\uff1a\u672c\u5730\u4ee3\u7801\u542f\u52a8",id:"\u65b9\u5f0f\u4e09\u672c\u5730\u4ee3\u7801\u542f\u52a8",level:4},{value:"\u65b9\u5f0f\u56db\uff1aDocker-Compose \u7edf\u4e00\u5b89\u88c5 hertzbeat+mysql+iotdb/tdengine",id:"\u65b9\u5f0f\u56dbdocker-compose-\u7edf\u4e00\u5b89\u88c5-hertzbeatmysqliotdbtdengine",level:5}],m={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-\u5f00\u59cb\u4f7f\u7528"},"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u4e0d\u60f3\u90e8\u7f72\u800c\u662f\u76f4\u63a5\u4f7f\u7528\uff0c\u6211\u4eec\u63d0\u4f9bSAAS\u76d1\u63a7\u4e91-",(0,r.kt)("a",{parentName:"li",href:"https://console.tancloud.cn"},"TanCloud\u63a2\u4e91"),"\uff0c\u5373\u523b",(0,r.kt)("a",{parentName:"li",href:"https://console.tancloud.cn"},"\u767b\u5f55\u6ce8\u518c"),"\u514d\u8d39\u4f7f\u7528\u3002  "),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662f\u60f3\u5c06HertzBeat\u90e8\u7f72\u5230\u5185\u7f51\u73af\u5883\u642d\u5efa\u76d1\u63a7\u7cfb\u7edf\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684\u90e8\u7f72\u6587\u6863\u8fdb\u884c\u64cd\u4f5c\u3002 ")),(0,r.kt)("h3",{id:"-\u4f9d\u8d56\u670d\u52a1\u90e8\u7f72\u53ef\u9009"},"\ud83d\udc35 \u4f9d\u8d56\u670d\u52a1\u90e8\u7f72(\u53ef\u9009)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HertzBeat\u4f9d\u8d56\u4e8e ",(0,r.kt)("strong",{parentName:"p"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93")," H2(\u9ed8\u8ba4\u5df2\u5185\u7f6e\u65e0\u9700\u5b89\u88c5) \u6216 ",(0,r.kt)("a",{parentName:"p",href:"mysql-change"},"Mysql")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u65f6\u5e8f\u6027\u6570\u636e\u5e93")," ",(0,r.kt)("a",{parentName:"p",href:"tdengine-init"},"TDengine2+")," \u6216 ",(0,r.kt)("a",{parentName:"p",href:"iotdb-init"},"IOTDB")," (\u53ef\u9009)  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f \u82e5\u9700\u8981\u90e8\u7f72\u65f6\u5e8f\u6570\u636e\u5e93\uff0cIotDB \u548c TDengine \u4efb\u9009\u5176\u4e00\u5373\u53ef\uff01"),"  "),(0,r.kt)("h5",{id:"\u5b89\u88c5mysql\u53ef\u9009"},"\u5b89\u88c5Mysql(\u53ef\u9009)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"docker\u5b89\u88c5Mysql",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"$ docker run -d --name mysql -p 3306:3306 -v /opt/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7"),(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"-v /opt/data:/var/lib/mysql")," - \u4e3amysql\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/data"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"create database hertzbeat default charset utf8mb4 collate utf8mb4_general_ci;"),"    "),(0,r.kt)("li",{parentName:"ol"},"\u5728hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml"),"\u914d\u7f6eMysql\u6570\u636e\u5e93\u66ff\u6362H2\u5185\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570    ")),(0,r.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"mysql-change"},"\u4f7f\u7528Mysql\u66ff\u6362\u5185\u7f6eH2\u6570\u636e\u5e93"),"   "),(0,r.kt)("h5",{id:"\u5b89\u88c5tdengine\u53ef\u9009"},"\u5b89\u88c5TDengine(\u53ef\u9009)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"docker\u5b89\u88c5TDengine",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp --name tdengine tdengine/tdengine:2.4.0.12")),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93"),(0,r.kt)("li",{parentName:"ol"},"\u5728hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml"),"\u914d\u7f6etdengine\u8fde\u63a5   ")),(0,r.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"tdengine-init"},"\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93TDengine\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"),"  "),(0,r.kt)("h5",{id:"\u5b89\u88c5iotdb\u53ef\u9009"},"\u5b89\u88c5IotDB(\u53ef\u9009)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Docker\u5b89\u88c5IoTDB ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 6667:6667 -p 31999:31999 -p 8181:8181 \\\n    -v /opt/iotdb/data:/iotdb/data \\ \n    --name iotdb \\\n    apache/iotdb:0.13.3-node\n")),(0,r.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"iotdb-init"},"\u4f7f\u7528\u65f6\u5e8f\u6570\u636e\u5e93IoTDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"),"  "),(0,r.kt)("h3",{id:"-hertzbeat\u5b89\u88c5"},"\ud83c\udf5e HertzBeat\u5b89\u88c5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HertzBeat\u652f\u6301\u901a\u8fc7\u6e90\u7801\u5b89\u88c5\u542f\u52a8\uff0cDocker\u5bb9\u5668\u8fd0\u884c\u548c\u5b89\u88c5\u5305\u65b9\u5f0f\u5b89\u88c5\u90e8\u7f72\uff0cCPU\u67b6\u6784\u652f\u6301X86/ARM64\u3002")),(0,r.kt)("h4",{id:"\u65b9\u5f0f\u4e00docker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5"},"\u65b9\u5f0f\u4e00\uff1aDocker\u65b9\u5f0f\u5feb\u901f\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"docker")," \u73af\u5883\u4ec5\u9700\u4e00\u6761\u547d\u4ee4\u5373\u53ef\u5f00\u59cb")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:1157")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,r.kt)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/start/docker-deploy"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat")," "),(0,r.kt)("h4",{id:"\u65b9\u5f0f\u4e8c\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5"},"\u65b9\u5f0f\u4e8c\uff1a\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u60a8\u7cfb\u7edf\u73af\u5883\u5bf9\u5e94\u7684\u5b89\u88c5\u5305 ",(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/dromara/hertzbeat/releases"},"GITEE Release")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/releases"},"GITHUB Release")),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u5df2\u5b89\u88c5java\u73af\u5883, ",(0,r.kt)("inlineCode",{parentName:"li"},"jdk11")),(0,r.kt)("li",{parentName:"ol"},"[\u53ef\u9009]","\u914d\u7f6e HertzBeat \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")),(0,r.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"$ ./startup.sh ")),(0,r.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:1157")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,r.kt)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,r.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/start/package-deploy"},"\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5HertzBeat")," "),(0,r.kt)("h4",{id:"\u65b9\u5f0f\u4e09\u672c\u5730\u4ee3\u7801\u542f\u52a8"},"\u65b9\u5f0f\u4e09\uff1a\u672c\u5730\u4ee3\u7801\u542f\u52a8"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6b64\u4e3a\u524d\u540e\u7aef\u5206\u79bb\u9879\u76ee\uff0c\u672c\u5730\u4ee3\u7801\u8c03\u8bd5\u9700\u8981\u5206\u522b\u542f\u52a8\u540e\u7aef\u5de5\u7a0bmanager\u548c\u524d\u7aef\u5de5\u7a0bweb-app"),(0,r.kt)("li",{parentName:"ol"},"\u540e\u7aef\uff1a\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"li"},"maven3+"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"java11"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"lombok"),"\u73af\u5883\uff0c\u4fee\u6539YML\u914d\u7f6e\u4fe1\u606f\u5e76\u542f\u52a8manager\u670d\u52a1"),(0,r.kt)("li",{parentName:"ol"},"\u524d\u7aef\uff1a\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"li"},"nodejs npm angular-cli"),"\u73af\u5883\uff0c\u5f85\u672c\u5730\u540e\u7aef\u542f\u52a8\u540e\uff0c\u5728web-app\u76ee\u5f55\u4e0b\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"li"},"ng serve --open")),(0,r.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:4200")," \u5373\u53ef\u5f00\u59cb\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801 ",(0,r.kt)("inlineCode",{parentName:"li"},"admin/hertzbeat"))),(0,r.kt)("h5",{id:"\u65b9\u5f0f\u56dbdocker-compose-\u7edf\u4e00\u5b89\u88c5-hertzbeatmysqliotdbtdengine"},"\u65b9\u5f0f\u56db\uff1aDocker-Compose \u7edf\u4e00\u5b89\u88c5 hertzbeat+mysql+iotdb/tdengine"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/tree/master/script/docker-compose"},"docker-compose\u90e8\u7f72\u811a\u672c")," \u4e00\u6b21\u6027\u628a mysql \u6570\u636e\u5e93, iotdb/tdengine \u65f6\u5e8f\u6570\u636e\u5e93\u548c hertzbeat \u5b89\u88c5\u90e8\u7f72\u3002"),(0,r.kt)("p",null,"\u8be6\u7ec6\u6b65\u9aa4\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/tree/master/script/docker-compose/README.md"},"docker-compose\u90e8\u7f72\u65b9\u6848"),"  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HAVE FUN")))}k.isMDXComponent=!0}}]);