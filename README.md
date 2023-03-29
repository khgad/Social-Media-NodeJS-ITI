# Social-Media-Project-ITI

This is a Node.js project that implements a Social Media Backend Server. It includes user authentication and authorization, CRUD operations for users, posts, comments, and reviews, and image uploading for user profile pictures.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary
- Multer
- Joi

## Features

- User authentication and authorization with role-based access control.
- User model with CRUD operations.
- Post model with CRUD operations.
- Comment model with CRUD operations.
- Review model with CRUD operations.
- Image uploading using Multer and Cloudinary.
- Request validation using Joi.

## Prerequisites

- Node.js installed on your system
- A text editor or an IDE of your choice
- MongoDB installed on your system or access to a MongoDB Atlas account

## Installation

1. Clone the repository to your local machine.
2. Run npm install to install the required dependencies.
3. Create a .env file in the project's root directory and set your environment variables (such as the database URL, JWT secret, and Cloudinary credentials).
4. Run npm start to start the server.

## Getting Started

1. Clone the repository to your local machine using the following command:

``` sh
git clone https://github.com/khgad/Social-Media-NodeJS-ITI.git
```

2. Install the project dependencies using the following command:

``` sh
npm install
```

3. Create a .env file in the root directory of the project, and add the following environment variables:

``` sh
DB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET_KEY=<your-cloudinary-api-secret>
```

4. Start the server:

The server will start running on `http://localhost:3000` by default.

``` sh
npm start
```

5. Use the API routes with a tool like Postman or Thunder Client.

## API Endpoints
User Authentication

- `POST /signup` - Register a new user.
- `POST /login` - Log in a user.
- `GET /user` - Get a list of all users.
- `GET /user/:id` - Get a specific user by ID.
- `PUT /user/:id` - Update a specific user by ID.
- `DELETE /users/:id` - Delete a specific user by ID.

Profile Picture

- `POST /profiePic` - Upload a profile picture for the logged in user

Posts

- `POST /posts` - Create a new post.
- `GET /posts` - Get a list of all posts.
- `GET /posts/:id` - Get a specific post by ID.
- `PUT /posts/:id` - Update a specific post by ID.
- `DELETE /posts/:id` - Delete a specific post by ID.

Comments

- `POST /posts/:postId/comments` - Create a new comment for specific post.
- `GET /posts/:postId/comments` - Get a list of all comments for specific post.
- `GET /posts/:postId/comments/:commentId` - Get a specific comment by ID for specific post.
- `PUT /posts/:postId/comments/:commentId` - Update a specific comment by ID for specific post.
- `DELETE /posts/:postId/comments/:commentId` - Delete a specific comment by ID for specific post.

Reviews

- `POST /posts/:postId/reviews` - Create a new review for specific post.
- `GET /posts/:postId/reviews` - Get a list of all reviews for specific post.
- `GET /posts/:postId/reviews/:reviewId` - Get a specific review by ID for specific post.
- `PUT /posts/:postId/reviews/:reviewId` - Update a specific review by ID for specific post.
- `DELETE /posts/:postId/reviews/:reviewId` - Delete a specific review by ID for specific post.

## Authors
- [Khaled Gad](https://www.linkedin.com/in/khgad/)
- [Ahmed Nabil Sharawy](https://www.linkedin.com/in/ahmed-nabil-sharawy-149880104/)