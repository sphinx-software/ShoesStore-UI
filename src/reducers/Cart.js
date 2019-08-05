const Cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TOCART':
            return [
                ...state,
                {
                    id: action.id,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default Cart;