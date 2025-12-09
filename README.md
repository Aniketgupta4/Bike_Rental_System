🚴‍♂️ Bike Rental System — Full-Stack Web Application

A powerful and user-friendly platform to browse, rent & manage bikes online, built with Node.js, Express, MongoDB & EJS.
Designed with role-based authentication, Cloudinary image upload, and admin booking approval system.

📌 Table of Contents

1️⃣ Overview

2️⃣ Features

3️⃣ Screenshots

4️⃣ Tech Stack

5️⃣ Folder Structure

6️⃣ Environment Variables

7️⃣ Installation & Setup

8️⃣ Authentication Flow

9️⃣ Future Improvements

🔟 Author

📝 Overview

The Bike Rental System provides a seamless experience for users to rent bikes and for admins to manage fleet inventory & bookings.
The application includes real-time updates, secure login, and a clean admin dashboard for easy management.

✨ Features
👤 User Panel

✔ Register / Login / Logout
✔ View available bikes
✔ Book a bike
✔ Track booking status
✔ Manage personal profile

🛡 Admin Panel

✔ Add / Edit / Delete bikes
✔ Upload bike images using Cloudinary + Multer
✔ View and manage booking requests
✔ Approve / reject rentals
✔ Toggle bike availability

📸 Screenshots
Page	Preview
🔹 Home Page	(Add your screenshot here)
🔹 Bike Listing	(Add screenshot)
🔹 Booking Page	(Add screenshot)
🔹 Admin Dashboard	(Add screenshot)

💡 Tip: Add real screenshots later for a professional touch.

🛠 Tech Stack
Category	Technology
Frontend	HTML • CSS • JavaScript • EJS
Backend	Node.js • Express.js
Database	MongoDB • Mongoose
Auth	Sessions + bcrypt
File Upload	Cloudinary + Multer
Deployment	Render / Railway
📂 Folder Structure
📦 Bike Rental System
 ┣ 📁 config
 ┣ 📁 controllers
 ┣ 📁 models
 ┣ 📁 routes
 ┣ 📁 views
 ┣ 📁 public
 ┃ ┗ 📁 css
 ┣ server.js
 ┣ .env
 ┗ package.json

🔐 Environment Variables

Create a .env file in the project root and add:

MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret
PORT=5000

CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

🚀 Installation & Setup
# Clone the repository
git clone https://github.com/your-username/your-repo.git

# Go inside the project
cd bike-rental-system

# Install packages
npm install

# Start server
npm start


Server running at 👉 http://localhost:5000

🔄 Authentication Flow
Role	Redirect After Login
User	/user/dashboard
Admin	/admin/dashboard

Passwords are encrypted using bcrypt, and sessions are stored securely using express-session.

🚧 Future Improvements

🔹 Online payment gateway (Razorpay / Stripe)
🔹 Coupons / Discounts for users
🔹 Admin analytics dashboard
🔹 Email / SMS booking notifications
🔹 Android app version

🧑‍💻 Author

👤 Aniket Gupta
💼 Full-Stack Developer | Passionate about Web Applications & UI/UX
📧 Email: (add here)
🔗 Portfolio: (add if available)
