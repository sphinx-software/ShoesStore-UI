const initialState = {
    products: [
        { id: 1,  image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: 100 },
        { id: 2,  image: 'assets/img/blog/41.jpg', name: 'Shoes', gender: 'NAM', price: 100 },
        { id: 3,  image: 'assets/img/blog/42.jpg', name: 'Shoes', gender: 'NAM', price: 100 },
    ],
    cart: [],
    total: 0,
    quantity: 1
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            let addProduct           = state.products.find(product => product.id === action.id);

            let existedProductOfCart = state.cart.find(product => action.id === product.id);


            if (existedProductOfCart) {
                addProduct.quantity += 1
                return {
                    ...state,
                    total: state.cart.reduce((total, existedProductOfCart) => total + ( existedProductOfCart.price * existedProductOfCart.quantity ), 0)
                }
            } else {
                addProduct.quantity = 1
                return {
                    ...state,
                    cart: [...state.cart, addProduct],
                    total: state.cart.reduce((total, existedProductOfCart) => total + ( existedProductOfCart.price * existedProductOfCart.quantity ), 0)
                }
            }

        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(product => action.id !== product.id),
                total: state.cart.reduce((total, existedProductOfCart) => total + ( existedProductOfCart.price * existedProductOfCart.quantity ), 0)
            }

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                quantity: existedProductOfCart.quantity++
            };

        case 'DECREASE_QUANTITY':
            if (state.quantity > 0) {
                return {
                    ...state,
                    quantity: existedProductOfCart.quantity--
                };
            }
            break;

        default:
            return state
    }
}

export default CartReducer;






