import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Tab, Tabs } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CreateAccountPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tabIndex, setTabIndex] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [error, setError] = useState("");

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const handleCreateAccount = () => {
        if (!email || !password) {
            setError("Invalid email or password try again");
        } else {
            setDialogOpen(true);
            setError("");
        }
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <Container maxWidth="sm" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Email" />
                    <Tab label="Password" />
                </Tabs>
                <Box>
                    {tabIndex === 0 && (
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    )}
                    {tabIndex === 1 && (
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    )}
                </Box>
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