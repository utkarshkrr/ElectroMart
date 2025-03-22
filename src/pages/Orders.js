import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import logo from '../data/images/logoPrimary.png';

const Orders = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const authenticateUser = () => {
    if (username === "admin" && password === "admin1") {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      setErrorMessage("Invalid credentials. Try again.");
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const clearOrders = async () => {
    if (window.confirm("Are you sure you want to mark all orders as complete?")) {
      try {
        const response = await fetch("http://localhost:5000/orders", { method: "DELETE" });
        const data = await response.json();
        alert(data.message);
        fetchOrders();
      } catch (error) {
        console.error("Error deleting orders:", error);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      authenticateUser();
    }
  };

  return (
    <div>
      {/* Login Section - Centered */}
      {!isAuthenticated ? (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Card sx={{ maxWidth: 450, padding: 3, borderRadius: 2, textAlign: "center", boxShadow: "none", border: "none" }}>
            <CardContent>
              {/* Logo and Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "45px" }}>
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
              </div>

              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Admin - Orders Panel Login
              </Typography>
              <TextField
                fullWidth
                label="User ID"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {errorMessage && <Typography color="error">{errorMessage}</Typography>}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={authenticateUser}
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Order Dashboard (Unchanged)
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: 50, filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3))" }} 
            />
            <Typography 
              variant="h5" 
              sx={{ marginTop: 2, fontWeight: 'bold', color: '#2A2E45' }}
            >
              ElectroMart
            </Typography>
          </div>
          
          <h2 style={{ fontFamily:"Arial, sans-serif", textAlign:"center" }}>Order List</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", border: "1px solid #ddd" }}>
            <thead>
              <tr style={{ backgroundColor: "#2A2E45", color: "white", textAlign: "left" }}>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Order ID</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Name</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Email</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Address</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Item</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Quantity</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Price</th>
                <th style={{ padding: "12px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.items.map((item, index) => (
                  <tr key={`${order._id}-${index}`} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff", borderBottom: "1px solid #ddd" }}>
                    {index === 0 && <td rowSpan={order.items.length} style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>{order._id}</td>}
                    {index === 0 && <td rowSpan={order.items.length} style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>{order.name}</td>}
                    {index === 0 && <td rowSpan={order.items.length} style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>{order.email}</td>}
                    {index === 0 && <td rowSpan={order.items.length} style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>{order.address}</td>}
                    <td style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>{item.name}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>{item.quantity}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>${item.price}</td>
                    {index === 0 && <td rowSpan={order.items.length} style={{ padding: "10px", border: "1px solid #ddd", fontFamily: "Arial, sans-serif" }}>${order.totalPrice}</td>}
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div style={{ marginTop: "35px",display:"flex", alignItems:"center", justifyContent:"center" }}>
            <button onClick={() => window.location.href = "http://localhost:3000/admin-panel"} style={{ marginRight: "20px", padding: "10px 20px", backgroundColor: "#2394fc", color: "white", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Go Back
            </button>
            <button onClick={clearOrders} style={{ marginRight: "20px", padding: "10px 20px", backgroundColor: "#0394fc", color: "white", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Mark as Complete
            </button>
            <button 
              onClick={() => window.location.reload()} 
              style={{ padding: "10px 20px", backgroundColor: "#0394fc", color: "white", fontSize: "16px", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Refresh
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
