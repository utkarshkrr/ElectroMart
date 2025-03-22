import React, { useState } from "react";
import { 
  Container, Typography, List, ListItem, ListItemText, 
  TextField, Button, ListItemAvatar, Avatar, CircularProgress, 
  Radio, RadioGroup, FormControlLabel, FormLabel, 
  Backdrop, Fade 
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "", paymentMethod: "COD" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!form.name || !form.email || !form.address || cart.length === 0) {
      setError("All fields are required, and the cart cannot be empty.");
      setLoading(false);
      return;
    }

    const orderId = uuidv4();

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, ...form, items: cart }),
      });

      if (!response.ok) throw new Error("Failed to place order");

      setOrderPlaced(true);
      setTimeout(() => {
        clearCart();
        navigate("/products");
      }, 3000);
    } catch (err) {
      setError(err.message || "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price ? item.price * item.quantity : 0), 0);

  return (
    <>
      {/* Full-screen order success message */}
      <Backdrop open={orderPlaced} sx={{ zIndex: 9999, color: "#000", backgroundColor: "rgba(255, 255, 255)" }}>
        <Fade in={orderPlaced}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "bold", animation: "fade-in 1s ease-in-out" }}>
            Order Successfully Placed! ✅ 
          </Typography>
        </Fade>
      </Backdrop>

      <Container sx={{ textAlign: "center", marginTop: 12 }}>
        <Typography variant="h3">Checkout</Typography>

        {cart.length === 0 ? (
          <Typography variant="h6" sx={{ marginTop: 2 }}>Your cart is empty</Typography>
        ) : (
          <>
            <Typography variant="h6" sx={{ marginTop: 2 }}>Order Summary:</Typography>
            <List>
              {cart.map((item) => (
                <ListItem key={item.id} sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemAvatar>
                    <Avatar src={item.image} alt={item.name} sx={{ width: 64, height: 64, mx: 1 }} />
                  </ListItemAvatar>
                  <ListItemText 
                    primary={item.name} 
                    secondary={`Quantity: ${item.quantity} | Price: $${(item.price * item.quantity).toFixed(2)}`} 
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h5" sx={{ marginTop: 2 }}>Total: ${totalPrice.toFixed(2)}</Typography>

            {/* Payment Method Selection */}
            <FormLabel sx={{ marginTop: 2, display: "block" }}>Payment Method</FormLabel>
            <RadioGroup 
              name="paymentMethod" value={form.paymentMethod} onChange={handleChange} 
              sx={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: 2 }}
            >
              <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery (COD)" />
              <FormControlLabel value="Online" control={<Radio />} label="Online Payment" />
            </RadioGroup>

            {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}

            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
              <TextField 
                label="Name" name="name" value={form.name} onChange={handleChange} 
                fullWidth required sx={{ marginBottom: 2 }} 
              />
              <TextField 
                label="Email" name="email" type="email" value={form.email} onChange={handleChange} 
                fullWidth required sx={{ marginBottom: 2 }} 
              />
              <TextField 
                label="Address" name="address" value={form.address} onChange={handleChange} 
                fullWidth required multiline rows={3} sx={{ marginBottom: 2 }} 
              />

              <Button type="submit"
                sx={{
                  marginTop: 2,
                  transition: "transform 0.3s ease",
                  '&:hover': { transform: "scale(1.025)" }
                }}
                variant="contained" color="primary" disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Place Order"}
              </Button>
            </form>
          </>
        )}
      </Container>
    </>
  );
}

export default Checkout;
