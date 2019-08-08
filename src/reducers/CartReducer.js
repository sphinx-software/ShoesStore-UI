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
                state.filter((e, i) => i !== action.product)
            ]
        case 'GET_TOTAL_PRICE':
            return [
                state.reduce((total, action) => total + (action.price * action.quantity), 0)
            ]
        default:
            return state
    }
}

export default CartReducer;
