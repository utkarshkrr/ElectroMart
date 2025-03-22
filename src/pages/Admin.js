import React, { useState } from "react";
import productsData from "../data/products";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Box, TextField } from "@mui/material";
import logo from '../data/images/logoPrimary.png';


function Admin() {
  const [products, setProducts] = useState(productsData);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (userId === "admin" && password === "admin1") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleIncrease = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: (product.stock || 0) + 1 } : product
      )
    );
  };

  const handleDecrease = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && (product.stock || 0) > 0
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    );
  };

  const handleAddProduct = () => {
    alert("Feature to add a new product coming soon!");
  };

  const handleAddCategory = () => {
    alert("Feature to add a new category coming soon!");
  };

  if (!isAuthenticated) {
    return (
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Logo and Website Name */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <img 
            src={logo} 
            alt="Logo" 
            style={{ height: 150, filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3))" }} 
          />
          <Typography 
            variant="h2" 
            sx={{ marginTop: 2, fontWeight: 'bold', color: '#2A2E45' }}
          >
            ElectroMart
          </Typography>
        </Box>

        {/* Login Form */}
        <Box
          sx={{
            p: 3,
            bgcolor: "white",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            minWidth: "450px"
          }}
          >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Admin - Inventory Login
          </Typography>
          <TextField
            label="UserID"
            variant="outlined"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", display: "flex", flexDirection: "column", alignItems: "center", p: 3 }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "900px",
          bgcolor: "white",
          boxShadow: 2,
          borderRadius: 2,
          p: 3,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/xicon.png" alt="Website Logo" style={{ height: "40px", width: "40px", objectFit: "contain", marginRight: "8px" }} />
          <Typography variant="h4" sx={{ fontWeight: "600", color: "#2a2e45" }}>
            ElectroMart
          </Typography>
        </Box>
        <Typography sx={{ color: "gray" }}>Manage and track your product inventory</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          List New Product
        </Button>
        <Button variant="contained" color="secondary" onClick={handleAddCategory}>
          Add New Category
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ width: "100%", maxWidth: "900px", boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#2E3A59" }}>
              <TableCell sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>Product</TableCell>
              <TableCell sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>Stock</TableCell>
              <TableCell sx={{ color: "white", fontSize: "16px", fontWeight: "bold", textAlign: "center" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{product.name}</TableCell>
                <TableCell sx={{ color: "green", fontWeight: "bold" }}>${product.price}</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>{product.stock || 0}</TableCell>
                <TableCell sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                  <Button variant="contained" color="success" size="small" onClick={() => handleIncrease(product.id)}>
                    <FaPlus />
                  </Button>
                  <Button variant="contained" color="warning" size="small" onClick={() => handleDecrease(product.id)}>
                    <FaMinus />
                  </Button>
                  <Button variant="contained" color="error" size="small" onClick={() => handleDelete(product.id)}>
                    <FaTrash />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Admin;
