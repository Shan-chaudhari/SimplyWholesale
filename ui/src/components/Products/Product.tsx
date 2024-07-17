import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Product() {
  return (
    <Card component={Link} to="/productpage" color="inherit">
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/140"
        alt="Product Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Lays chips
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
