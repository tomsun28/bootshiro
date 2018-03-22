#VERSION 1.0.0
#基础镜像为tomcat

FROM tomsun28/tomcat:1.1

#签名
MAINTAINER tomsun28 "tomsun28@outlook.com"


#加入WAR包到tomcat下
#RUN rm -rf /usr/local/tomcat/webapps
#ADD ./target/tmall2.war /usr/local/tomcat/webapps/tmall2.war

RUN rm -rf /opt/tomcat/webapps/tmall2*
ADD ./target/tmall2.war /opt/tomcat/webapps/tmall2.war