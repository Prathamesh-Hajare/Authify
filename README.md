# **Authify**  
A simple and secure authentication system for user registration and login, built with Node.js and Express.js.

## **Features**
- **User Registration**: Allows users to create an account with their name, email, and password.
- **User Login**: Authenticated users can log in using their email and password.
- **Validation**: Data is validated using Joi to ensure the correct format before processing.
- **Password Security**: Passwords are securely encrypted using bcrypt.
- **Authentication**: User authentication is managed through JSON Web Tokens (JWT).
- **Error Handling**: Provides meaningful error messages for validation failures and other issues.

---

## **Tech Stack**
- **Backend**: Node.js, Express.js
- **Validation**: Joi
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Middleware**: CORS, Body-Parser
- **Environment Management**: dotenv

---

## **Installation**

**Clone the repository:**
   git clone https://github.com/Prathamesh-Hajare/Authify.git
   

---

## **Libraries Used**

### **JWT (JSON Web Token)**
**JWT** is a compact and secure method for representing claims between two parties. It's used for user authentication by generating a token after successful login. The token is signed with a secret key and passed to the client, allowing users to make authenticated requests without needing to log in every time. In this project, JWT is used to:
- Generate a token upon successful login.
- Securely authenticate users based on the token in subsequent requests.

Learn more about JWT: [jwt.io](https://jwt.io)

### **Bcrypt**
**Bcrypt** is a password-hashing function designed to securely store passwords. Instead of saving plain-text passwords, bcrypt generates a hashed version, which makes it significantly more difficult for attackers to retrieve the original password in case of a data breach. In this project, bcrypt is used to:
- Hash user passwords during registration.
- Compare hashed passwords during login.

Learn more about bcrypt: [Bcrypt npm package](https://www.npmjs.com/package/bcrypt)

### **Joi**
**Joi** is a powerful data validation library for JavaScript. It allows you to define schemas for object validation in a flexible and extensible way. Joi is used in this project to:
- Validate user input (such as name, email, and password) during signup and login.
- Ensure that input data follows the correct format and meets required constraints.

Learn more about Joi: [Joi documentation](https://joi.dev)

---

## **Future Enhancements**
- **JWT Refresh Tokens**: Add functionality to refresh expired tokens securely.
- **Social Logins**: Allow users to log in via Google, Facebook, etc.

---
