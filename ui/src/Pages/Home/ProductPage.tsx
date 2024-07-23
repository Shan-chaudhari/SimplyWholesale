import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Paper, Divider, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function ProductPage() {
    const { productId } = useParams();

    // Fetch product details based on productId
    const product = {
        id: productId,
        name: "Lays chips",
        price: 100.00,
        description: "Wholesale 1"
    }; // Replace this with real data fetching logic

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ p: 2 }}>
                            {product.name}
                        </Typography>
                        <Typography variant="h6">
                            Price: ${product.price.toFixed(2)}
                        </Typography>
                        <Typography variant="body1">
                            {product.description}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Button component={RouterLink} to="/cart" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
                            Add to cart
                        </Button>
                        <Button component={RouterLink} to="/home" variant="outlined" color="primary" fullWidth>
                            Continue shopping
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductPage;
