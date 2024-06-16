import { Link } from "react-router-dom";
import Logo from "../../assets/logo-no-background.svg";
import { IconButton, TextField, Container, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Search } from "@mui/icons-material";
import "./styles.scss";

function HomePage() {
  const handleSearch = () => {
    console.log("hi");
  };

  return (
    <>
      <Box className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <Avatar src="/broken-image.jpg" className="avatar" />
        <TextField
          placeholder="Search..."
          variant="outlined"
          onChange={handleSearch}
          className="searchField"
          InputProps={{
            endAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Container className="mainContainer"></Container>
    </>
  );
}

export default HomePage;
