import { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';

function OrderedItems() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetchOrders();
    }, []);

    const fetchOrders = () => {
        const mockOrders = [
            { id: 1, itemName: 'Product A', quantity: 2, status: 'Processing' },
            { id: 2, itemName: 'Product B', quantity: 1, status: 'Shipped' },
            { id: 3, itemName: 'Product C', quantity: 3, status: 'Delivered' },
        ];
        setOrders(mockOrders);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                    Ordered Items
                </Typography>
            </Grid>
            {orders.map((order) => (
                <Grid item xs={12} key={order.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {order.itemName}
                            </Typography>
                            <Typography color="textSecondary">
                                Quantity: {order.quantity}
                            </Typography>
                            <Typography color="textSecondary">
                                Status: {order.status}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default OrderedItems;