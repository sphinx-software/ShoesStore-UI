export const addToCart = product => ({
    type: "ADD_TO_CART",
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



