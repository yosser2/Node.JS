# Description

This Node.js project includes a set of guided exercises covering various tasks such as creating a simple "Hello World" program, setting up a basic server, working with file operations, generating passwords, and sending emails using Node.js packages.

## Tasks
1. **Hello World**
   - File: `hello-world.js`
   - Description: Prints "HELLO WORLD" to the console.

2. **Create a Server**
   - File: `server.js`
   - Description: Runs a server on port 3000 and responds with `<h1>Hello Node!!!!</h1>\n` when accessed via http://localhost:3000.

3. **File Operations**
   - File: `file-operations.js`
   - Description: Creates a file named "welcome.txt" containing "Hello Node" and reads and logs data from the file.

4. **Password Generator**
   - File: `password-generator.js`
   - Description: Uses the `generate-password` package to create a function that generates random passwords and logs them to the console.

5. **Email Sender**
   - File: `email-sender.js`
   - Description: Sends a test email using the `nodemailer` package. Make sure to follow task-specific instructions to set up Gmail credentials.

## Usage

Run each task individually by executing the corresponding JavaScript file using Node.js. For example:
  
    node hello-world.js

## Task-specific Instructions
- **Email Sender**

1- Install nodemailer: 
      
      npm install nodemailer

2- Update the email-sender.js file with your Gmail credentials:

  - Replace 'your-email@gmail.com' with your Gmail email.

  - Replace 'your-app-password' with the application-specific password generated in your Gmail account settings.
