import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function ProductPage() {
  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 12, textAlign: "center" }}>
        Featured Products
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductPage;
