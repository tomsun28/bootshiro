"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[6893],{4137:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=r,s=c["".concat(m,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6484:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(3117),r=n(102),l=(n(7294),n(4137)),i=["components"],o={id:"centos",title:"Monitoring\uff1aCentOS operating system monitoring",sidebar_label:"CentOS operating system"},m=void 0,p={unversionedId:"help/centos",id:"help/centos",title:"Monitoring\uff1aCentOS operating system monitoring",description:"Collect and monitor the general performance Metrics of CentOS operating system.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/centos.md",sourceDirName:"help",slug:"/help/centos",permalink:"/en/docs/help/centos",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/centos.md",tags:[],version:"current",frontMatter:{id:"centos",title:"Monitoring\uff1aCentOS operating system monitoring",sidebar_label:"CentOS operating system"},sidebar:"docs",previous:{title:"Ubuntu operating system",permalink:"/en/docs/help/ubuntu"},next:{title:"Zookeeper monitoring",permalink:"/en/docs/help/zookeeper"}},d=[{value:"Configuration parameter",id:"configuration-parameter",children:[],level:3},{value:"Collection Metric",id:"collection-metric",children:[{value:"Metric set\uff1abasic",id:"metric-setbasic",children:[],level:4},{value:"Metric set\uff1acpu",id:"metric-setcpu",children:[],level:4},{value:"Metric set\uff1amemory",id:"metric-setmemory",children:[],level:4},{value:"Metric set\uff1adisk",id:"metric-setdisk",children:[],level:4},{value:"Metric set\uff1ainterface",id:"metric-setinterface",children:[],level:4},{value:"Metric set\uff1adisk_free",id:"metric-setdisk_free",children:[],level:4}],level:3}],u={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of CentOS operating system.")),(0,l.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,l.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,l.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port provided by Linux SSH. The default is 22")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"SSH connection user name, optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"SSH connection password, optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 10 seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,l.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,l.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,l.kt)("h4",{id:"metric-setbasic"},"Metric set\uff1abasic"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Host name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Operating system version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uptime"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"System running time")))),(0,l.kt)("h4",{id:"metric-setcpu"},"Metric set\uff1acpu"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cores"),(0,l.kt)("td",{parentName:"tr",align:null},"cores"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU cores")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU interrupts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Average load of CPU in the last 1/5/15 minutes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context_switch"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of current context switches")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usage"),(0,l.kt)("td",{parentName:"tr",align:null},"%"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU usage")))),(0,l.kt)("h4",{id:"metric-setmemory"},"Metric set\uff1amemory"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"Total memory capacity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"used"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"User program memory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"free"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"Free memory capacity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buff_cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory occupied by cache")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"available"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"Remaining available memory capacity")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usage"),(0,l.kt)("td",{parentName:"tr",align:null},"%"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory usage")))),(0,l.kt)("h4",{id:"metric-setdisk"},"Metric set\uff1adisk"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disk_num"),(0,l.kt)("td",{parentName:"tr",align:null},"blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of disks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_num"),(0,l.kt)("td",{parentName:"tr",align:null},"partitions"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of partitions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block_write"),(0,l.kt)("td",{parentName:"tr",align:null},"blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of blocks written to disk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block_read"),(0,l.kt)("td",{parentName:"tr",align:null},"blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of blocks read from disk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"iops"),(0,l.kt)("td",{parentName:"tr",align:null},"Rate of writing disk blocks per second")))),(0,l.kt)("h4",{id:"metric-setinterface"},"Metric set\uff1ainterface"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interface_name"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Network card name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receive_bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Inbound data traffic(bytes)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transmit_bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Outbound data traffic(bytes)")))),(0,l.kt)("h4",{id:"metric-setdisk_free"},"Metric set\uff1adisk_free"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filesystem"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"File system name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"used"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"Used disk size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"available"),(0,l.kt)("td",{parentName:"tr",align:null},"Mb"),(0,l.kt)("td",{parentName:"tr",align:null},"Available disk size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usage"),(0,l.kt)("td",{parentName:"tr",align:null},"%"),(0,l.kt)("td",{parentName:"tr",align:null},"usage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mounted"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Mount point directory")))))}c.isMDXComponent=!0}}]);