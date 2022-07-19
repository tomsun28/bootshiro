"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[949],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9129:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),i=["components"],l={id:"introduce",title:"HertzBeat",sidebar_label:"Introduce",slug:"/"},c=void 0,s={unversionedId:"introduce",id:"introduce",title:"HertzBeat",description:"Friendly cloud monitoring system.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/introduce.md",sourceDirName:".",slug:"/",permalink:"/en/docs/",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/introduce.md",tags:[],version:"current",frontMatter:{id:"introduce",title:"HertzBeat",sidebar_label:"Introduce",slug:"/"},sidebar:"docs",next:{title:"Quick Start",permalink:"/en/docs/start/quickstart"}},p=[{value:'\ud83c\udfa1 <font color="green">Introduction</font>',id:"-introduction",children:[],level:2},{value:"\ud83e\udd50 Architecture",id:"-architecture",children:[],level:2}],m={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Friendly cloud monitoring system.   ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/web-monitor-4EB1BA",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/api-monitor-lightgrey",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/ping-connect-brightgreen",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/port-available-green",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/database-monitor-yellowgreen",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/os-monitor-yellow",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/custom-monitor-orange",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/threshold-red",alt:"tan-cloud"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/alert-bule",alt:"tan-cloud"})),(0,o.kt)("h2",{id:"-introduction"},"\ud83c\udfa1 ",(0,o.kt)("font",{color:"green"},"Introduction")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"HertzBeat")," is an opensource monitoring and alarm project incubated by ",(0,o.kt)("a",{parentName:"p",href:"https://dromara.org"},"Dromara")," and open sourced by ",(0,o.kt)("a",{parentName:"p",href:"https://tancloud.cn"},"TanCloud"),", which supports Website, API, PING, Port, Database, OS Monitor etc.",(0,o.kt)("br",{parentName:"p"}),"\n","We also provide ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"Monitoring Cloud For Saas")),", people no longer need to deploy a cumbersome monitoring system in order to monitor their website resources. ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://console.tancloud.cn"},"Sign in to get started for free")),".",(0,o.kt)("br",{parentName:"p"}),"\n","HertzBeat supports more liberal threshold alarm configuration (calculation expression), supports alarm notification, alarm template, email, DingDing, WeChat FeiShu and WebHook.",(0,o.kt)("br",{parentName:"p"}),"\n","Most important is HertzBeat supports ",(0,o.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/advanced/extend-point"},"Custom Monitoring"),", just by configuring the YML file, we can customize the monitoring types and metrics what we need.",(0,o.kt)("br",{parentName:"p"}),"\n","HertzBeat is modular, ",(0,o.kt)("inlineCode",{parentName:"p"},"manager, collector, scheduler, warehouse, alerter")," modules are decoupled for easy understanding and custom development.",(0,o.kt)("br",{parentName:"p"}),"\n","Welcome to HertzBeat's ",(0,o.kt)("a",{parentName:"p",href:"https://console.tancloud.cn"},"Cloud Environment TanCloud")," to try and discover more.",(0,o.kt)("br",{parentName:"p"}),"\n","Welcome to join us to build hertzbeat together.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"HertzBeat"),"'s multi-type support, easy expansion, low coupling, hope to help developers and micro teams to quickly build their own monitoring system.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-architecture"},"\ud83e\udd50 Architecture"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/manager"},"manager"))," Provide monitoring management, system management basic services.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Provides monitoring management, monitoring configuration management, system user management, etc."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/collector"},"collector"))," Provide metrics data collection services.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Use common protocols to remotely collect and obtain peer-to-peer metrics data."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/scheduler"},"scheduler"))," Provide monitoring task scheduling service.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Collection task management, scheduling and distribution of one-time tasks and periodic tasks."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/warehouse"},"warehouse"))," Provide monitoring data warehousing services.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Metrics data management, data query, calculation and statistics."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/alerter"},"alerter"))," Provide alert service.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Alarm calculation trigger, monitoring status linkage, alarm configuration, and alarm notification."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/web-app"},"web-app"))," Provide web ui.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Angular Web UI.   ")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat/home/static/img/docs/hertzbeat-stru-en.svg",alt:"hertzBeat"})))}u.isMDXComponent=!0}}]);