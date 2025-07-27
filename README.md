//docker-compose.yml (File name)
//docker-compose build --no-cache
//docker compose up


version: "3.8"

services:

  mysql:
  
    image: mysql:8.0
    container_name: mysql-db
    environment:
      MYSQL_ROOT_PASSWORD: Rittik@95174
      MYSQL_DATABASE: employee_management_system
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - ems-network

  backend:
  
    build: ./EmployeeMangementSystem
    container_name: springboot-app
    ports:
      - "8080:8080"
    depends_on:
      - mysql
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/employee_management_system
      SPRING_DATASOURCE_USERNAME: root
      SPRING_DATASOURCE_PASSWORD: Rittik@95174
    networks:
      - ems-network

  frontend:
  
    build: ./EmployeeMangementSystem-UI
    container_name: angular-app
    ports:
      - "4200:80"
    depends_on:
      - backend
    networks:
      - ems-network

volumes:

  mysql_data:

networks:

  ems-network:
