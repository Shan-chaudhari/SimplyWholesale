import {AppBar, Box, Container, IconButton, InputAdornment, TextField, Toolbar} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {Search} from "@mui/icons-material";
import Logo from "../../assets/logo-no-background.svg";


function Header() {
  const handleSearch = () => {
    console.log("hi");
  }

  const SearchBar = (
    <TextField
      placeholder="Search wholesalers"
      variant="outlined"
      sx={{
        width: '300px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '50px',
          paddingLeft: '10px',
          backgroundColor: 'white',
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent',
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
  )

  return (
    <AppBar position="relative" sx={{padding: '15px 0'}}>
      <Container maxWidth={'xl'}>
        <Toolbar>
          <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 16 }}/>
          <Box sx={{display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            {SearchBar}
            <Avatar src="/broken-image.jpg" sx={{ml: 2}}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;