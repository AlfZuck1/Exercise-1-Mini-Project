# ༼ つ ◕_◕ ༽つ Exercise-1-Mini-Project 
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
  
3. **FrontEnd**
   - Developed an Angular Application to interact with the API and display user information.
   - This app allows to create, view, update and delete users directly  from the interface.

<h2>FrontEnd</h2>
The home page shows a list of all users registered in the database. Also, this pages includes a navigation bar to add a new user. In the table you can find the options to modify and delete any user shown.

![image](https://github.com/user-attachments/assets/debeb387-6ac8-4c83-befa-184d488fb74f)

In the Add user or modify user page you can write the username, email and age of the user. Once this information is submitted, you are redirected to the main page.
![image](https://github.com/user-attachments/assets/2d3f9ed3-d2a7-4eae-95ee-38963d8eca59)
![image](https://github.com/user-attachments/assets/1834f12b-0699-488b-940d-fd6b26bb724b)

By just clicking the delete button, the user is deleted.

## Exceptions
Additionally, if an exception occurs in the backend, such as a duplicate username, it will be displayed in the frontend on both the 'Add User' and 'Modify User' pages.

<p align="center">
<img src="https://github.com/user-attachments/assets/96818022-d602-4382-977d-347eb9d44bb4" height="400"/>
<img src="https://github.com/user-attachments/assets/8a0cd255-11d8-4938-8a3a-dc01808c36a6" height="400"/>
</p>

<h2>Tests</h2>
Once the Image is contained in Docker, I made some tests with Postman to ensure that the operations implemented worked fine.

<img src="https://github.com/user-attachments/assets/ecaf47ed-3b6b-4f39-969c-06eac952aabe" width="500"/>
<img src="https://github.com/user-attachments/assets/5bfd5ff4-15f1-4b60-87f1-fc3e1bbed736" width="500"/>
<img src="https://github.com/user-attachments/assets/30ab765a-2338-4f13-a3d8-32966a82e4a2" width="500"/>
<img src="https://github.com/user-attachments/assets/982ce082-d681-4a2b-a414-7e75479cfd99" width="500"/>
<img src="https://github.com/user-attachments/assets/4d67eda0-4064-4f19-91c4-05d7aa05641e" width="500"/>

## **How to Run the Project**
## **Prerequisites**
- Install **Docker** on your machine.
- Install **Node.js** and **Angular CLI** if you haven't already.

### **1. Clone the Repository**
```sh
git clone https://github.com/AlfZuck1/Exercise-1-Mini-Project.git
cd Exercise-1-Mini-Project
```

### **2. Run the Backend (Spring Boot API + Database)**
- Execute the following command in the root directory:
  ```sh
  docker-compose up -d
  ```
- This will:
  - Download the API image from Docker Hub.
  - Set up the database.
  - Run both inside specific containers.
- Wait for the API and database to fully start.

### **3. Run the Angular Application**
- Navigate to the Angular project folder:
  ```sh
  cd user-manager-app
  ```
- Install dependencies:
  ```sh
  npm install
  ```
- Start the development server:
  ```sh
  ng serve
  ```
- Open the application in your browser at:
  ```
  http://localhost:4200
  ```

🚀🚀🚀 Now your project should be up and running! 🚀🚀🚀


