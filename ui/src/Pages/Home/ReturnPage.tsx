import { Container, Grid, Typography, Button, Box, Avatar, Link } from "@mui/material";
import ReturnProducts from "../../components/Products/ReturnProducts";

function ReturnPage() {
    const handleSearch = () => {
        console.log("hi");
    };

    return (
        <Container maxWidth={"xl"}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <ReturnProducts />
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Box display="flex" flexDirection="column" alignItems="flex-end">
                        <Avatar
                            alt="Product Image"
                            src="/path/to/your/image.jpg"
                            sx={{ width: 56, height: 56, mb: 1 }}
                        />
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Your products
                        </Typography>
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                            <Link href="#" variant="body2" sx={{ mb: 1 }}>
                                Track package
                            </Link>
                            <Link href="#" variant="body2" sx={{ mb: 1 }}>
                                Return items
                            </Link>
                            <Link href="#" variant="body2" sx={{ mb: 1 }}>
                                Share gift receipt
                            </Link>
                            <Link href="#" variant="body2" sx={{ mb: 1 }}>
                                Get help
                            </Link>
                            <Link href="#" variant="body2" sx={{ mb: 1 }}>
                                Leave seller feedback
                            </Link>
                            <Link href="#" variant="body2" sx={{ mb: 1 }}>
                                Write a product review
                            </Link>
                        </Box>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            Proceed to Checkout
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>

    );
}

export default ReturnPage;