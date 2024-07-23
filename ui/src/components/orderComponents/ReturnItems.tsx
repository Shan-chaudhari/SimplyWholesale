import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import { returnItemsData } from '../../testData/TestData';

function ReturnItems() {
    const [returnItems, setReturnItems] = useState([]);

    useEffect(() => {
        setReturnItems(returnItemsData);
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Return Items
                </Typography>
            </Grid>
            {returnItems.map((item) => (
                <Grid item xs={12} key={item.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {item.itemName}
                            </Typography>
                            <Typography color="textSecondary">
                                Reason: {item.reason}
                            </Typography>
                            <Typography color="textSecondary">
                                Status: {item.status}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ReturnItems;
