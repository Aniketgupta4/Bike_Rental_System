🏍️ Bike Rental System














🚴‍♂️ A complete platform where users can rent bikes online and admins can manage bike listings & booking requests. Built using MongoDB, Express, Node.js, and EJS.

🚀 Overview

This is a full-stack bike rental web application with the following core features:

👤 User authentication (signup/login)

🏍️ Users can browse available bikes

📝 Users can request bike booking for a date and duration

🔄 Admin can approve / reject booking requests

🖼 Admin can add, edit & delete bikes with images

⚡ Responsive UI using EJS

This project is ideal for learning authentication, file upload, session management, dynamic rendering, and CRUD operations using Node.js & MongoDB.

🧰 Tech Stack
Tech	Description
🗄️ MongoDB	Stores users, bikes & bookings
⚙️ Express.js	Backend server & API routing
🟢 Node.js	Runtime environment
🖥️ EJS	Dynamic HTML templating
🔐 bcrypt & express-session	Authentication & session security
☁ Cloudinary + Multer	Image upload & storage
⚙️ Features
👤 User Features

🔐 Signup / Login / Logout

🏍️ View all available bikes

📅 Book a bike for selected days

📍 Track booking status (Pending / Approved / Rejected)

👤 Update profile info

🛡 Admin Features

➕ Add new bikes

✏️ Edit bikes (price, name, description, image & availability)

🗑 Delete bikes

🖼 Upload images using Cloudinary

✔ Approve / ❌ Reject booking requests

🟢 Mark bike availability ON/OFF anytime

🔄 How It Works

User Authentication

bcrypt hashes password

express-session creates secure session

Bike Management

Admin adds bikes with an image, price & description

Cloudinary stores image securely

Booking System

User selects bike & dates

Request stored in DB → Admin decision

Status shown to user dynamically

💻 Setup & Usage
1️⃣ Clone the repository
git clone https://github.com/yourusername/bike-rental-system.git
cd bike-rental-system

2️⃣ Install dependencies
npm install

3️⃣ Setup .env file
MONGO_URL=your_mongodb_url
SESSION_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
PORT=5000

4️⃣ Run the project
npm start


App will run on ➤ http://localhost:5000

📌 Folder Structure
📦 Bike Rental System
 ┣ 📁 config
 ┣ 📁 controllers
 ┣ 📁 models
 ┣ 📁 routes
 ┣ 📁 views
 ┣ 📁 public/css
 ┣ server.js
 ┗ package.json

🔮 Future Enhancements

🔜 Online payment integration (Razorpay)

🔜 Push notifications & email confirmations

🔜 Google OAuth login

🔜 Offers / coupons

👨‍💻 Author

Developed with ❤️ by Aniket Gupta
📩 Feel free to contribute or suggest improvements!

⭐ Support

If you like this project, kindly star ⭐ the repository — it motivates further development 😄
