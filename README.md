Tasks | Create

C in CRUD. Database and endpoint for creating a user

## Task 1

1. Create a database schema with User a collection that accepts an email and password field. Both fields should be strings.
2. Create a post endpoint /user/create that handles creating a new user in the database

Endpoint requirements
Email should be unique for all entries. No two users can have the same email. 
- Validate that a user’s email does not already exist in the database before creating a new user. If the email exists return an error message “User already exists”. This will later be displayed on the 
frontend when the form is submitted.


## Task 2

Create a form with email and password field. On form submit should send email and hashed password to your backend and create a new user.
The UI should show whether the user was created successfully or if the user was not created display an error message explaining why. 


