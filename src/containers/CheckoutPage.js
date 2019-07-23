import React, { Component }             from 'react';
import { BrowserRouter }  from "react-router-dom";
import BreadCrumbs                      from '../components/BreadCrumbs/BreadCrumbs';
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import BillingInfo from "../components/BillingInfo/BillingInfo";
import Payment from "../components/Payment/Payment";

export default class CheckoutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1
        }
    };

    previous() {
        this.setState({
            index: this.state.index > 1 ? --this.state.index : 1
        })
    };

    next() {
        this.setState( {
            index: this.state.index < 3 ? ++this.state.index : 3
        })
    };

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    {/*=== Breadcrumbs v4 ===*/}
                        <BreadCrumbs/>
                    {/*=== End Breadcrumbs v4 ===*/}
                    {/*=== Content Medium Part ===*/}
                    <div className="content-md margin-bottom-30">
                        <div className="container">
                            <form className="shopping-cart" action="#">
                                <div>

                                    { this.state.index === 1 && <ShoppingCart/> }

                                    { this.state.index === 2 && <BillingInfo/> }

                                    { this.state.index === 3 && <Payment/> }

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
                                                    <li>
                                                        <h4>Subtotal:</h4>
                                                        <div className="total-result-in">
                                                            <span>$ 1280.00</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h4>Shipping:</h4>
                                                        <div className="total-result-in">
                                                            <span className="text-right">- - - -</span>
                                                        </div>
                                                    </li>
                                                    <li className="divider" />
                                                    <li className="total-price">
                                                        <h4>Total:</h4>
                                                        <div className="total-result-in">
                                                            <span>$ 1280.00</span>
                                                        </div>
                                                    </li>


                                                    <button onClick={ () => this.previous() } type="button" className="btn-u btn-u-sea-shop">Previous</button>
                                                    <button onClick={ () => this.next() } type="button" className="btn-u btn-u-sea-shop">Next</button>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>{/*/end container*/}
                    </div>
                    {/*=== End Content Medium Part ===*/}
                </div>{/*/wrapper*/}
            </BrowserRouter>
        );
    }
}
