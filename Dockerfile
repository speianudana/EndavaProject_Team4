FROM java:8
VOLUME /tmp
EXPOSE 8080
ADD  /target/sport-meeting-point-0.0.1-SNAPSHOT.jar sport-meeting-point-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","sport-meeting-point-0.0.1-SNAPSHOT.jar"]