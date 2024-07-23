export const cartData = {
    subtotal: 5000,
    discount: 20,
    delivery: 20,
    tax: 20,
};

export const orderedItemsData = [
    { id: 1, itemName: 'Product A', quantity: 2, status: 'Processing' },
    { id: 2, itemName: 'Product B', quantity: 1, status: 'Shipped' },
    { id: 3, itemName: 'Product C', quantity: 3, status: 'Delivered' },
];

export const returnItemsData = [
    { id: 1, itemName: 'Item A', reason: 'Wrong product', status: 'Pending' },
    { id: 2, itemName: 'Item B', reason: 'Defective', status: 'Approved' },
    { id: 3, itemName: 'Item C', reason: 'Changed mind', status: 'Rejected' },
];

export const trackingItemsData = [
    { id: 1, itemName: 'Package A', status: 'In Transit', location: 'City A' },
    { id: 2, itemName: 'Package B', status: 'Out for Delivery', location: 'City B' },
    { id: 3, itemName: 'Package C', status: 'Delivered', location: 'City C' },
];