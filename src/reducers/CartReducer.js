const initialState = {
    products: [
        { id: 1,   image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 2,   image: 'assets/img/blog/41.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
        { id: 3,   image: 'assets/img/blog/42.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1 },
    ],
    cart: [],
    total: 0,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            let productOfProducts   = state.products.find(product => product.id === action.id);
            let productOfCart       = state.cart.find(product => action.id === product.id);

            if (productOfCart) {
                productOfProducts.quantity++
                return {
                    ...state,
                    total   : state.cart.reduce((total, productOfCart) => total + ( productOfCart.price * productOfCart.quantity ), 0)
                }

            } else {
                productOfProducts.quantity = 1
                return {
                    ...state,
                    cart    : [...state.cart, productOfProducts],
                    total   : action.product.price
                }
            }

        case 'REMOVE_ITEM':
            return {
                ...state,
                cart    : state.cart.filter(product => action.id !== product.id),
                total   : state.cart.reduce((total, productOfCart) => total + ( productOfCart.price * productOfCart.quantity ), 0)
            }


        case 'INCREASE_QUANTITY':
            return {
                ...state,
                quantity: productOfProducts.quantity++
            };

        case 'DECREASE_QUANTITY':
            if (productOfProducts.quantity > 0) {
                return {
                    ...state,
                    quantity: productOfProducts.quantity--
                };
            }

        default:
            return state
    }
}

export default CartReducer;




