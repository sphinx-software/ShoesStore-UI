import React,       { Component }                 from 'react';
import BreadCrumbs                                from "../BreadCrumbs/BreadCrumbs";
import Quantity                                   from "../Quantity/Quantity";
import { Button, FormGroup, Input, Label, Table } from "reactstrap";


import { connect }                                from "react-redux";
import { decreaseQuantity }                       from "../../actions/actions";
import { increaseQuantity }                       from "../../actions/actions";
import { remove }                                 from "../../actions/actions";


import '../../ui/shoppingcart/shoppingcarttotalprice.css';


class ShoppingCart extends Component {

    render() {

        const { products, getTotalPrice } = this.props;

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
                                        <img src={ product.image } style={{ width: 250 }} alt={'text'}/>
                                    </td>
                                    <td>
                                        <h3>{ product.name }</h3>
                                        <p>{ product.description }</p>
                                    </td>
                                    <td>{ product.price } </td>
                                    <td>
                                        <Quantity decrease={ () => this.props.decrease(product.id) }
                                                  increase={ () => this.props.increase(product.id) }
                                                  value={ product.quantity }/>
                                    </td>
                                    <td>{ product.price * product.quantity } $</td>
                                    <td>
                                        <button onClick={ () => this.props.remove(product) } type="button" className="close"><span>X</span><span className="sr-only">Close</span></button>
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
                                <td><h3>{ getTotalPrice }$</h3></td>
                            </tr>
                            <tr>
                                <th><h3>Shipping:</h3></th>
                                <td><h3>----</h3></td>
                            </tr>
                            <tr>
                                <th><h3>Total:</h3></th>
                                <td><h3>{ getTotalPrice }$</h3></td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                {/* End ShoppingCartTotalPrice */}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products        : state.Cart.cart,
        getTotalPrice   : state.Cart.total
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        remove      : (product) => dispatch(remove(product)),
        decrease    : () => dispatch(decreaseQuantity(1)),
        increase    : () => dispatch(increaseQuantity(1))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);
