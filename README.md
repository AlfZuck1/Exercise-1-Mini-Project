# Exercise-1-Mini-Project
Develop a small application or script in your favorite language with specific requirements.

## **Objective**
Develop a REST API to manage users with CRUD operations, encapsulate it in a Docker image, and provide a frontend to interact with the API.

### **Steps Taken**:
First, I created the REST API with SpringBoot with the next operations.
1. **Operations Implemented**:
     - **Create User** (`POST /users`): Creates a new user by sending a request with the user's information.
     - **Read Users** (`GET /users`): Retrieves a list of all users.
     - **Read User by Username** (`GET /users/{username}`): Retrieves a user by their username.
     - **Update User** (`PUT /users/{id}`): Allows modification of an existing user's details.
     - **Delete User** (`DELETE /users/{id}`): Deletes a user by their id.
I used a simple MySQL database to store the user data.

Secondly, I made a dockerization of my application and the database.

2. **Dockerization**:
   - Created a **Docker image** for the REST API.
   - Used **Docker Compose** to connect the API to a database container for testing and running the API in isolated environments.
   - Used **wait-for-it.sh** script to ensure that the API connects to the database once it is available.

<h2>Tests</h2>
Once the Image is contained in Docker, I made some tests with Postman to ensure that the operations implemented worked fine.

<img src="https://github.com/user-attachments/assets/ecaf47ed-3b6b-4f39-969c-06eac952aabe" width="500"/>
<img src="https://github.com/user-attachments/assets/5bfd5ff4-15f1-4b60-87f1-fc3e1bbed736" width="500"/>
<img src="https://github.com/user-attachments/assets/30ab765a-2338-4f13-a3d8-32966a82e4a2" width="500"/>
<img src="https://github.com/user-attachments/assets/982ce082-d681-4a2b-a414-7e75479cfd99" width="500"/>
<img src="https://github.com/user-attachments/assets/4d67eda0-4064-4f19-91c4-05d7aa05641e" width="500"/>
