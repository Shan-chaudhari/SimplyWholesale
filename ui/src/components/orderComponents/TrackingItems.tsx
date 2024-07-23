import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import { trackingItemsData } from '../../testData/TestData';

function TrackingItems() {
    const [trackingItems, setTrackingItems] = useState([]);

    useEffect(() => {
        setTrackingItems(trackingItemsData);
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Tracking Items
                </Typography>
            </Grid>
            {trackingItems.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {item.itemName}
                            </Typography>
                            <Typography color="textSecondary">
                                Status: {item.status}
                            </Typography>
                            <Typography color="textSecondary">
                                Location: {item.location}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default TrackingItems;

