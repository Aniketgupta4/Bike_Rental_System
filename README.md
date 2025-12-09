# 🏍️ Bike Rental System

![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-lightgreen?logo=node.js&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-red?logo=ejs&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-blue?logo=cloudinary&logoColor=white)
![Open Source](https://img.shields.io/badge/Open%20Source-💻-brightgreen)
![Made with ❤️ by Aniket](https://img.shields.io/badge/Made%20with-❤️-red)

> 🚲 A complete **Bike Rental Web Platform** where users can **browse bikes, check availability, book bikes, and manage rentals**, while **admins manage bikes, bookings, and dashboard** — built using **MongoDB, Express, Node.js, and EJS**.

---

## 🚀 Overview

This is a **full-stack bike rental system** designed to manage online bike bookings.

✔ Users can **signup/login**, search bikes, check availability, book bikes & manage rentals  
✔ Admins can **add/delete/update bikes**, upload bike images to Cloudinary, manage users & bookings  
✔ Includes **authentication, authorization, cloud storage, and booking handling**

---

## 🧰 Tech Stack

| Tech | Description |
|------|-------------|
| 🗄️ MongoDB | Stores users, bookings & bikes |
| ⚙️ Express.js | Backend server & routing |
| 🟢 Node.js | Runtime environment |
| 🖥️ EJS | Dynamic UI rendering |
| 🔐 bcrypt / JWT | Authentication & encryption |
| ☁️ Cloudinary | Bike image storage |
| 🎨 Tailwind | Frontend UI styling |

---

## ⚙️ Features

### 👤 User
- Signup & Login
- Browse all bikes
- View bike details with images
- Check availability
- Book a bike (date-wise booking)
- View booking history
- Cancel booking

### 🛡 Admin
- Add / Edit / Delete bikes
- Upload multiple bike images to Cloudinary
- Change bike availability (Available / Unavailable)
- View & manage users
- View & manage user bookings
- Dashboard with statistics

---

## 🔄 How It Works

1️⃣ **Authentication**
- Password hashing using bcrypt  
- Session/JWT based login  
- Role-based access (User/Admin)

2️⃣ **Bike Management**
- Admin adds bikes with details + images  
- Stored in MongoDB & Cloudinary

3️⃣ **Booking System**
- Users select dates and book available bikes  
- Availability auto-updates to prevent double booking

---

## 💻 Setup & Usage

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourusername/bike-rental-system.git
cd bike-rental-system
