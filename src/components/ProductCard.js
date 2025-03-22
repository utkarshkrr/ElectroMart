import React from "react";
import { Card, CardContent, Typography, Button, CardActions, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <Card sx={{ 
      maxWidth: 300, 
      marginBottom: 2,
      padding: 1,
      borderRadius: 3,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      '&:hover':{
        transform: "scale(1.01)",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)"
      }
    }}>
      {/* Display product image */}
      <CardMedia
        component="img"
        height="300"
        image={product.image}  // Ensure your product object has an image URL
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">Price: ${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/product/${product.id}`} variant="outlined" sx={{
          mx: 1,
        }}>
          View Details
        </Button>
        <Button variant="contained" sx={{
          backgroundColor: "#2A2E45",
          '&:hover':{
            backgroundColor: "#313D5A"
          }
        }} onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
