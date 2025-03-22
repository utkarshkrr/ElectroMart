const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/ordersDB"; // Change as per your setup
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Define Order Schema & Model
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  items: [
    {
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: Number
});

const Order = mongoose.model("Order", orderSchema);

// ✅ API: Place an Order
app.post("/orders", async (req, res) => {
  try {
    const { name, email, address, items } = req.body;
    if (!name || !email || !address || !items || items.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

    const newOrder = new Order({ name, email, address, items, totalPrice });
    await newOrder.save();

    res.status(201).json({ message: "✅ Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.status(500).json({ message: "Failed to place order", error: error.message });
  }
});

// ✅ API: Fetch All Orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("❌ Error fetching orders:", error);
    res.status(500).json({ message: "Failed to retrieve orders", error: error.message });
  }
});

// ✅ API: Delete All Orders
app.delete("/orders", async (req, res) => {
  try {
    const result = await Order.deleteMany({});
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "No orders found!" });
    }
    res.json({ message: "✅ All orders have been completed!" });
  } catch (error) {
    console.error("❌ Error completing orders:", error);
    res.status(500).json({ message: "Failed to delete orders" });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
