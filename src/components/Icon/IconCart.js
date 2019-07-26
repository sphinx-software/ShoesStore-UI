import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default class IconCart extends Component {

    state = {
        quantity: 1
    }

    componentWillMount() {
        this.setState({
            products: this.props.products
        })
    }

    getTotalPrice = (products) => {
        let totalPrice = 0;
        products.forEach(product => totalPrice = totalPrice + product.price * product.quantity);
        return totalPrice;
    }

    remove(product) {
        let products = [...this.state.products];
        const newProducts  = products.filter(item => item.id !== product.id)
        this.setState({
            products: newProducts
        })

        console.log(newProducts);
    }

    render() {
        const { products } = this.state;
        console.log(products);
        return(
            <div className="shop-badge badge-icons pull-right">
                <a href="#"><i className="fa fa-shopping-cart" /></a>
                <span className="badge badge-sea rounded-x">3</span>
                <div className="badge-open">
                    <ul className="list-unstyled mCustomScrollbar" data-mcs-theme="minimal-dark">
                        {
                            products.map((product) =>
                                <li key={product.id}>
                                    <img src={product.image} alt />
                                    <button onClick={ () => this.remove(product) } type="button" className="close">×</button>
                                    <div className="overflow-h">
                                        <span>{product.name}</span>
                                        <small>{product.price}$ x {product.quantity}</small>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div className="subtotal">
                        <div className="overflow-h margin-bottom-10">
                            <span>Subtotal</span>
                            <span className="pull-right subtotal-cost">{this.getTotalPrice(products)}$</span>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <Link to="/checkout" className="btn-u btn-brd btn-brd-hover btn-u-sea-shop btn-block">View Cart</Link>
                            </div>
                            <div className="col-xs-6">
                                <Link to="/checkout" className="btn-u btn-u-sea-shop btn-block">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

IconCart.propTypes = {
    products: propTypes.object
};

IconCart.defaultProps = {
    products: [
        {
            id: 1,
            name: 'quan',
            price: 100,
            image: "assets/img/thumb/05.jpg",
            quantity: 1,
        },
        {
            id: 2,
            name: 'ao',
            price: 200,
            image: "assets/img/thumb/05.jpg",
            quantity: 1,
        },
        {
            id: 3,
            name: 'giay',
            price: 300,
            image: "assets/img/thumb/05.jpg",
            quantity: 1,
        }
    ]
}
