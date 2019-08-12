const initialState = {
    products: [
        { id: 1,  image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1,categories : 'maytinh' },
        { id: 2,  image: 'assets/img/blog/41.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1,categories : 1 },
        { id: 3,  image: 'assets/img/blog/42.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 4,  image: 'assets/img/blog/43.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 5,  image: 'assets/img/blog/44.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 6,  image: 'assets/img/blog/45.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 7,  image: 'assets/img/blog/46.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 8,  image: 'assets/img/blog/47.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 9,  image: 'assets/img/blog/48.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 10, image: 'assets/img/blog/49.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 11, image: 'assets/img/blog/50.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 12, image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
    ]
}

const CartReducer = (state = initialState, action) => {
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
