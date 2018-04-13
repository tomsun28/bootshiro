#VERSION 1.0.0
#基础镜像为tomcat

FROM tomsun28/tomcat:1.1

#签名
MAINTAINER tomsun28 "tomsun28@outlook.com"


RUN rm -rf /opt/tomcat/webapps/bootshiro*
ADD ./target/bootshiro.jar /opt/tomcat/webapps/bootshiro.jar

EXPORT 8080
WORKDIR /opt/tomcat/webapps/

CMD ["java", "-jar", "bootshiro.jar","--spring.profiles.active=prod"]