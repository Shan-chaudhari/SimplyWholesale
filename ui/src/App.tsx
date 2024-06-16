import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Box sx={{paddingTop: 6}}>
          <main>
            <Router>
              <Routes>
                <Route path="/" Component={HomePage}/>
              </Routes>
            </Router>
          </main>
        </Box>

      </ThemeProvider>
    </>
  );
}

export default App;
