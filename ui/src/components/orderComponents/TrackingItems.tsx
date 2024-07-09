
import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

function TrackingItems() {
    const [trackingItems, setTrackingItems] = useState([]);

    useEffect(() => {
        fetchTrackingItems();
    }, []);

    const fetchTrackingItems = () => {
        const mockTrackingItems = [
            { id: 1, itemName: 'Package A', status: 'In Transit', location: 'City A' },
            { id: 2, itemName: 'Package B', status: 'Out for Delivery', location: 'City B' },
            { id: 3, itemName: 'Package C', status: 'Delivered', location: 'City C' },
        ];
        setTrackingItems(mockTrackingItems);
    };

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
