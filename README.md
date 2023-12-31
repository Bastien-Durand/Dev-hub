## Tools & Libaries

#### Back:

- Express
- Mongodb
- Mongoose
- Bcryptjs
- Jsonwebtoken
- Dotenv
- Nodemon

#### Front:

- React
- React-router-dom
- Axios
- Validator
- Css-modules

#### Utility:

- Insomnia
- MongoDB Compass
- Lighthouse

# Task 1

C in CRUD. Database and endpoint for creating a user

1. Create a database schema with User a collection that accepts an email and password field. Both fields should be strings.

2. Create a post endpoint /user/create that handles creating a new user in the database

### Endpoint requirements

Email should be unique for all entries. No two users can have the same email.

- Validate that a user’s email does not already exist in the database before creating a new user.

- If the email exists return an error message “User already exists”. This will later be displayed on the frontend when the form is submitted.

# Task 2

- Create a form with email and password field. On form submit should send email and hashed password to your backend and create a new user.

- The UI should show whether the user was created successfully or if the user was not created display an error message explaining why.

# Task 3

### User Login

1. Create an endpoint `/user/login`-

- Request type: {email: <string>, password: <string>} (this will be the password hashed)

#### The endpoint calls a function named`loginUser`

- loginUser() - Find’s a user based on email
- Using bcrypt confirm the password hashes match
- If the passwords match attach a jwt to the request

# Task 4

1. Rebuild the front end using a modern design library
2. Build out your public content ui
3. Build out your protected route ui content
4. Make sure users logged in can only access the protected content
