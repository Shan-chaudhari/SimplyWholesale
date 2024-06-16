import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Link, Grid
} from "@mui/material";
import {Search} from "@mui/icons-material";

function Filters() {
  function handleSearch() {
    console.log("hi");
  }

  return (
    <Box sx={{ width: '250px', padding: 2 }}>
      <Typography variant="h6">Filters</Typography>
      <Divider sx={{ my: 2 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">Categories</Typography>
        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Pet Food" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Chips" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Chips" />
          </Grid>
          <Grid item>
            <Link href="#" underline="none" sx={{ display: 'block', mt: 1 }}>Show more</Link>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="subtitle1">Brands</Typography>
        <TextField
          placeholder="Search"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ my: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Nestle" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Fritolay" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Pepsi" />
          </Grid>
          <Grid item>
            <Link href="#" underline="none" sx={{ display: 'block', mt: 1 }}>Show more</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Filters;