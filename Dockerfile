FROM maven:3.8.3-openjdk-16 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:11.0.16-jdk-slim 
COPY --from=build /target/jablan-0.0.1-SNAPSHOT.jar jablan.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","jablan.jar"]