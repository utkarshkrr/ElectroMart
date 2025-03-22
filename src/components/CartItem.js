import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body1">Price: {item.price}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
        <Button onClick={() => increaseQuantity(item.id)}>+</Button>
        <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
        <Button onClick={() => removeItem(item.id)} color="error">
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

export default CartItem;
