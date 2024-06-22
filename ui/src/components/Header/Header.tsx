import {
  AppBar,
  Box,
  Container, Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";
import Logo from "../../assets/logo-no-background.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";

function Header() {
  const handleSearch = () => {
    console.log("hi");
  };

  const SearchBar = (
    <TextField
      placeholder="Search wholesalers"
      variant="outlined"
      sx={{
        width: "300px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
          paddingLeft: "10px",
          backgroundColor: "white",
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );

  return (
    <AppBar position="relative" sx={{ padding: "15px 0" }}>
      <Container maxWidth={"xl"}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: 40, marginRight: 16 }}
            />
            {SearchBar}
          </Box>
          <Grid container direction={'row'} justifyContent={'flex-end'}>
            <Grid item>
              <IconButton component={Link} to="/cart" color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton component={Link} to="/login" color="inherit">
                <LoginIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
