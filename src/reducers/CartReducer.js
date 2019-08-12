const CartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    ...action.product,
                }
            ]
        case 'REMOVE_ITEM':
            return [
                state.filter(id => id !== action.id)
            ]
        case 'GET_TOTAL_PRICE':
            return [
                state.reduce((total, action) => total + (action.price * action.quantity), 0)
            ]
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                quantity: action.quantity++
            };
        case 'DECREASE_QUANTITY':
            if (state.quantity > 0) {
                return {
                    ...state,
                    quantity: action.quantity--
                };
            }
            break;
        default:
            return state
    }
}

export default CartReducer;
