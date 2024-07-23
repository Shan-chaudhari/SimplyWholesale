import { Box } from "@mui/material";
import Product from "./Product";

function CartProducts() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: 2 }}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Product />
        </Box>
      ))}
    </Box>
  );
}

export default CartProducts;
