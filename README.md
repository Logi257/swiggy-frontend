🍔 Swiggy Clone – Full Stack Food Ordering App

A full-stack Swiggy-like food ordering application built with React + Express, using live Swiggy APIs via a custom backend, featuring dynamic routing, cart management, and production-ready deployment.

This project follows real-world architecture with frontend and backend separated, avoiding CORS issues and unsafe direct API calls.

🚀 Live Demo

Frontend (Vercel): https://swiggy-frontend-tau-wheat.vercel.app/

Backend (Render): https://swiggy-backend-zvfu.onrender.com

🏗️ Architecture Overview
Frontend (React + Vite)
|
| API Calls
↓
Backend (Node.js + Express)
|
| Fetches Live Swiggy APIs
↓
Swiggy Public APIs

✔ No CORS plugin
✔ Secure API abstraction
✔ Production-ready structure

✨ Features
🏠 Home Page

Displays top restaurant chains

Dynamic restaurant listing

Shimmer UI while loading

🍽️ Restaurant Menu Page

Dynamic route using restaurant ID

Accordion-based menu categories

Veg / Non-Veg indicators

Real-time menu data

🛒 Cart Functionality

Add items to cart

Increase quantity for same item

Auto price calculation

Clear cart option

Cart count badge in header

⚡ Performance & UX

Custom hooks for data fetching

Context API for cart state

Lazy loading

Clean Tailwind UI

🧠 Tech Stack
Frontend

React (Vite)

React Router DOM

Context API

Custom Hooks

Tailwind CSS

React Icons

Backend

Node.js

Express.js

CORS Middleware

REST API Architecture

Deployment

Frontend: Vercel

Backend: Render

Version Control: Git & GitHub

📂 Folder Structure
Frontend
src/
│── components/
│── context/
│── hooks/
│── utils/
│── pages/
│── App.jsx
│── main.jsx

Backend
backend/
│── routes/
│── controllers/
│── index.js
│── package.json

🔌 API Endpoints
Backend APIs
Method Endpoint Description
GET /api/restaurants Fetch restaurant list
GET /api/menu/:id Fetch restaurant menu
🛠️ Environment Variables
Frontend (.env)
VITE_BACKEND_URL=https://swiggy-backend-zvfu.onrender.com/api

🧪 Local Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/swiggy-clone.git

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

3️⃣ Backend Setup
cd backend
npm install
node index.js

Backend runs on:

http://localhost:5000

🌍 Deployment Strategy
Backend

Hosted on Render

Acts as a proxy to Swiggy APIs

Prevents CORS issues in production

Frontend

Hosted on Vercel

Environment variables used for backend URL

Auto redeploy on Git push

🧩 Key Learnings

Building scalable frontend architecture

Creating custom hooks for data logic

Managing global state with Context API

Avoiding CORS issues using backend proxy

Deploying full-stack applications

📌 Future Enhancements

User authentication

Backend-based cart persistence

Payment gateway integration

Restaurant search & filters

Order history

👨‍💻 Author

Logesh
Frontend & Full-Stack Developer

⭐ If you like this project

Give the repo a ⭐ and feel free to fork!
