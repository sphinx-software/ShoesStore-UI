const CartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    ...action.product
                }
            ]
        case 'REMOVE_ITEM':
            return [
                ...state,
                state.filter((e, i) => i != action.product)
            ]
        default:
            return state
    }
}

export default CartReducer;
