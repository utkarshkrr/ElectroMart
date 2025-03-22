const API_BASE_URL = "http://localhost:5000"; // Backend URL

export const fetchCartItems = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/cart`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

export const addToCart = async (item) => {
  try {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
