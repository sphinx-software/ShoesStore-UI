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
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                quantity: action.quantity + 1
            };
            console.log(state.quantity);
        case 'DECREASE_QUANTITY':
            if (state.quantity > 0) {
                return {
                    ...state,
                    quantity: action.quantity - 1
                };
            }
            console.log(state.quantity);
        default:
            return state
    }
}

export default CartReducer;
