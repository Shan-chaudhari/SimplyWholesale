import { Container, Grid, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import OrderedItems from "../../components/orderComponents/OrderedItems";
import TrackingItems from "../../components/orderComponents/TrackingItems";
import ReturnItems from "../../components/orderComponents/ReturnItems";

function AccountPage() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Container maxWidth={"xl"}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Tabs value={tabValue} onChange={handleTabChange} centered>
                            <Tab label="Ordered Items" />
                            <Tab label="Tracking Items" />
                            <Tab label="Return Items" />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12}>
                        {tabValue === 0 && <OrderedItems />}
                        {tabValue === 1 && <TrackingItems />}
                        {tabValue === 2 && <ReturnItems />}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default AccountPage;