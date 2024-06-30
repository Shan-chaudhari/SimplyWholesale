import {Card, CardContent, CardMedia, Typography} from "@mui/material";

function ReturnProduct() {
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
                    Your orders
                </Typography>
                <Typography variant="h6">$100.00</Typography>
                <Typography variant="caption" color="textSecondary">
                    Wholesale 1
                </Typography>
            </CardContent>
        </Card>
    );
}
export default ReturnProduct;