"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"\u5feb\u901f\u5165\u95e8","items":[{"type":"link","label":"\u4ecb\u7ecd","href":"/docs/","docId":"introduce"},{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/docs/start/quickstart","docId":"start/quickstart"},{"type":"link","label":"MYSQL\u5b89\u88c5\u521d\u59cb\u5316","href":"/docs/start/mysql-init","docId":"start/mysql-init"},{"type":"link","label":"TDengine\u5b89\u88c5\u521d\u59cb\u5316","href":"/docs/start/tdengine-init","docId":"start/tdengine-init"},{"type":"link","label":"Docker\u65b9\u5f0f\u90e8\u7f72","href":"/docs/start/docker-deploy","docId":"start/docker-deploy"},{"type":"link","label":"\u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72","href":"/docs/start/package-deploy","docId":"start/package-deploy"}],"collapsible":true,"collapsed":true},{"type":"category","label":"\u81ea\u5b9a\u4e49\u76d1\u63a7","items":[{"type":"link","label":"\u81ea\u5b9a\u4e49\u76d1\u63a7","href":"/docs/advanced/extend-point","docId":"advanced/extend-point"}],"collapsible":true,"collapsed":true},{"type":"category","label":"\u5e2e\u52a9\u6587\u6863","items":[{"type":"link","label":"\u5e2e\u52a9\u5165\u95e8","href":"/docs/help/guide","docId":"help/guide"},{"type":"category","label":"\u5e94\u7528\u670d\u52a1\u76d1\u63a7","items":[{"type":"link","label":"\u7f51\u7ad9\u76d1\u6d4b","href":"/docs/help/website","docId":"help/website"},{"type":"link","label":"HTTP API","href":"/docs/help/api","docId":"help/api"},{"type":"link","label":"PING\u8fde\u901a\u6027","href":"/docs/help/ping","docId":"help/ping"},{"type":"link","label":"\u7aef\u53e3\u53ef\u7528\u6027","href":"/docs/help/port","docId":"help/port"},{"type":"link","label":"\u5168\u7ad9\u76d1\u63a7","href":"/docs/help/fullsite","docId":"help/fullsite"}],"collapsible":true,"collapsed":true},{"type":"category","label":"\u6570\u636e\u5e93\u76d1\u63a7","items":[{"type":"link","label":"MYSQL\u6570\u636e\u5e93","href":"/docs/help/mysql","docId":"help/mysql"}],"collapsible":true,"collapsed":true},{"type":"category","label":"\u544a\u8b66\u901a\u77e5\u914d\u7f6e","items":[{"type":"link","label":"\u544a\u8b66\u90ae\u4ef6\u901a\u77e5","href":"/docs/help/alert_email","docId":"help/alert_email"},{"type":"link","label":"\u544a\u8b66WebHook\u901a\u77e5","href":"/docs/help/alert_webhook","docId":"help/alert_webhook"},{"type":"link","label":"\u544a\u8b66\u4f01\u4e1a\u5fae\u4fe1\u901a\u77e5","href":"/docs/help/alert_wework","docId":"help/alert_wework"},{"type":"link","label":"\u544a\u8b66\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5","href":"/docs/help/alert_dingtalk","docId":"help/alert_dingtalk"},{"type":"link","label":"\u544a\u8b66\u98de\u4e66\u673a\u5668\u4eba\u901a\u77e5","href":"/docs/help/alert_feishu","docId":"help/alert_feishu"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Others","items":[{"type":"link","label":"\u4ea4\u6d41\u8054\u7cfb","href":"/docs/others/contact","docId":"others/contact"},{"type":"link","label":"\u8bbe\u8ba1\u6587\u6863","href":"/docs/others/design","docId":"others/design"},{"type":"link","label":"\u8d5e\u52a9","href":"/docs/others/sponsor","docId":"others/sponsor"},{"type":"link","label":"\u79c1\u6709\u5316\u90e8\u7f72","href":"/docs/others/private","docId":"others/private"},{"type":"link","label":"\u76f8\u5173\u8d44\u6e90","href":"/docs/others/resource","docId":"others/resource"}],"collapsible":true,"collapsed":true}]},"docs":{"advanced/extend-point":{"id":"advanced/extend-point","title":"\u81ea\u5b9a\u4e49\u76d1\u63a7","description":"HertzBeat\u62e5\u6709\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\uff0c\u60a8\u53ea\u9700\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6\u5c31\u80fd\u9002\u914d\u4e00\u6b3e\u81ea\u5b9a\u4e49\u7684\u76d1\u63a7\u7c7b\u578b\u3002\u76ee\u524d\u81ea\u5b9a\u4e49\u76d1\u63a7\u652f\u6301HTTP\u534f\u8bae\uff0cMYSQL\u534f\u8bae\uff0c\u540e\u7eed\u4f1a\u652f\u6301\u66f4\u591a\u901a\u7528\u534f\u8bae\u3002","sidebar":"docs"},"contributing":{"id":"contributing","title":"\u53c2\u4e0e\u8d21\u732e","description":"Very welcome to Contribute this project, go further and better with sureness."},"help/alert_dingtalk":{"id":"help/alert_dingtalk","title":"\u544a\u8b66\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5","description":"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002","sidebar":"docs"},"help/alert_email":{"id":"help/alert_email","title":"\u544a\u8b66\u90ae\u4ef6\u901a\u77e5","description":"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7\u90ae\u4ef6\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002","sidebar":"docs"},"help/alert_feishu":{"id":"help/alert_feishu","title":"\u544a\u8b66\u98de\u4e66\u673a\u5668\u4eba\u901a\u77e5","description":"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7\u98de\u4e66\u673a\u5668\u4eba\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002","sidebar":"docs"},"help/alert_webhook":{"id":"help/alert_webhook","title":"\u544a\u8b66WebHook\u56de\u8c03\u901a\u77e5","description":"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7post\u8bf7\u6c42\u65b9\u5f0f\u8c03\u7528WebHook\u63a5\u53e3\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002","sidebar":"docs"},"help/alert_wework":{"id":"help/alert_wework","title":"\u544a\u8b66\u4f01\u4e1a\u5fae\u4fe1\u901a\u77e5","description":"\u9608\u503c\u89e6\u53d1\u540e\u53d1\u9001\u544a\u8b66\u4fe1\u606f\uff0c\u901a\u8fc7\u4f01\u4e1a\u5fae\u4fe1\u673a\u5668\u4eba\u901a\u77e5\u5230\u63a5\u6536\u4eba\u3002","sidebar":"docs"},"help/api":{"id":"help/api","title":"\u76d1\u63a7\uff1aHTTP API","description":"\u8c03\u7528HTTP API\u63a5\u53e3\uff0c\u67e5\u770b\u63a5\u53e3\u662f\u5426\u53ef\u7528\uff0c\u5bf9\u5176\u54cd\u5e94\u65f6\u95f4\u7b49\u6307\u6807\u8fdb\u884c\u76d1\u6d4b","sidebar":"docs"},"help/fullsite":{"id":"help/fullsite","title":"\u76d1\u63a7\uff1a\u5168\u7ad9\u76d1\u63a7","description":"\u5bf9\u7f51\u7ad9\u7684\u5168\u90e8\u9875\u9762\u76d1\u6d4b\u662f\u5426\u53ef\u7528","sidebar":"docs"},"help/guide":{"id":"help/guide","title":"\u5e2e\u52a9\u4e2d\u5fc3","description":"TanCloud - \u6613\u7528\u53cb\u597d\u7684\u9ad8\u6027\u80fd\u76d1\u63a7\u4e91","sidebar":"docs"},"help/mysql":{"id":"help/mysql","title":"\u76d1\u63a7\uff1aMYSQL\u6570\u636e\u5e93\u76d1\u63a7","description":"\u5bf9MYSQL\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301MYSQL5+\u3002","sidebar":"docs"},"help/ping":{"id":"help/ping","title":"\u76d1\u63a7\uff1aPING\u8fde\u901a\u6027","description":"\u5bf9\u5bf9\u7aefHOST\u5730\u5740\u8fdb\u884cPING\u64cd\u4f5c\uff0c\u5224\u65ad\u5176\u8fde\u901a\u6027","sidebar":"docs"},"help/port":{"id":"help/port","title":"\u76d1\u63a7\uff1a\u7aef\u53e3\u53ef\u7528\u6027","description":"\u5224\u65ad\u5bf9\u7aef\u670d\u52a1\u66b4\u9732\u7aef\u53e3\u662f\u5426\u53ef\u7528\uff0c\u8fdb\u800c\u5224\u65ad\u5bf9\u7aef\u670d\u52a1\u662f\u5426\u53ef\u7528\uff0c\u91c7\u96c6\u54cd\u5e94\u65f6\u95f4\u7b49\u6307\u6807\u8fdb\u884c\u76d1\u6d4b","sidebar":"docs"},"help/website":{"id":"help/website","title":"\u76d1\u63a7\uff1a\u7f51\u7ad9\u76d1\u6d4b","description":"\u5bf9\u7f51\u7ad9\u662f\u5426\u53ef\u7528\uff0c\u54cd\u5e94\u65f6\u95f4\u7b49\u6307\u6807\u8fdb\u884c\u76d1\u6d4b","sidebar":"docs"},"introduce":{"id":"introduce","title":"HertzBeat\u8d6b\u5179\u8df3\u52a8","description":"\u6613\u7528\u53cb\u597d\u7684\u9ad8\u6027\u80fd\u76d1\u63a7\u544a\u8b66\u7cfb\u7edf\u3002","sidebar":"docs"},"others/contact":{"id":"others/contact","title":"\u4ea4\u6d41\u8054\u7cfb","description":"\u5982\u679c\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u6709\u4efb\u4f55\u9700\u8981\u5e2e\u52a9\u6216\u8005\u60f3\u4ea4\u6d41\u5efa\u8bae\uff0c\u53ef\u4ee5\u901a\u8fc7 \u5fae\u4fe1\u7fa4\u3001QQ\u7fa4 \u793e\u533a\u7f51\u7ad9 ISSUE \u8ba8\u8bba\u4ea4\u6d41\u3002","sidebar":"docs"},"others/design":{"id":"others/design","title":"\u8bbe\u8ba1\u6587\u6863","description":"HertzBeat\u67b6\u6784","sidebar":"docs"},"others/private":{"id":"others/private","title":"\u79c1\u6709\u5316\u90e8\u7f72","description":"\u5982\u679c\u60a8\u7684\u56e2\u961f\u60f3\u79c1\u6709\u5316\u90e8\u7f72\u6b64\u76d1\u63a7\u7cfb\u7edf\uff0c\u76ee\u524d\u6211\u4eec\u63d0\u4f9b\u4e24\u79cd\u65b9\u6848\u3002","sidebar":"docs"},"others/resource":{"id":"others/resource","title":"\u76f8\u5173\u8d44\u6e90","description":"\u56fe\u6807\u8d44\u6e90","sidebar":"docs"},"others/sponsor":{"id":"others/sponsor","title":"\u8d5e\u52a9","description":"HertzBeat\u5bf9\u4e2a\u4eba\u6216\u4f01\u4e1a\u5b8c\u5168\u514d\u8d39\uff0c\u5982\u679c\u60a8\u559c\u6b22\u8fd9\u4e2a\u9879\u76ee\u5e76\u4e14\u613f\u610f\u63d0\u4f9b\u5e2e\u52a9\uff0c\u8bf7\u6211\u4eec\u559d\u676f\u5496\u5561\u5427","sidebar":"docs"},"start/docker-deploy":{"id":"start/docker-deploy","title":"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat","description":"\u63a8\u8350\u4f7f\u7528docker\u90e8\u7f72HertzBeat","sidebar":"docs"},"start/mysql-init":{"id":"start/mysql-init","title":"\u4f9d\u8d56\u670d\u52a1MYSQL\u5b89\u88c5\u521d\u59cb\u5316","description":"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cHertzBeat\u4f7f\u7528\u5176\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002","sidebar":"docs"},"start/package-deploy":{"id":"start/package-deploy","title":"\u901a\u8fc7\u5b89\u88c5\u5305\u5b89\u88c5HertzBeat","description":"HertzBeat\u652f\u6301\u5728Linux Windows Mac\u7cfb\u7edf\u5b89\u88c5\u8fd0\u884c\uff0cCPU\u652f\u6301X64/ARM64\u3002\u7531\u4e8e\u5b89\u88c5\u5305\u81ea\u8eab\u4e0d\u5305\u542bJAVA\u8fd0\u884c\u73af\u5883\uff0c\u9700\u60a8\u63d0\u524d\u51c6\u5907JAVA\u8fd0\u884c\u73af\u5883\u3002","sidebar":"docs"},"start/quickstart":{"id":"start/quickstart","title":"\u5feb\u901f\u5f00\u59cb","description":"\ud83d\udc15 \u5f00\u59cb\u4f7f\u7528","sidebar":"docs"},"start/tdengine-init":{"id":"start/tdengine-init","title":"\u4f9d\u8d56\u670d\u52a1TDengine\u5b89\u88c5\u521d\u59cb\u5316","description":"TDengine\u662f\u4e00\u6b3e\u56fd\u4ea7\u7684\u5f00\u6e90\u7269\u8054\u7f51\u65f6\u5e8f\u578b\u6570\u636e\u5e93\uff0c\u6211\u4eec\u4f7f\u7528\u5176\u66ff\u6362\u4e86InfluxDb\uff0c\u6765\u5b58\u50a8\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002","sidebar":"docs"}}}')}}]);