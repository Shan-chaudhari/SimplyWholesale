import { Container, Grid } from "@mui/material";
import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";

function HomePage() {
  const handleSearch = () => {
    console.log("hi");
  };

  return (
    <>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={2} sm={2} md={4} lg={3} xl={3}>
            <Filters />
          </Grid>
          <Grid item xs={10} sm={10} md={8} lg={9} xl={9}>
            <Products />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
