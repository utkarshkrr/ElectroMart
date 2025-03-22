# ElectroMart - MERN Stack E-commerce Website

ElectroMart is a full-stack e-commerce website for electronics shopping, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to browse products, add them to the cart, place orders, and manage orders efficiently.

## 🚀 Technologies Used

### Frontend (React.js)
- React.js (Component-based UI)
- React Router (Client-side navigation)
- Redux Toolkit (State management)
- Tailwind CSS (Styling)
- Axios (API calls)
- Material UI (UI components)

### Backend (Node.js & Express.js)
- Node.js (Runtime)
- Express.js (API framework)
- Mongoose (MongoDB ODM)
- dotenv (Environment variables management)

### Database
- MongoDB (MongoDB Community Server)
- Mongoose (Schema-based data handling)

### Other Tools
- Postman (API Testing)
- Git & GitHub (Version control)
- MongoDB Compass (GUI for MongoDB)

## 🛠 Features Implemented

### 🛍 Products Management
- Product Listing (Users can view available electronics)
- Product Details Page (Detailed description, images, price)
- Products suggestions from same category

### 🛒 Shopping Cart
- Add to Cart (Users can add/remove products)
- Cart Total Calculation (Subtotal & taxes included)
- Update Cart Items (Modify quantity/remove items)

### 🔧 Admin Inventory Management
- Admin panel with inventory management
- Add/Delete products functionality

### 📦 Order Management
- Order Placement (Users can place orders)

### 🔧 Admin Order Management
- View All Orders
- Mark orders as complete
- Delete Orders (If necessary)

## 📌 Installation & Setup

### 1. Install Node.js
Download and install Node.js from [Node.js official website](https://nodejs.org/).

### 2. Install MongoDB Community Server
Download and install MongoDB Community Server from [MongoDB official website](https://www.mongodb.com/try/download/community).

### 3. Clone the Repository
```sh
git clone https://github.com/utkarshkrr/ElectroMart.git
cd ElectroMart
```

### 4. Install Backend Dependencies
```sh
cd backend
npm install
```

### 5. Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

### 6. Install Tailwind CSS
Inside the frontend folder:
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 7. Install Axios
```sh
npm install axios
```

### 8. Install Mongoose (for MongoDB Connection)
```sh
npm install mongoose
```

### 9. Install Postman (For API Testing)
Download and install [Postman](https://www.postman.com/downloads/).

### 10. Start the Backend Server
```sh
cd server
npm start
```

### 11. Start the Frontend Server
```sh
npm start
```

## 🎯 Current Status
✅ Core e-commerce functionality implemented: product management, cart system, and orders.
✅ Admin panel functional with order viewing and inventory management.
✅ Frontend and backend deployed locally.

## 📜 License
This project is licensed under the MIT License.
