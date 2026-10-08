# Server.js-8-10-26


Express Server

A simple Node.js/Express backend server with CORS support, JSON request handling, API routes, health checking, and basic error handling.

Features

- Express.js server
- CORS enabled
- JSON request parsing
- Health check endpoint
- Authentication API routes
- Profile API routes
- Static "index.html" response
- 404 route handling
- 500 server error handling
- Environment variable support with "dotenv"

Project Structure

project/
│
├── Server.js
├── auth.js
├── profile.js
├── index.html
├── .env
├── package.json
└── README.md

Installation

Make sure Node.js and npm are installed.

Install the project dependencies:

npm install

If the required packages have not been installed yet:

npm install express mongoose cors dotenv

Environment Variables

Create a ".env" file in the project root.

Example:

PORT=3000

The server uses port "3000" by default if "PORT" is not specified.

Running the Server

Start the server with:

node Server.js

If you use nodemon for development:

npx nodemon Server.js

When the server starts successfully, you should see:

Server running at 3000

API Endpoints

Health Check

GET

/health

Returns:

{
  "status": "ok"
}

This endpoint can be used to verify that the server is running.

Authentication

Authentication routes are mounted under:

/api/auth

The specific endpoints are defined in "auth.js".

Profile

Profile routes are mounted under:

/api/profile

The specific endpoints are defined in "profile.js".

Home

GET

/

Returns the "index.html" file from the project directory.

404 Handler

Requests to routes that do not exist return:

{
  "message": "Route not found"
}

with HTTP status:

404

500 Error Handler

Unexpected server errors return:

{
  "message": "Server error"
}

with HTTP status:

500

Middleware

The server uses the following middleware:

CORS

app.use(cors());

Allows cross-origin requests.

JSON Parser

app.use(express.json());

Allows the server to process JSON request bodies.

Starting the Server

The basic startup flow is:

Client
  │
  ▼
Express Server
  │
  ├── /health
  ├── /api/auth
  ├── /api/profile
  └── /
       │
       ▼
    index.html

Unknown routes are handled by the 404 middleware, while unexpected errors are handled by the 500 error middleware.

Notes

"mongoose" is currently imported for future database functionality:

const mongoose = require('mongoose');

MongoDB connection setup is not included in this server configuration.

License

This project is for development and educational purposes.
