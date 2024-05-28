import { Link } from "react-router-dom";
import Logo from "../assets/logo-no-background.svg";
import { IconButton, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Search } from "@mui/icons-material";

function HomePage() {
  const handleSearch = () => {
    console.log("hi");
  };
  return (
    <>
      <div
        style={{
          fontFamily: "Aboreto",
          height: "100px",
          backgroundColor: "#1A365D",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "500px", height: "500px" }}
        />
        <Avatar
          src="/broken-image.jpg"
          style={{
            borderRadius: "25px",
            position: "absolute",
            bottom: "%",
            right: "80px",
          }}
        />
        <div>
          <TextField
            placeholder="Search..."
            variant="outlined"
            onChange={handleSearch}
            style={{
              backgroundColor: "white",
              borderRadius: "25px",
              position: "absolute",
              bottom: "20%",
              right: "150px",
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
        </div>
      </div>
      <div
        style={{
          background: "white",
          position: "absolute",
          right: "0px",
          width: "1780px",
          top: "100px",
          height: "725px",
          padding: "20px",
        }}
      >
        <h1>Welcome to My Website</h1>
        <p>This is a simple homepage with a blue header at the top.</p>
        <p>Feel free to add more content here...</p>
      </div>
    </>
  );
}

export default HomePage;
