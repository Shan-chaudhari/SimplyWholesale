import {Box, Grid} from "@mui/material";
import Product from "./Product";

function Products() {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;