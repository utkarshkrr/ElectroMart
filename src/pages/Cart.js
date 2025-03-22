import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Button, ListItemAvatar, Avatar } from "@mui/material";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  // Calculate total price safely
  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price ? item.price * item.quantity : 0);
  }, 0);

  return (
    <Container sx={{ marginTop: 12 }}>
      <Typography variant="h3">Shopping Cart 🛒</Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                {/* Product Image */}
                <ListItemAvatar>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 64, height: 64, mx: 1 }}
                  />
                </ListItemAvatar>

                {/* Product Info */}
                <ListItemText 
                  primary={item.name} 
                  secondary={`Quantity: ${item.quantity} | Price: $${item.price ? (item.price * item.quantity).toFixed(2) : 0}`}
                />

                {/* Cart Actions with spacing */}
                <div>
                  <Button onClick={() => decreaseQuantity(item.id)} variant="outlined" size="small" sx={{ mx: 1 }}>
                    −
                  </Button>
                  <Button onClick={() => increaseQuantity(item.id)} variant="outlined" size="small" sx={{ mx: 1 }}>
                    +
                  </Button>
                  <Button onClick={() => removeFromCart(item.id)} variant="contained" color="error" size="small" sx={{ ml: 2 }}>
                    Remove
                  </Button>
                </div>
              </ListItem>
            ))}
          </List>

          {/* Total Price */}
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>

          {/* Checkout Button */}
          <Button 
            component={Link} 
            to="/checkout" 
            variant="contained" 
            color="primary" 
            sx={{
              marginTop: 2,
              transition: "transform 0.3s ease",
              '&:hover':{
                transform: "scale(1.025)"
              }
            }}
          >
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;
