"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[5081],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(3117),i=n(102),r=(n(7294),n(4137)),a=["components"],l={id:"extend-ssh",title:"SSH Protocol Custom Monitoring",sidebar_label:"SSH Protocol Custom Monitoring"},p=void 0,s={unversionedId:"advanced/extend-ssh",id:"advanced/extend-ssh",title:"SSH Protocol Custom Monitoring",description:"From Custom Monitoring, you are familiar with how to customize types, indicators, protocols, etc. Here we will introduce in detail how to use SSH protocol to customize indicator monitoring.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-ssh.md",sourceDirName:"advanced",slug:"/advanced/extend-ssh",permalink:"/en/docs/advanced/extend-ssh",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-ssh.md",tags:[],version:"current",frontMatter:{id:"extend-ssh",title:"SSH Protocol Custom Monitoring",sidebar_label:"SSH Protocol Custom Monitoring"},sidebar:"docs",previous:{title:"JDBC Protocol Custom Monitoring",permalink:"/en/docs/advanced/extend-jdbc"},next:{title:"Help center",permalink:"/en/docs/help/guide"}},c=[{value:"SSH protocol collection process",id:"ssh-protocol-collection-process",children:[],level:3},{value:"Data parsing method",id:"data-parsing-method",children:[{value:"<strong>oneRow</strong>",id:"onerow",children:[],level:4},{value:"<strong>multiRow</strong>",id:"multirow",children:[],level:4}],level:3},{value:"Custom Steps",id:"custom-steps",children:[],level:3},{value:"Monitoring configuration definition file",id:"monitoring-configuration-definition-file",children:[],level:3},{value:"Monitoring parameter definition file",id:"monitoring-parameter-definition-file",children:[],level:3}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," From ",(0,r.kt)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring"),", you are familiar with how to customize types, indicators, protocols, etc. Here we will introduce in detail how to use SSH protocol to customize indicator monitoring.\nSSH protocol custom monitoring allows us to easily monitor and collect the Linux indicators we want by writing sh command script.     ")),(0,r.kt)("h3",{id:"ssh-protocol-collection-process"},"SSH protocol collection process"),(0,r.kt)("p",null,"\u3010",(0,r.kt)("strong",{parentName:"p"},"System directly connected to Linux"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"Run shell command script statement"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"parse reponse data: oneRow, multiRow"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"indicator data extraction"),"\u3011   "),(0,r.kt)("p",null,"It can be seen from the process that we define a monitoring type of SSH protocol. We need to configure SSH request parameters, configure which indicators to obtain, and configure query script statements."),(0,r.kt)("h3",{id:"data-parsing-method"},"Data parsing method"),(0,r.kt)("p",null,"We can obtain the corresponding indicator data through the data fields queried by the SHELL script and the indicator mapping we need. At present, there are two mapping parsing methods\uff1aoneRow and multiRow which can meet the needs of most indicators."),(0,r.kt)("h4",{id:"onerow"},(0,r.kt)("strong",{parentName:"h4"},"oneRow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Query out a column of data, return the field value (one value per row) of the result set through query and map them to the field.     ")),(0,r.kt)("p",null,"eg\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","indicators of Linux to be queried hostname-host name\uff0cuptime-start time",(0,r.kt)("br",{parentName:"p"}),"\n","Host name original query command\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"hostname"),(0,r.kt)("br",{parentName:"p"}),"\n","Start time original query command\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"uptime | awk -F \",\" '{print $1}'"),(0,r.kt)("br",{parentName:"p"}),"\n","Then the query script of the two indicators in hertzbeat is(Use ",(0,r.kt)("inlineCode",{parentName:"p"},";")," Connect them together)\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"hostname; uptime | awk -F \",\" '{print $1}'"),(0,r.kt)("br",{parentName:"p"}),"\n","The data responded by the terminal is\uff1a    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tombook\n14:00:15 up 72 days  \n")),(0,r.kt)("p",null,"At last collected indicator data is mapped one by one as\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","hostname is ",(0,r.kt)("inlineCode",{parentName:"p"},"tombook"),(0,r.kt)("br",{parentName:"p"}),"\n","uptime is ",(0,r.kt)("inlineCode",{parentName:"p"},"14:00:15 up 72 days"),"      "),(0,r.kt)("p",null,"Here the indicator field and the response data can be mapped into a row of collected data one by one      "),(0,r.kt)("h4",{id:"multirow"},(0,r.kt)("strong",{parentName:"h4"},"multiRow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Query multiple rows of data, return the column names of the result set through the query, and map them to the indicator field of the query.  ")),(0,r.kt)("p",null,"eg\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","Linux memory related indicator fields queried\uff1atotal-Total memory, used-Used memory,free-Free memory, buff-cache-Cache size, available-Available memory",(0,r.kt)("br",{parentName:"p"}),"\n","Memory indicaotr original query command\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"free -m"),", Console response\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"              total        used        free      shared  buff/cache   available\nMem:           7962        4065         333           1        3562        3593\nSwap:          8191          33        8158\n")),(0,r.kt)("p",null,"In heartbeat multiRow format parsing requires a one-to-one mapping between the column name of the response data  and the indicaotr value, so the corresponding query SHELL script is:\n",(0,r.kt)("inlineCode",{parentName:"p"},"free -m | grep Mem | awk 'BEGIN{print \"total used free buff_cache available\"} {print $2,$3,$4,$6,$7}'"),(0,r.kt)("br",{parentName:"p"}),"\n","Console response is\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"total  used  free  buff_cache  available\n7962   4066  331   3564        3592\n")),(0,r.kt)("p",null,"Here the indicator field and the response data can be mapped into collected data one by one."),(0,r.kt)("h3",{id:"custom-steps"},"Custom Steps"),(0,r.kt)("p",null,"In order to configure a custom monitoring type, you need to add and configure two YML file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Monitoring configuration definition file named after monitoring type - eg\uff1aexample_linux.yml in the installation directory /hertzbeat/define/app/"),(0,r.kt)("li",{parentName:"ol"},"Monitoring parameter definition file named after monitoring type - eg\uff1aexample_linux.yml in the installation directory /hertzbeat/define/param/"),(0,r.kt)("li",{parentName:"ol"},"Restart hertzbeat system, we successfully fit a new custom monitoring type.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Configuration usages of the two files are detailed below. Please pay attention to usage annotation.   "),(0,r.kt)("h3",{id:"monitoring-configuration-definition-file"},"Monitoring configuration definition file"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Monitoring configuration definition file is used to define ",(0,r.kt)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.  ")),(0,r.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example_linux which use the SSH protocol to collect data.",(0,r.kt)("br",{parentName:"p"}),"\n","The file name: example_linux.yml in /define/app/example_linux.yml   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: os\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example_linux\nname:\n  zh-CN: \u6a21\u62dfLINUX\u5e94\u7528\u7c7b\u578b\n  en-US: LINUX EXAMPLE APP\n# parameter mapping map. These are input parameter variables which can be written to the configuration in form of ^_^host^_^. The system automatically replace variable's value.\n# type means parameter type: 0-number number, 1-string cleartext string, 2-secret encrypted string\n# required parameters - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n# indicator group list\nmetrics:\n  # The first monitoring indicator group basic\n  # Note\uff1a: the built-in monitoring indicators have (responseTime - response time)\n  - name: basic\n    # The smaller indicator group scheduling priority(0-127), the higher the priority. After completion of the high priority indicator group collection,the low priority indicator group will then be scheduled. Indicator groups with the same priority  will be scheduled in parallel.\n    # Indicator group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # Specific monitoring indicators in the indicator group\n    fields:\n      # indicator information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: indicator unit\n      - field: hostname\n        type: 1\n        instance: true\n      - field: version\n        type: 1\n      - field: uptime\n        type: 1\n    # protocol for monitoring and collection  eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # Specific collection configuration when the protocol is SSH protocol\n    ssh:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: (uname -r ; hostname ; uptime | awk -F \",\" '{print $1}' | sed  \"s/ //g\") | sed \":a;N;s/\\n/^/g;ta\" | awk -F '^' 'BEGIN{print \"version hostname uptime\"} {print $1, $2, $3}'\n      # parsing method for reponse data\uff1aoneRow, multiRow\n      parseType: multiRow\n\n  - name: cpu\n    priority: 1\n    fields:\n      # indicator information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: indicator unit\n      - field: info\n        type: 1\n      - field: cores\n        type: 0\n        unit: the number of cores\n      - field: interrupt\n        type: 0\n        unit: number\n      - field: load\n        type: 1\n      - field: context_switch\n        type: 0\n        unit: number\n    # protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # Specific collection configuration when the protocol is SSH protocol\n    ssh:\n      # \u4e3b\u673ahost: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: \"LANG=C lscpu | awk -F: '/Model name/ {print $2}';awk '/processor/{core++} END{print core}' /proc/cpuinfo;uptime | sed 's/,/ /g' | awk '{for(i=NF-2;i<=NF;i++)print $i }' | xargs;vmstat 1 1 | awk 'NR==3{print $11}';vmstat 1 1 | awk 'NR==3{print $12}'\"\n      parseType: oneRow\n\n  - name: memory\n    priority: 2\n    fields:\n      # indicator information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: indicator unit\n      - field: total\n        type: 0\n        unit: Mb\n      - field: used\n        type: 0\n        unit: Mb\n      - field: free\n        type: 0\n        unit: Mb\n      - field: buff_cache\n        type: 0\n        unit: Mb\n      - field: available\n        type: 0\n        unit: Mb\n    # protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: ssh\n    # Specific collection configuration when the protocol is SSH protocol\n    ssh:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      username: ^_^username^_^\n      password: ^_^password^_^\n      script: free -m | grep Mem | awk 'BEGIN{print \"total used free buff_cache available\"} {print $2,$3,$4,$6,$7}'\n      parseType: multiRow\n")),(0,r.kt)("h3",{id:"monitoring-parameter-definition-file"},"Monitoring parameter definition file"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Monitoring parameter definition file is used to define ",(0,r.kt)("em",{parentName:"p"},"required input parameter field structure definition (Front-end page render input parameter box according to structure)"),". ")),(0,r.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example_linux which use the SSH protocol to collect data.",(0,r.kt)("br",{parentName:"p"}),"\n","The file name: example_linux.yml in /define/param/example_linux.yml   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"app: example_linux\nparam:\n  - field: host\n    name: \n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    type: host\n    required: true\n  - field: port\n    name: \n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 22\n    placeholder: 'Please enter the port'\n  - field: username\n    name: \n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 20\n    required: true\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: true\n")))}u.isMDXComponent=!0}}]);