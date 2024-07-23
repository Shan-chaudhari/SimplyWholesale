import React, { useState } from "react";
import { Container, Grid, Typography, Button, Paper, Divider, FormControl, InputLabel, Select, MenuItem, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function CheckoutPage() {
    const subtotal = 5000; // Replace with actual subtotal calculation
    const delivery = 20; // Replace with actual delivery fee calculation
    const tax = 20; // Replace with actual tax calculation
    const total = subtotal + delivery + tax; // Total calculation

    const [paymentMethod, setPaymentMethod] = useState("paypal"); // Default to PayPal
    const [paypalNumber, setPaypalNumber] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePaypalNumberChange = (event) => {
        setPaypalNumber(event.target.value);
    };

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleCardNameChange = (event) => {
        setCardName(event.target.value);
    };

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission based on payment method (PayPal or Bank Card)
        if (paymentMethod === "paypal") {
            console.log("Submit PayPal info:", paypalNumber);
            // Implement PayPal submission logic
        } else if (paymentMethod === "card") {
            console.log("Submit Card info:", cardNumber, cardName, expiryDate, cvv);
            // Implement Bank Card submission logic
        }
        setDialogOpen(true); // Open confirmation dialog
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        // Reset any form fields or state needed
    };

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Checkout
                        </Typography>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="payment-method-label">Payment Method</InputLabel>
                            <Select
                                labelId="payment-method-label"
                                id="payment-method"
                                value={paymentMethod}
                                onChange={handlePaymentMethodChange}
                                label="Payment Method"
                            >
                                <MenuItem value="paypal">PayPal</MenuItem>
                                <MenuItem value="card">Bank Card</MenuItem>
                            </Select>
                        </FormControl>
                        {paymentMethod === "paypal" && (
                            <TextField
                                label="PayPal Number"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={paypalNumber}
                                onChange={handlePaypalNumberChange}
                            />
                        )}
                        {paymentMethod === "card" && (
                            <>
                                <TextField
                                    label="Card Number"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                                <TextField
                                    label="Cardholder Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={cardName}
                                    onChange={handleCardNameChange}
                                />
                                <TextField
                                    label="Expiry Date"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                />
                                <TextField
                                    label="CVV"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                />
                            </>
                        )}
                        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                            <DialogTitle>Order Placed!</DialogTitle>
                            <DialogContent>
                                <Typography variant="body1">Your order has been successfully placed.</Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button component={RouterLink} to="/h" color="primary">
                                    Continue Shopping
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Order Summary
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" gutterBottom>
                            Subtotal: ${subtotal.toFixed(2)}
                        </Typography>
                        <Typography variant="body1">Delivery: ${delivery.toFixed(2)}</Typography>
                        <Typography variant="body1">Tax: ${tax.toFixed(2)}</Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Total: ${total.toFixed(2)}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSubmit}
                            sx={{ mt: 2 }}
                        >
                            Place Order
                        </Button>
                        <Button
                            component={RouterLink}
                            to="/cart"
                            variant="outlined"
                            color="primary"
                            fullWidth
                            sx={{ mt: 1 }}
                        >
                            Back to Cart
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CheckoutPage;
