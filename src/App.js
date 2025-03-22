import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home"; // Login page
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage"; // Product listing page
import Product from "./pages/Product"; // Individual product page
import Admin from "./pages/Admin"; // Admin panel
import Orders from "./pages/Orders"; // Import Orders Panel
import AdminPanel from "./pages/AdminPanel"; // Import AdminPanel
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CartProvider>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if the user is not on the login, admin, orders, or admin-panel page */}
      {location.pathname !== "/" && location.pathname !== "/inventory" && location.pathname !== "/orders" && location.pathname !== "/admin-panel" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Login page */}
        <Route path="/products" element={<ProductPage />} /> {/* Products page */}
        <Route path="/product/:id" element={<Product />} /> {/* Single product page */}
        <Route path="/cart" element={<Cart />} /> {/* Cart page */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
        <Route path="/inventory" element={<Admin />} /> {/* Inventory panel */}
        <Route path="/orders" element={<Orders />} /> {/* Orders panel */}
        <Route path="/admin-panel" element={<AdminPanel />} /> {/* Admin Panel Page */}
      </Routes>
    </>
  );
}

export default App;
