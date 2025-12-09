🚴‍♂️ Bike Rental System — Full-Stack Web Application

A complete online bike renting platform built using Node.js + Express + MongoDB + EJS where users can browse and rent bikes, and admins can manage inventory and bookings with a clean dashboard.

📌 Table of Contents

📝 Overview

✨ Features

📸 Screenshots

🛠 Tech Stack

📂 Folder Structure

⚙️ Environment Variables

🚀 Installation & Setup

🔐 Authentication

💡 Future Updates

🧑‍💻 Developer

📝 Overview

The Bike Rental System simplifies renting bikes online.
Users can view bikes → book → track booking status, while Admins can add / edit / delete bikes & approve bookings.

✨ Key Features
👤 User Panel

✔ Register / Login / Logout
✔ Browse available bikes
✔ View bike details
✔ Book a bike
✔ View booking history and status
✔ Edit personal profile

🛡 Admin Panel

✔ Secure Admin authentication
✔ Add / edit / delete bikes
✔ Cloudinary image upload
✔ Manage booking requests — approve / reject
✔ Manage bike availability

📸 Screenshots

(Add your own later)

Page	Screenshot
Home Page	

Bike List	

Booking Page	

Admin Dashboard	
🛠 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript, EJS
Backend	Node.js, Express.js
Auth	express-session + bcrypt
Database	MongoDB + Mongoose
Storage	Cloudinary + Multer
Deployment	Render / Railway
📂 Folder Structure
/config
/controllers
/models
/routes
/views
/public
  /css
/server.js
.env
package.json

⚙️ Environment Variables

Create a .env file in root:

MONGO_URL=your_mongodb_connection_string
PORT=5000
SESSION_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=xxxxxxx
CLOUDINARY_API_KEY=xxxxxxx
CLOUDINARY_API_SECRET=xxxxxxx

🚀 Installation & Setup
# Clone repo
git clone https://github.com/your-username/your-repo-name.git

# Go inside project
cd bike-rental-system

# Install dependencies
npm install

# Start server
npm start


Server URL:
👉 http://localhost:5000

🔐 Authentication

Passwords hashed using bcrypt

Sessions stored securely using express-session

Role-based access: user & admin

💡 Future Roadmap

🔹 Online payment integration
🔹 Coupon / offer system
🔹 Email booking notifications
🔹 Android app version

🌟 Support

If you like this project, please ⭐ the repository — it motivates me 😄
Pull requests and suggestions are welcome!

🧑‍💻 Developer

Aniket Gupta
Full-Stack Developer | MERN | Web Apps | UI Designer
