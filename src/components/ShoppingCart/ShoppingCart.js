import React,       { Component } from 'react';
import Quantity                   from '../Quantity/Quantity';
import propTypes                  from 'prop-types';
import ProductDetailPage from './../../containers/ProductDetailPage'

export default class ShoppingCart extends Component {

    state = {
        quantity: 1,
        totalQuantity: 1
    };


    componentWillMount() {
        this.setState({
            shoppingCarts: this.props.shoppingCarts
        });
    }

    decrease(index, id) {
        let shoppingCarts = [...this.state.shoppingCarts];
        const shoppingCartsNew = shoppingCarts.map(item =>
            (item.id === id)
                ? {...item, quantity: item.quantity > 1 ? --item.quantity : 1}
                : {...item}
        );
        this.setState({
            shoppingCarts: shoppingCartsNew
        });
    }

    increase(index, id) {
        let shoppingCarts = [...this.state.shoppingCarts];
        const shoppingCartsNew = shoppingCarts.map(item =>
            (item.id === id)
                ? {...item, quantity: ++item.quantity}
                : {...item}
        );
        this.setState({
            shoppingCarts: shoppingCartsNew
        });
    }

    getTotalPrice = (shoppingCarts) => {
        let totalPrice = 0;
        shoppingCarts.forEach(shoppingCart => {
           totalPrice = totalPrice + shoppingCart.price * shoppingCart.quantity
        });
        return totalPrice;
    };

    render() {
        const { shoppingCarts } = this.state;

        return (
            <div>
                <ProductDetailPage totalPrice={this.props.prices}/>
                <div className="header-tags">
                    <div className="overflow-h">
                        <h2>Shopping Cart</h2>
                        <p>Review &amp; edit your product</p>
                    </div>
                </div>
                <section>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    shoppingCarts.map((shoppingCart, index) =>
                                        <tr key={index}>
                                            <td className="product-in-table">
                                                <img className="img-responsive" src={shoppingCart.image} alt />
                                                <div className="product-it-in">
                                                    <h3><Double-Breaste>Quan</Double-Breaste>{shoppingCart.name}</h3>
                                                    <span>{shoppingCart.description}</span>
                                                </div>
                                            </td>
                                            <td>{shoppingCart.price} $</td>
                                            <td>
                                                <Quantity decrease={ () => this.decrease(index, shoppingCart.id) }
                                                          increase={ () => this.increase(index, shoppingCart.id) }
                                                          value={ shoppingCart.quantity }/>
                                            </td>
                                            <td className="shop-red">{ shoppingCart.price * shoppingCart.quantity } $</td>
                                            <td>
                                                <button type="button" className="close"><span>X</span><span className="sr-only">Close</span></button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
                <div className="coupon-code">
                    <div className="row">
                        <div className="col-sm-4 sm-margin-bottom-30">
                            <h3>Discount Code</h3>
                            <p>Enter your coupon code</p>
                            <input className="form-control margin-bottom-10" name="code" type="text" />
                            <button type="button" className="btn-u btn-u-sea-shop">Apply Coupon</button>
                        </div>

                        <div className="col-sm-3 col-sm-offset-5">

                            <ul className="list-inline total-result">
                                <li className="divider" />
                                <li className="total-price">
                                    <h4>Total:</h4>
                                    <div className="total-result-in">
                                        <span>$ {this.getTotalPrice(shoppingCarts)}</span>
                                    </div>
                                </li>

                                <li>
                                    <h4>Shipping:</h4>
                                    <div className="total-result-in">
                                        <span className="text-right">- - - -</span>
                                    </div>
                                </li>

                                <li>
                                    <h4>Total price:</h4>
                                    <div className="total-result-in">
                                        <span>$ 12200</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    shoppingCart: propTypes.object,
    prices: propTypes.object
};

ShoppingCart.defaultProps = {
    shoppingCarts: [
        {
            id: 1,
            image: 'assets/img/thumb/08.jpg',
            name: 'balo',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
        {
            id: 2,
            image: 'assets/img/thumb/08.jpg',
            name: 'ao',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
        {
            id: 3,
            image: 'assets/img/thumb/08.jpg',
            name: 'quan',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },

    ],
    prices: {
        price: undefined
    }
}
