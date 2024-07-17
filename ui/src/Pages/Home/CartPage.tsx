import React, { useEffect } from "react";
import { Container, Grid, Typography, Button, Box, Paper, Divider } from "@mui/material";
import CartProducts from "../../components/Products/CartProducts";
import {Link as RouterLink} from "react-router-dom";

function CartPage() {
  const subtotal = 5000;
  const discount = 20;
  const delivery = 20;
  const tax = 20;
  const total = subtotal - discount + delivery + tax;



  return (
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ p: 2 }}>
                Cart
              </Typography>
              <CartProducts />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Delivery
              </Typography>
              <Typography variant="body1">Standard: $200</Typography>
              <Typography variant="body1">Express: $400</Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery Date: July 20, 2024
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Subtotal: ${subtotal.toFixed(2)}
              </Typography>
              <Typography variant="body1">Discount: -${discount.toFixed(2)}</Typography>
              <Typography variant="body1">Delivery: ${delivery.toFixed(2)}</Typography>
              <Typography variant="body1">Tax: ${tax.toFixed(2)}</Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h5" gutterBottom>
                Total: ${total.toFixed(2)}
              </Typography>
              <Button component ={RouterLink} to = "/checkout" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                Proceed to checkout
              </Button>
              <Button component={RouterLink} to="/home"  variant="outlined" color="primary" fullWidth>
                Continue shopping
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
  );
}

export default CartPage;
