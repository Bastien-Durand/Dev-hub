# Full Stack MERN Project

This project is built using the MERN stack, aiming to demonstrate a comprehensive implementation of user authentication and management, from user creation to login, utilizing modern web development practices and tools.

## Tools & Libraries

### Backend

- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing data in a flexible, JSON-like format.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Bcryptjs**: A library to help hash passwords.
- **Jsonwebtoken**: A library to implement JSON Web Tokens.
- **Dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **Nodemon**: A utility that monitors for any changes in your source and automatically restarts your server.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React-router-dom**: DOM bindings for React Router.
- **Axios**: A promise-based HTTP client for the browser and node.js.
- **Validator**: A library of string validators and sanitizers.
- **CSS-Modules**: Stylesheet management for component-based styling.

### Utility

- **Insomnia**: An API client for testing and debugging RESTful APIs.
- **MongoDB Compass**: The GUI for MongoDB.
- **Lighthouse**: An open-source, automated tool for improving the quality of web pages.

## Project Tasks

### Task 1: Create User (C in CRUD)

- **Database Schema**: Create a `User` collection schema with fields for `email` and `password`, both strings.
- **Endpoint**: Implement a POST endpoint `/user/create` for creating a new user. Ensure emails are unique.

#### Endpoint Requirements

- Validate the uniqueness of the user's email. If it exists, return an error message "User already exists".

### Task 2: User Creation Form

- Develop a form with fields for email and password.
- On form submission, send the email and hashed password to the backend to create a new user.
- Display appropriate messages for success or failure (e.g., user already exists).

### Task 3: User Login

- **Endpoint**: Create an endpoint `/user/login` to handle login requests.
- **Function**: Implement `loginUser()` to find a user by email and verify password with bcrypt.
- If successful, attach a JWT to the request for session handling.

### Task 4: UI Rebuild and Route Protection

- Rebuild the frontend using a modern design library.
- Implement public and protected routes.
- Ensure that only logged-in users can access protected content.
