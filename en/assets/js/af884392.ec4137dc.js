"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[2551],{4137:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=c(n),s=a,g=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2512:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=n(3117),a=(n(7294),n(4137));const l={id:"sqlserver",title:"Monitoring\uff1aSqlServer database monitoring",sidebar_label:"SqlServer database"},i=void 0,o={unversionedId:"help/sqlserver",id:"help/sqlserver",title:"Monitoring\uff1aSqlServer database monitoring",description:"Collect and monitor the general performance Metrics of SqlServer database. Support SqlServer 2017+.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/sqlserver.md",sourceDirName:"help",slug:"/help/sqlserver",permalink:"/en/docs/help/sqlserver",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/sqlserver.md",tags:[],version:"current",frontMatter:{id:"sqlserver",title:"Monitoring\uff1aSqlServer database monitoring",sidebar_label:"SqlServer database"},sidebar:"docs",previous:{title:"PostgreSQL database",permalink:"/en/docs/help/postgresql"},next:{title:"ORACLE database",permalink:"/en/docs/help/oracle"}},p={},c=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metric",id:"collection-metric",level:3},{value:"Metric set\uff1abasic",id:"metric-setbasic",level:4},{value:"Metric set\uff1aperformance_counters",id:"metric-setperformance_counters",level:4},{value:"Metric set\uff1aconnection",id:"metric-setconnection",level:4},{value:"Common Problem",id:"common-problem",level:3}],m={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of SqlServer database. Support SqlServer 2017+.")),(0,a.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port provided by the database. The default is 1433")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Query timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the timeout time when SQL query does not respond to data, unit: ms, default: 3000ms")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Database name"),(0,a.kt)("td",{parentName:"tr",align:null},"Database instance name, optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Username"),(0,a.kt)("td",{parentName:"tr",align:null},"Database connection user name, optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"Database connection password, optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Database connection URL\uff0coptional\uff0cIf configured, the database name, user name, password and other parameters in the URL will overwrite the above configured parameters")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.kt)("h3",{id:"collection-metric"},"Collection Metric"),(0,a.kt)("h4",{id:"metric-setbasic"},"Metric set\uff1abasic"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"machine_name"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Windows computer name running the server instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"server_name"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Server and instance information SQL Server associated with Windows instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},'Version of the instance\uff0cSQL Server\uff0cformat is "major.minor.build.revision"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edition"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"The product SQL server version of the installed instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start_time"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Database start time")))),(0,a.kt)("h4",{id:"metric-setperformance_counters"},"Metric set\uff1aperformance_counters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"database_pages"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Database pages, Number of pages obtained (buffer pool)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target_pages"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Target pages, The desired number of pages that the buffer pool must have")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"page_life_expectancy"),(0,a.kt)("td",{parentName:"tr",align:null},"s"),(0,a.kt)("td",{parentName:"tr",align:null},"Page life expectancy. The time that data pages stay in the buffer pool. This time is generally greater than 300")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buffer_cache_hit_ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"%"),(0,a.kt)("td",{parentName:"tr",align:null},"Buffer cache hit ratio, Database buffer pool cache hit rate. The probability that the requested data is found in the buffer pool is generally greater than 80%, otherwise the buffer pool capacity may be too small")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint_pages_sec"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Checkpoint pages/sec, The number of dirty pages written to the disk by the checkpoint per second. If the data is too high, it indicates that there is a lack of memory capacity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"page_reads_sec"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Page reads/sec, Number of pages read per second in the cache pool")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"page_writes_sec"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Page writes/sec, Number of pages written per second in the cache pool")))),(0,a.kt)("h4",{id:"metric-setconnection"},"Metric set\uff1aconnection"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user_connection"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of connected sessions")))),(0,a.kt)("h3",{id:"common-problem"},"Common Problem"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"SSL connection problem fixed")),(0,a.kt)("p",null,"jdk version: jdk11",(0,a.kt)("br",{parentName:"p"}),"\n","Description of the problem: SQL Server 2019 uses the SA user connection to report an error",(0,a.kt)("br",{parentName:"p"}),"\n","Error message:   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption. Error: "PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target". ClientConnectionId:xxxxxxxxxxxxxxxxxxxx\n')),(0,a.kt)("p",null,"Screenshot of the problem:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/38679717/206621658-c0741d48-673d-45ff-9a3b-47d113064c12.png",alt:"issue"})),(0,a.kt)("p",null,"solution:",(0,a.kt)("br",{parentName:"p"}),"\n","Use advanced settings when adding ",(0,a.kt)("inlineCode",{parentName:"p"},"SqlServer")," monitoring, customize JDBC URL, add parameter configuration after the spliced jdbc url, ",(0,a.kt)("inlineCode",{parentName:"p"},";encrypt=true;trustServerCertificate=true;"),"This parameter true means unconditionally trust the server returned any root certificate."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"jdbc:sqlserver://127.0.0.1:1433;DatabaseName=demo;encrypt=true;trustServerCertificate=true;")),(0,a.kt)("p",null,"Reference document: ","[microsoft pkix-path-building-failed-unable-to-find-valid-certification]","(",(0,a.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/azure-database-support-blog/pkix-path-building-"},"https://techcommunity.microsoft.com/t5/azure-database-support-blog/pkix-path-building-")," failed-unable-to-find-valid-certification/ba-p/2591304)"))}d.isMDXComponent=!0}}]);