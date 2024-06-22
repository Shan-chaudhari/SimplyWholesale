import {Card, CardContent, CardMedia, Typography} from "@mui/material";

function Product() {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/140" // Placeholder image
        alt="Product Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Description of product that is being sold
        </Typography>
        <Typography variant="h6">$100.00</Typography>
        <Typography variant="caption" color="textSecondary">
          Wholesale 1
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Product;