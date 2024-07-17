
import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

function ReturnItems() {
    const [returnItems, setReturnItems] = useState([]);

    useEffect(() => {
        fetchReturnItems();
    }, []);

    const fetchReturnItems = () => {
        const mockReturnItems = [
            { id: 1, itemName: 'Item A', reason: 'Wrong product', status: 'Pending' },
            { id: 2, itemName: 'Item B', reason: 'Defective', status: 'Approved' },
            { id: 3, itemName: 'Item C', reason: 'Changed mind', status: 'Rejected' },
        ];
        setReturnItems(mockReturnItems);
    };

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
