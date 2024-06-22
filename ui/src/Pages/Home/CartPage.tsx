import { Container, Grid, Typography, Button, Box } from "@mui/material";
import CartProducts from "../../components/Products/CartProducts";

function CartPage() {
  const handleSearch = () => {
    console.log("hi");
  };

  const subtotal = 100;
  const delivery = 10;
  const total = subtotal + delivery;

  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <CartProducts />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <Box display="flex" flexDirection="column" alignItems="flex-end">
            <Typography variant="h6" sx={{ mt: 2 }}>
              Subtotal: ${subtotal.toFixed(2)}
            </Typography>
            <Typography variant="h6">
              Delivery: ${delivery.toFixed(2)}
            </Typography>
            <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CartPage;
