export const addToCart = product => ({
    type: "ADD_TO_CART",
    product
});

export const remove = product => ({
    type: "REMOVE_ITEM",
    id: product.id,
    product
});



