"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[8251],{4137:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9266:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var r=n(3117),a=(n(7294),n(4137));const l={id:"fullsite",title:"Monitoring Full site",sidebar_label:"Full site Monitor"},i=void 0,o={unversionedId:"help/fullsite",id:"help/fullsite",title:"Monitoring Full site",description:"Available or not to monitor all pages of the website.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/fullsite.md",sourceDirName:"help",slug:"/help/fullsite",permalink:"/en/docs/help/fullsite",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/fullsite.md",tags:[],version:"current",frontMatter:{id:"fullsite",title:"Monitoring Full site",sidebar_label:"Full site Monitor"},sidebar:"docs",previous:{title:"Port availability",permalink:"/en/docs/help/port"},next:{title:"SSL Monitor",permalink:"/en/docs/help/ssl_cert"}},u={},p=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1asummary",id:"metric-setsummary",level:4}],s={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Available or not to monitor all pages of the website.",(0,a.kt)("br",{parentName:"p"}),"\n","A website often has multiple pages provided by different services. We monitor the full site by collecting the SiteMap exposed by the website.",(0,a.kt)("br",{parentName:"p"}),"\n","Note\u26a0\ufe0f This monitoring requires your website to support SiteMap. We support SiteMap in XML and TXT formats.    ")),(0,a.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Ports provided by website, http generally defaults to 80 and https generally defaults to 443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SiteMap"),(0,a.kt)("td",{parentName:"tr",align:null},"Relative path of website SiteMap address, eg\uff1a/sitemap.xml")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable HTTPS"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to access the website through HTTPS. Note\u26a0\ufe0fWhen HTTPS is enabled, the default corresponding port needs to be changed to 443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,a.kt)("h4",{id:"metric-setsummary"},"Metric set\uff1asummary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"URL path of web page")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"statusCode"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Response HTTP status code for requesting the website")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"responseTime"),(0,a.kt)("td",{parentName:"tr",align:null},"ms"),(0,a.kt)("td",{parentName:"tr",align:null},"Website response time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errorMsg"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Error message feedback after requesting the website")))))}c.isMDXComponent=!0}}]);