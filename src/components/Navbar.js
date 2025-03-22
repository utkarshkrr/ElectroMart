import React from "react";
import { AppBar, Toolbar, Typography, Button, Badge, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart

function Navbar() {
  const { cart } = useCart(); // Get cart from context

  // Calculate total items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2A2E45", paddingX: 2 }}>
      <Toolbar>
        {/* Logo Image */}
        <Box
          component="img"
          src="/logoSecondary.png"
          alt="ElectroMart Logo"
          sx={{ height: 40, marginRight: 1 }}
        />

        <Typography 
          variant="h6" 
          sx={{ 
            flexGrow: 1, 
            color: "white",  
            fontWeight: "bold",  
          }}
        >
          ElectroMart
        </Typography>

        <Button 
          color="inherit" 
          component={Link} 
          to="/products" 
          sx={{ 
            color: "white",  
            fontSize: "18px",  
            padding: "8px 16px", 
            '&:hover': {
              backgroundColor: "#313D5A",  
            }
          }}
        >
          Home
        </Button>

        <Button 
          color="inherit" 
          component={Link} 
          to="/cart" 
          sx={{ 
            color: "white", 
            fontSize: "18px",
            padding: "8px 16px",
            '&:hover': {
              backgroundColor: "#313D5A", 
            }
          }}
        >
          Cart 
          {totalItems > 0 && (
            <Badge 
              badgeContent={totalItems} 
              color="secondary" 
              sx={{ 
                marginLeft: 1, 
                '& .MuiBadge-dot': { backgroundColor: '#9EA3B0' }  
              }}
            >
              🛒
            </Badge>
          )}
        </Button>

        {/* Logout Button */}
        <Button 
          color="inherit" 
          component={Link} 
          to="/"  // Redirects to Login Page
          sx={{ 
            color: "white", 
            fontSize: "18px",
            padding: "8px 16px",
            '&:hover': {
              backgroundColor: "#313D5A", 
            }
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
