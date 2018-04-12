#VERSION 1.0.0
#基础镜像为tomcat

FROM tomsun28/tomcat:1.1

#签名
MAINTAINER tomsun28 "tomsun28@outlook.com"


#加入WAR包到tomcat下
#RUN rm -rf /usr/local/tomcat/webapps
#ADD ./target/bootshiro.war /usr/local/tomcat/webapps/bootshiro.war

RUN rm -rf /opt/tomcat/webapps/bootshiro*
ADD ./target/bootshiro.war /opt/tomcat/webapps/bootshiro.war