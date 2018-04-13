#VERSION 1.0.0
#基础镜像为oracle java-8

FROM tomsun28/oracle-java-8:1.0

#签名
MAINTAINER tomsun28 "tomsun28@outlook.com"


RUN rm -rf /opt/tomcat/webapps/bootshiro*
ADD ./target/bootshiro.jar /opt/tomcat/webapps/bootshiro.jar

EXPOSE 8080
WORKDIR /opt/tomcat/webapps/

CMD ["java", "-jar", "bootshiro.jar","--spring.profiles.active=prod"]