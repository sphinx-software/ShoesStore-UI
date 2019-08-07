import React,       { Component } from 'react';
import propTypes                  from 'prop-types';
import BreadCrumbs                from "../BreadCrumbs/BreadCrumbs";
import Quantity from "../Quantity/Quantity";

import {Button, FormGroup, Input, Label, Table} from "reactstrap";
import {connect} from "react-redux";
import '../../ui/shoppingcart/shoppingcarttotalprice.css';

class ShoppingCart extends Component {

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
        let products = [...this.props.products];
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
        let products = [...this.props.products];
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
        const newProducts  = products.filter(item => item.id !== product.id);
        this.setState({
            products: newProducts
        })
        console.log(newProducts);
    };

    render() {
        const { products } = this.props;

        // const { production } = this.props;
        // console.log(production);
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
                    {/* ShoppingCartTable */}
                        {
                            products.map((product) =>
                                <tr key={ product.id }>
                                    <td style={{ width: 100 }}>
                                        <img src={ product.image } alt={'text'}/>
                                    </td>
                                    <td>
                                        <h3>{ product.name }</h3>
                                        <p>{ product.description }</p>
                                    </td>
                                    <td>{ product.price } $</td>
                                    <td>
                                        <Quantity decrease={ () => this.decrease(product.id) }
                                                  increase={ () => this.increase(product.id) }
                                                  value={ product.quantity }/>
                                    </td>
                                    <td>{ product.price * product.quantity } $</td>
                                    <td>
                                        <button onClick={ () => this.remove(product) } type="button" className="close"><span>X</span><span className="sr-only">Close</span></button>
                                    </td>
                                </tr>
                            )
                        }
                    {/* End ShoppingCartTable */}
                    </tbody>
                </Table>
                <hr/>
                {/* ShoppingCartTotalPrice */}
                    <div className="content-father">
                    <div className="form-fa">
                        <FormGroup>
                            <Label><h3>Discount Code</h3></Label>
                        </FormGroup>
                        <FormGroup className="content-child">
                            <Input style={{ height: 40, width: 200 }} placeholder="Enter your coupon code" />
                            <Button color="success">Apply Coupon</Button>{' '}
                        </FormGroup>
                    </div>
                    <Table className="table" style={{ width: 200 }}>
                        <tbody>
                        <tr>
                            <th><h3>Subtotal:</h3></th>
                            <td><h3>{ (products) => this.getTotalPrice(products) }$</h3></td>
                        </tr>
                        <tr>
                            <th><h3>Shipping:</h3></th>
                            <td><h3>----</h3></td>
                        </tr>
                        <tr>
                            <th><h3>Total:</h3></th>
                            <td><h3>{ (products) => this.getTotalPrice(products) }$</h3></td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                {/* End ShoppingCartTotalPrice */}
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    products: propTypes.object
};

ShoppingCart.defaultProps = {
    products: [
        { id: 1, image: 'assets/img/thumb/08.jpg', name: 'balo',   description: 'ohyeah', price: 1000, quantity: 1 },
        { id: 2, image: 'assets/img/thumb/08.jpg', name: 'ao',     description: 'ohyeah', price: 1000, quantity: 1 },
        { id: 3, image: 'assets/img/thumb/08.jpg', name: 'quan',   description: 'ohyeah', price: 1000, quantity: 1 },
        { id: 4, image: 'assets/img/thumb/08.jpg', name: 'asdasd', description: 'ohyeah', price: 1000, quantity: 1 },
    ]
}


const mapStateToProps = (state) => {
    return {
        production: state.Cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);
