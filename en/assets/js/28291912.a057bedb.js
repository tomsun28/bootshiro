"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[9749],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,N=s["".concat(m,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7617:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return d}});var a=n(3117),r=(n(7294),n(4137));const l={id:"activemq",title:"Monitoring Apache ActiveMQ",sidebar_label:"Apache ActiveMQ"},i=void 0,o={unversionedId:"help/activemq",id:"help/activemq",title:"Monitoring Apache ActiveMQ",description:"Monitoring the running status of Apache ActiveMQ message middleware, nodes, topics and other related metrics.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/activemq.md",sourceDirName:"help",slug:"/help/activemq",permalink:"/en/docs/help/activemq",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/activemq.md",tags:[],version:"current",frontMatter:{id:"activemq",title:"Monitoring Apache ActiveMQ",sidebar_label:"Apache ActiveMQ"}},m={},d=[{value:"Pre-monitoring Operations",id:"pre-monitoring-operations",level:3},{value:"Configuration parameters",id:"configuration-parameters",level:3},{value:"Collect Metrics",id:"collect-metrics",level:3},{value:"Metrics Group: broker",id:"metrics-group-broker",level:4},{value:"Metrics Group: topic",id:"metrics-group-topic",level:4},{value:"Metrics Group: memory_pool",id:"metrics-group-memory_pool",level:4},{value:"Metrics Group: class_loading",id:"metrics-group-class_loading",level:4},{value:"Metrics Group: thread",id:"metrics-group-thread",level:4}],p={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Monitoring the running status of Apache ActiveMQ message middleware, nodes, topics and other related metrics.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Protocol: JMX")),(0,r.kt)("h3",{id:"pre-monitoring-operations"},"Pre-monitoring Operations"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You need to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"JMX")," service on ActiveMQ, HertzBeat uses the JMX protocol to collect metrics from ActiveMQ.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/activemq.xml")," file in the installation directory to enable JMX")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},'userJmx="true"')," attribute in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker")," tag")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<broker xmlns="http://activemq.apache.org/schema/core" brokerName="localhost" dataDirectory="${activemq.data}" useJmx="true">\n    \x3c!-- others --\x3e\n</broker>\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"li"},"bin/env")," file in the installation directory, configure the JMX port IP, etc.")),(0,r.kt)("p",null,"The original configuration information will be as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.port=11099"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"\n \nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote"\n')),(0,r.kt)("p",null,"Update to the following configuration, \u26a0\ufe0f pay attention to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"local external IP")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.password.file=${ACTIVEMQ_CONF}/jmx.password"\n# ACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.access.file=${ACTIVEMQ_CONF}/jmx.access"\n\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.port=11099"\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.ssl=false"\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote.authenticate=false" \nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Djava.rmi.server.hostname=\u672c\u673a\u5bf9\u5916IP"\n\nACTIVEMQ_SUNJMX_START="$ACTIVEMQ_SUNJMX_START -Dcom.sun.management.jmxremote"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Restart the ACTIVEMQ service, and add the corresponding ActiveMQ monitoring in HertzBeat. The parameters use the IP port configured by JMX.")),(0,r.kt)("h3",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"The peer IPV4, IPV6 or domain name to be monitored. Note \u26a0\ufe0fWithout protocol header (eg: https://, http://).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name that identifies this monitoring, and the name needs to be unique.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JMX port"),(0,r.kt)("td",{parentName:"tr",align:null},"The HTTP port provided by JMX, the default is 11099.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JMX URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional, customize the JMX URL connection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username used for authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"password used for authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition Interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time for monitoring periodic data collection, in seconds, the minimum interval that can be set is 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring, and the operation of adding and modifying will continue after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description Remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"More remark information to identify and describe this monitoring, users can remark information here")))),(0,r.kt)("h3",{id:"collect-metrics"},"Collect Metrics"),(0,r.kt)("h4",{id:"metrics-group-broker"},"Metrics Group: broker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BrokerName"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BrokerVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Uptime"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Uptime of the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UptimeMillis"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Uptime of the broker in milliseconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Persistent"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Messages are synchronized to disk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemoryPercentUsage"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent of memory limit used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StorePercentUsage"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent of store limit used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TempPercentUsage"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Percent of temp limit used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentConnectionsCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute exposed for management")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalConnectionsCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribute exposed for management")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalEnqueueCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that have been sent to the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalDequeueCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that have been acknowledged on the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalConsumerCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of message consumers subscribed to destinations on the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalProducerCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of message producers active on destinations on the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalMessageCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of unacknowledged messages on the broker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AverageMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Average message size on this broker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Max message size on this broker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MinMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Min message size on this broker")))),(0,r.kt)("h4",{id:"metrics-group-topic"},"Metrics Group: topic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemoryLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"Memory limit, in bytes, used by undelivered messages before paging to temporary storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MemoryPercentUsage"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The percentage of the memory limit used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProducerCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of producers attached to this destination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ConsumerCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of consumers subscribed to this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EnqueueCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that have been sent to the destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DequeueCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that has been acknowledged (and removed) from the destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ForwardCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that have been forwarded (to a networked broker) from the destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InFlightCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that have been dispatched to, but not acknowledged by, consumers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DispatchCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that has been delivered to consumers, including those not acknowledged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExpiredCount"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of messages that have been expired.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StoreMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"The memory size of all messages in this destination's store.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AverageEnqueueTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Average time a message was held on this destination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxEnqueueTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"The longest time a message was held on this destination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MinEnqueueTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"The shortest time a message was held on this destination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalBlockedTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Total time (ms) messages have been blocked by flow control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AverageMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Average message size on this destination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MaxMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Max message size on this destination")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MinMessageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"Min message size on this destination")))),(0,r.kt)("h4",{id:"metrics-group-memory_pool"},"Metrics Group: memory_pool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"metrics name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"total size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"init size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"max size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"used size")))),(0,r.kt)("h4",{id:"metrics-group-class_loading"},"Metrics Group: class_loading"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Loaded Class Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Total Loaded Class Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Unloaded Class Count")))),(0,r.kt)("h4",{id:"metrics-group-thread"},"Metrics Group: thread"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Total Started Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Peak Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Daemon Thread Count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Current Thread User Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Current Thread Cpu Time")))))}u.isMDXComponent=!0}}]);