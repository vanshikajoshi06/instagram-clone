# 📸 Instagram Clone (MERN Stack)

This project is a **mini Instagram clone** built using the **MERN stack**.
It allows users to **register, log in, create posts, and view a feed**, simulating the core functionality of Instagram.

---

## 🚀 Project Overview

The application is divided into two main parts:

* **Frontend**: Built using **Next.js (React)** and **Tailwind CSS**
* **Backend**: Built using **Node.js, Express.js**, and **MongoDB**

Users authenticate using **JWT (JSON Web Tokens)**.
After login, users can create image posts and view posts in their feed.

---

## 🛠️ Tech Stack

### Frontend

* Next.js (React)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt.js (password hashing)

---

## ✨ Features Implemented

* ✅ User Registration (Signup)
* ✅ User Login with JWT authentication
* ✅ Secure password hashing using bcrypt
* ✅ Create a post (image URL + caption)
* ✅ View feed with all posts
* ✅ Like a post
* ✅ Protected routes using middleware
* ✅ Responsive UI with dark theme styling

---

## ⚙️ How the Project Works

1. **User Authentication**

   * User signs up with username, email, and password
   * Password is encrypted using bcrypt
   * On login, a JWT token is generated and sent to the frontend

2. **Authorization**

   * JWT token is stored in `localStorage`
   * Token is sent in request headers for protected routes
   * Backend middleware verifies the token

3. **Posts**

   * Authenticated users can create posts using an image URL
   * Posts are stored in MongoDB with user reference
   * Feed fetches posts from the database and displays them

---

## 📁 Project Structure

```
instagram-clone/
├── instagram-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── instagram-frontend/
│   ├── app/
│   ├── src/
│   ├── lib/
│   └── package.json
│
└── README.md
```

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup

```bash
cd instagram-backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend server:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd instagram-frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🧪 Sample Image URLs for Posts

You can use:

```
https://picsum.photos/600/600
```

---

## 🔒 Security Notes

* Passwords are hashed before storing in the database
* JWT is used for secure authentication
* Protected routes require a valid token

---

## 📌 Future Enhancements

* User profile pages
* Follow / unfollow functionality
* Comments on posts
* Image upload using Cloudinary
* Notifications

---

## 👩‍💻 Author

**Vanshika Joshi**
B.Tech Student | Full Stack Developer

---

