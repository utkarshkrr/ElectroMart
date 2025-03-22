import React from "react";
import { Container, TextField, Button, Typography, Box, Link } from "@mui/material";
import logo from '../data/images/logoPrimary.png';

const AdminPanel = () => {
  return (
    <div style={containerStyle}>
    {/* Logo and Website Name Header */}
    <Box sx={{ textAlign: "center", marginBottom: 2 }}>
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
    <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 4, fontWeight: "bold" }}>
      Admin Panel
    </Typography>
      <button style={buttonStyle} onClick={() => (window.location.href = "/orders")}>
        Manage Orders
      </button>
      <button style={buttonStyle} onClick={() => (window.location.href = "/inventory")}>
        Manage Inventory
      </button>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh", // Center vertically
  textAlign: "center",
  fontFamily: "Arial, sans-serif", // Matching Home.js
};

const headingStyle = {
  fontFamily: "Arial, sans-serif", // Matching Home.js
  fontWeight: "bold",
  color: "#2A2E45", // Matching Home.js title color
};

const buttonStyle = {
  display: "block",
  width: "200px",
  margin: "10px 0",
  padding: "10px",
  backgroundColor: "#007BFF",
  color: "white",
  textDecoration: "none",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "transform 0.3s ease",
  '&:hover': {
    backgroundColor: "#313D5A",
    transform: "scale(1.05)",
  },
};

export default AdminPanel;
