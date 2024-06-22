import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/Home/HomePage";
import CartPage from "./Pages/Home/CartPage";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme.js";
import LoginPage from "./Pages/Home/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Box sx={{ paddingTop: 6 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
