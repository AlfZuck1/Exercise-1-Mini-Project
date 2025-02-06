# Imagen base de Java
FROM openjdk:23-jdk-slim
# Directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia el archivo JAR de la aplicación al contenedor
COPY target/miniProject-0.0.1-SNAPSHOT.jar app.jar
# Puerto en el que la aplicación escucha
EXPOSE 8080
# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]