export const addToCart = product => ({
    type: "ADD_TO_CART",
    id: product.id,
    product
});

export const remove = product => ({
    type: "REMOVE_ITEM",
    id: product.id,
    product
});

export const getTotalPrice = products => ({
    type: "GET_TOTAL_PRICE",
    products
});

export const increaseQuantity = quantity => ({
    type: 'INCREASE_QUANTITY',
    quantity
});

export const decreaseQuantity = quantity => ({
    type: 'DECREASE_QUANTITY',
    quantity
});

export const dropdown = dropdown => ({
    type: 'DROP_DOWN',
    dropdown
})


