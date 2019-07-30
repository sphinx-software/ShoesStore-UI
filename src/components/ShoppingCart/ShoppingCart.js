import React,       { Component } from 'react';
import Quantity                   from '../Quantity/Quantity';
import propTypes                  from 'prop-types';
import BreadCrumbs                from "../BreadCrumbs/BreadCrumbs";
import {Table}                    from "reactstrap";
import ShoppingCartTable from "./ShoppingCartTable";
import ShoppingCartTotalPrice from "./ShoppingCartTotalPrice";

export default class ShoppingCart extends Component {

    state = {
        quantity: 1,
        totalQuantity: 1,
    };

    componentWillMount() {
        this.setState({
            products: this.props.products
        })
    }

    decrease(id) {
        let products = [...this.state.products];
        const newProducts = products.map(product =>
            (product.id === id)
                ? {...product, quantity: product.quantity > 1 ? --product.quantity : 1}
                : {...product}
        );
        this.setState({
            products: newProducts
        })
    };

    increase(id) {
        let products = [...this.state.products];
        const newProducts = products.map(product =>
            (product.id === id)
                ? {...product, quantity: ++product.quantity}
                : {...product}
        );
        this.setState({
            products: newProducts
        })
    };

    getTotalPrice(products) {
        const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);
        return totalPrice;
    }

    remove(product) {
        let products       = [...this.state.products];
        const newProducts  = products.filter(item => item.id !== product.id)
        this.setState({
            products: newProducts
        })
    };

    render() {
        const { products } = this.state;

        return (
            <div>
                <BreadCrumbs page="Checkout"/>
                <div className="header-tags">
                    <div className="overflow-h">
                        <h2>Shopping Cart</h2>
                        <p>Review &amp; edit your product</p>
                    </div>
                </div>
                <Table>
                    <thead>
                    <tr>
                        <th>...</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) =>
                                <ShoppingCartTable
                                    product={product}
                                    decrease={ () => this.decrease(product.id) }
                                    increase={ () => this.increase(product.id) }
                                    remove={ () => this.remove(product)  }
                                />
                            )
                        }
                    </tbody>
                </Table>
                <hr/>
                <ShoppingCartTotalPrice
                    getTotalPrice={ () => this.getTotalPrice(products) }
                />
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    products: propTypes.object
};

ShoppingCart.defaultProps = {
    products: [
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
        {
            id: 4,
            image: 'assets/img/thumb/08.jpg',
            name: 'asdasd',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
    ]
}
