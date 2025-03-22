import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);  // Runs when `id` changes

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id);

  return (
    <Container sx={{ marginTop: 12 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>${product.price}</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>{product.details}</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ 
              marginTop: 3,
              transition: "transform 0.3s ease",
              '&:hover':{
                backgroundColor:"#313D5A",
                transform: "scale(1.05)"
              }
             }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {relatedProducts.length > 0 && (
        <>
          <Typography variant="h4" sx={{ marginTop: 6, textAlign: "center" }}>
            You may also like
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
            {relatedProducts.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{
                  maxWidth: 250, 
                  textAlign: "center",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  '&:hover':{
                    transform: "scale(1.01)",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)"
                  }
                }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">${item.price}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: 1,
                        transition: "transform 0.3s ease",
                        '&:hover':{
                          transform: "scale(1.025)"
                        }
                      }}
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Product;
