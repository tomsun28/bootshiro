"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[8870],{4137:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7536:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),a=(n(7294),n(4137));const o={id:"windows",title:"Monitoring\uff1aWindows operating system monitoring",sidebar_label:"Windows operating system"},i=void 0,l={unversionedId:"help/windows",id:"help/windows",title:"Monitoring\uff1aWindows operating system monitoring",description:"Collect and monitor the general performance Metrics of Windows operating system through SNMP protocol.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/windows.md",sourceDirName:"help",slug:"/help/windows",permalink:"/en/docs/help/windows",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/windows.md",tags:[],version:"current",frontMatter:{id:"windows",title:"Monitoring\uff1aWindows operating system monitoring",sidebar_label:"Windows operating system"},sidebar:"docs",previous:{title:"Linux operating system",permalink:"/en/docs/help/linux"},next:{title:"Ubuntu operating system",permalink:"/en/docs/help/ubuntu"}},m={},p=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1asystem",id:"metric-setsystem",level:4}],s={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Windows operating system through SNMP protocol.\nNote\u26a0\ufe0f You need to start SNMP service for Windows server.  ")),(0,a.kt)("p",null,"References:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/xdp-gacl/p/3978825.html"},"What is SNMP protocol 1"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.auvik.com/franklyit/blog/network-basics-what-is-snmp/"},"What is SNMP protocol 2"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/troubleshoot/windows-server/networking/configure-snmp-service"},"Win configure SNMP in English"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/troubleshoot/windows-server/networking/configure-snmp-service"},"Win configure SNMP in Chinese"),"   "),(0,a.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port provided by Windows SNMP service. The default is 161")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SNMP version"),(0,a.kt)("td",{parentName:"tr",align:null},"SNMP protocol version V1 V2c V3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SNMP community Word"),(0,a.kt)("td",{parentName:"tr",align:null},"SNMP agreement community name(Community Name). It is used to realize the authentication of SNMP network administrator when accessing SNMP management agent. Similar to password, the default value is public")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Protocol connection timeout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,a.kt)("h4",{id:"metric-setsystem"},"Metric set\uff1asystem"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Host name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"descr"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Operating system description")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uptime"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"System running time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"numUsers"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Current number of users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"services"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Current number of services")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"processes"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Current number of processes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"responseTime"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Collection response time")))))}u.isMDXComponent=!0}}]);