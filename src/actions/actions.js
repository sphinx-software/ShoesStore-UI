export const addToCart = product => ({
    type: "ADD_TO_CART",
    id: product.id,
    quantity: product.quantity,
    product
});

export const remove = product => ({
    type: "REMOVE_ITEM",
    id: product.id,
    product
});

export const dropdown = dropdown => ({
    type: 'DROP_DOWN',
    dropdown
})
