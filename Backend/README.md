# 📝 Todo Backend API

This is a simple and lightweight Todo backend API built with **TypeScript**, **Express.js**, and **MongoDB (Mongoose)**. It allows users to create, retrieve, update, and delete todo tasks.

## 🚀 Features

- Create a new todo task
- View all todo tasks
- Update task title or completion status
- Delete a task
- MongoDB connection with error handling

## 📦 Tech Stack

- TypeScript
- Node.js & Express.js
- MongoDB & Mongoose
- dotenv for environment configuration

---

## 📁 Folder Structure
```bash
TODO/
├── src/
│   ├── config/
│   │   ├── dbConnection.ts         
│   │
│   ├── controllers/
│   │   └── todo.controller.ts     
│   │
│   ├── models/
│   │   └── todo.model.ts           
│   │
│   ├── routes/
│   │   └── todo.routes.ts          
│   │
│   ├── services/
│   │   └── todo.service.ts         
│   │
│   └── index.ts               
├── .env                        
├── nodemon.json   
├── .gitignore                      
├── package.json                 
├── tsconfig.json                   
└── README.md                     

```


---
## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Md-Roni024/todo_api
cd todo_api
```


### 2. Install dependencies

```bash
npm install
```
### 3. Configure environment variables
Create a .env file in the root:
```bash
PORT=RUNNING_PORT
DB_URI=MONGO URL
```

### 4. Run the server

```bash
npm start
```
The server should now be running at like:
http://localhost:5000


## API Endpoints
All routes are prefixed with /todos.

➕ Create Todo
-  URL: POST http://localhost:5000/todos
- Body:
  ```json
  {
    "title": "Learn TypeScript"
  }
  ```
- Response
  ```json
  {
    "_id": "680b336f8917ceb91e9de94d",
    "title": "Learn TypeScript",
    "completed": false
  }
  ```


📋 Get All Todos
- URL: GET http://localhost:5000/todos
- Response
  ```json
    [
        {
            "_id": "680b317117943ea7d3eecf71",
            "title": "Learn TypeScript",
            "completed": false,
        },
        {
            "_id": "680b3bae19f6b604ca91dd2d",
            "title": "Walking",
            "completed": false,
        }
    ]
  ```


✏️ Update Todo 
-  URL:PUT http://localhost:5000/:id
- Body:
  ```json
  {
    "title": "Learn TypeScript & Coding"
  }
  ```
- Response
  ```json
  {
    "_id": "680b336f8917ceb91e9de94d",
    "title": "Learn TypeScript & Coding",
    "completed": false
  }
  ```

 ❌ Delete Todo
-  URL:Delete http://localhost:5000/:id
- Response
  ```json
  {
    "_id": "680b336f8917ceb91e9de94d",
    "title": "Learn TypeScript & Coding",
    "completed": false
  }


## 👨‍💻 Author
Md. Roni – @Md-Roni024