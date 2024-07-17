import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CreateAccountPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [error, setError] = useState("");

    const handleCreateAccount = () => {
        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required. Please fill out the form completely.");
        } else {
            setDialogOpen(true);
            setError("");
        }
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '20vh' }}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Create an Account
                </Typography>
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && (
                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                        {error}
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleCreateAccount}
                    sx={{ mt: 2 }}
                >
                    Create Account
                </Button>
                <Dialog open={dialogOpen} onClose={handleDialogClose}>
                    <DialogTitle>Account Created!</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">Your account has been created successfully.</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button component={RouterLink} to="/login" color="primary">
                            Back to Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
}

export default CreateAccountPage;