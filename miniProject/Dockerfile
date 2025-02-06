# Imagen base de Java
FROM openjdk:23-jdk-slim
# Directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia el archivo JAR de la aplicación al contenedor
COPY target/miniProject-0.0.1-SNAPSHOT.jar app.jar
# Script Wait for it
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
# Puerto en el que la aplicación escucha
EXPOSE 8080
# Comando para ejecutar la aplicación
ENTRYPOINT ["/wait-for-it.sh", "user-database:3306", "--", "java", "-jar", "app.jar"]
