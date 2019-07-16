import React, { Component }             from 'react';
import { BrowserRouter, Router, Link }  from "react-router-dom";
import BreadCrumbs                      from '../components/BreadCrumbs/BreadCrumbs';

export default class ProductListPage extends Component {
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
                                    <div className="header-tags">
                                        <div className="overflow-h">
                                            <h2>Shopping Cart</h2>
                                            <p>Review &amp; edit your product</p>
                                            <i className="rounded-x fa fa-check" />
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
                                                <tr>
                                                    <td className="product-in-table">
                                                        <img className="img-responsive" src="assets/img/thumb/08.jpg" alt />
                                                        <div className="product-it-in">
                                                            <h3><Double-Breaste></Double-Breaste>d</h3>
                                                            <span>Sed aliquam tincidunt tempus</span>
                                                        </div>
                                                    </td>
                                                    <td>$ 160.00</td>
                                                    <td>
                                                        <button type="button" className="quantity-button" name="subtract" onclick="javascript: subtractQty1();" value="-">-</button>
                                                        <input type="text" className="quantity-field" name="qty1" defaultValue={5} id="qty1" />
                                                        <button type="button" className="quantity-button" name="add" onclick="javascript: document.getElementById(&quot;qty1&quot;).value++;" value="+">+</button>
                                                    </td>
                                                    <td className="shop-red">$ 320.00</td>
                                                    <td>
                                                        <button type="button" className="close"><span>×</span><span className="sr-only">Close</span></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-in-table">
                                                        <img className="img-responsive" src="assets/img/thumb/07.jpg" alt />
                                                        <div className="product-it-in">
                                                            <h3>Vivamus ligula</h3>
                                                            <span>Sed aliquam tincidunt tempus</span>
                                                        </div>
                                                    </td>
                                                    <td>$ 160.00</td>
                                                    <td>
                                                        <button type="button" className="quantity-button" name="subtract" onclick="javascript: subtractQty2();" value="-">-</button>
                                                        <input type="text" className="quantity-field" name="qty2" defaultValue={3} id="qty2" />
                                                        <button type="button" className="quantity-button" name="add" onclick="javascript: document.getElementById(&quot;qty2&quot;).value++;" value="+">+</button>
                                                    </td>
                                                    <td className="shop-red">$ 320.00</td>
                                                    <td>
                                                        <button type="button" className="close"><span>×</span><span className="sr-only">Close</span></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-in-table">
                                                        <img className="img-responsive" src="assets/img/thumb/06.jpg" alt />
                                                        <div className="product-it-in">
                                                            <h3>Vivamus ligula</h3>
                                                            <span>Sed aliquam tincidunt tempus</span>
                                                        </div>
                                                    </td>
                                                    <td>$ 160.00</td>
                                                    <td>
                                                        <button type="button" className="quantity-button" name="subtract" onclick="javascript: subtractQty3();" value="-">-</button>
                                                        <input type="text" className="quantity-field" name="qty3" defaultValue={1} id="qty3" />
                                                        <button type="button" className="quantity-button" name="add" onclick="javascript: document.getElementById(&quot;qty3&quot;).value++;" value="+">+</button>
                                                    </td>
                                                    <td className="shop-red">$ 320.00</td>
                                                    <td>
                                                        <button type="button" className="close"><span>×</span><span className="sr-only">Close</span></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-in-table">
                                                        <img className="img-responsive" src="assets/img/thumb/09.jpg" alt />
                                                        <div className="product-it-in">
                                                            <h3>Vivamus ligula</h3>
                                                            <span>Sed aliquam tincidunt tempus</span>
                                                        </div>
                                                    </td>
                                                    <td>$ 160.00</td>
                                                    <td>
                                                        <button type="button" className="quantity-button" name="subtract" onclick="javascript: subtractQty4();" value="-">-</button>
                                                        <input type="text" className="quantity-field" name="qty4" defaultValue={7} id="qty4" />
                                                        <button type="button" className="quantity-button" name="add" onclick="javascript: document.getElementById(&quot;qty4&quot;).value++;" value="+">+</button>
                                                    </td>
                                                    <td className="shop-red">$ 320.00</td>
                                                    <td>
                                                        <button type="button" className="close"><span>×</span><span className="sr-only">Close</span></button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>
                                    <div className="header-tags">
                                        <div className="overflow-h">
                                            <h2>Billing info</h2>
                                            <p>Shipping and address infot</p>
                                            <i className="rounded-x fa fa-home" />
                                        </div>
                                    </div>
                                    <section className="billing-info">
                                        <div className="row">
                                            <div className="col-md-6 md-margin-bottom-40">
                                                <h2 className="title-type">Billing Address</h2>
                                                <div className="billing-info-inputs checkbox-list">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input id="name" type="text" placeholder="First Name" name="firstname" className="form-control required" />
                                                            <input id="email" type="text" placeholder="Email" name="email" className="form-control required email" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input id="surname" type="text" placeholder="Last Name" name="lastname" className="form-control required" />
                                                            <input id="phone" type="tel" placeholder="Phone" name="phone" className="form-control required" />
                                                        </div>
                                                    </div>
                                                    <input id="billingAddress" type="text" placeholder="Address Line 1" name="address1" className="form-control required" />
                                                    <input id="billingAddress2" type="text" placeholder="Address Line 2" name="address2" className="form-control required" />
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input id="city" type="text" placeholder="City" name="city" className="form-control required" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input id="zip" type="text" placeholder="Zip/Postal Code" name="zip" className="form-control required" />
                                                        </div>
                                                    </div>
                                                    <label className="checkbox text-left">
                                                        <input type="checkbox" name="checkbox" />
                                                        <i />
                                                        Ship item to the above billing address
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <h2 className="title-type">Shipping Address</h2>
                                                <div className="billing-info-inputs checkbox-list">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input id="name2" type="text" placeholder="First Name" name="firstname" className="form-control" />
                                                            <input id="email2" type="text" placeholder="Email" name="email" className="form-control email" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input id="surname2" type="text" placeholder="Last Name" name="lastname" className="form-control" />
                                                            <input id="phone2" type="tel" placeholder="Phone" name="phone" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <input id="shippingAddress" type="text" placeholder="Address Line 1" name="address1" className="form-control" />
                                                    <input id="shippingAddress2" type="text" placeholder="Address Line 2" name="address2" className="form-control" />
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input id="city2" type="text" placeholder="City" name="city" className="form-control" />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input id="zip2" type="text" placeholder="Zip/Postal Code" name="zip" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div className="header-tags">
                                        <div className="overflow-h">
                                            <h2>Payment</h2>
                                            <p>Select Payment method</p>
                                            <i className="rounded-x fa fa-credit-card" />
                                        </div>
                                    </div>
                                    <section>
                                        <div className="row">
                                            <div className="col-md-6 md-margin-bottom-50">
                                                <h2 className="title-type">Choose a payment method</h2>
                                                {/* Accordion */}
                                                <div className="accordion-v2">
                                                    <div className="panel-group" id="accordion">
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                                        <i className="fa fa-credit-card" />
                                                                        Credit or Debit Card
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapseOne" className="panel-collapse collapse in">
                                                                <div className="panel-body cus-form-horizontal">
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 no-col-space control-label">Cardholder Name</label>
                                                                        <div className="col-sm-8">
                                                                            <input type="text" className="form-control required" name="cardholder" placeholder />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 no-col-space control-label">Card Number</label>
                                                                        <div className="col-sm-8">
                                                                            <input type="text" className="form-control required" name="cardnumber" placeholder />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 no-col-space control-label">Payment Types</label>
                                                                        <div className="col-sm-8">
                                                                            <ul className="list-inline payment-type">
                                                                                <li><i className="fa fa-cc-paypal" /></li>
                                                                                <li><i className="fa fa-cc-visa" /></li>
                                                                                <li><i className="fa fa-cc-mastercard" /></li>
                                                                                <li><i className="fa fa-cc-discover" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4">Expiration Date</label>
                                                                        <div className="col-sm-8 input-small-field">
                                                                            <input type="text" name="mm" placeholder="MM" className="form-control required sm-margin-bottom-20" />
                                                                            <span className="slash">/</span>
                                                                            <input type="text" name="yy" placeholder="YY" className="form-control required" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-sm-4 no-col-space control-label">CSC</label>
                                                                        <div className="col-sm-8 input-small-field">
                                                                            <input type="text" name="number" placeholder className="form-control required" />
                                                                            <a href="#">What's this?</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                                        <i className="fa fa-paypal" />
                                                                        Pay with PayPal
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapseTwo" className="panel-collapse collapse">
                                                                <div className="content margin-left-10">
                                                                    <a href="#"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="PayPal" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Accordion */}
                                            </div>
                                            <div className="col-md-6">
                                                <h2 className="title-type">Frequently asked questions</h2>
                                                {/* Accordion */}
                                                <div className="accordion-v2 plus-toggle">
                                                    <div className="panel-group" id="accordion-v2">
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" data-parent="#accordion-v2" href="#collapseOne-v2">
                                                                        What payments methods can I use?
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapseOne-v2" className="panel-collapse collapse in">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, felis vel tincidunt sodales, urna metus rutrum leo, sit amet finibus velit ante nec lacus. Cras erat nunc, pulvinar nec leo at, rhoncus elementum orci. Nullam ut sapien ultricies, gravida ante ut, ultrices nunc.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" className="collapsed" data-parent="#accordion-v2" href="#collapseTwo-v2">
                                                                        Can I use gift card to pay for my purchase?
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapseTwo-v2" className="panel-collapse collapse">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, felis vel tincidunt sodales, urna metus rutrum leo, sit amet finibus velit ante nec lacus. Cras erat nunc, pulvinar nec leo at, rhoncus elementum orci. Nullam ut sapien ultricies, gravida ante ut, ultrices nunc.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" className="collapsed" data-parent="#accordion-v2" href="#collapseThree-v2">
                                                                        Will I be charged when I place my order?
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapseThree-v2" className="panel-collapse collapse">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, felis vel tincidunt sodales, urna metus rutrum leo, sit amet finibus velit ante nec lacus. Cras erat nunc, pulvinar nec leo at, rhoncus elementum orci. Nullam ut sapien ultricies, gravida ante ut, ultrices nunc.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="panel panel-default">
                                                            <div className="panel-heading">
                                                                <h4 className="panel-title">
                                                                    <a data-toggle="collapse" className="collapsed" data-parent="#accordion-v2" href="#collapseFour-v2">
                                                                        How long will it take to get my order?
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                            <div id="collapseFour-v2" className="panel-collapse collapse">
                                                                <div className="panel-body">
                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, felis vel tincidunt sodales, urna metus rutrum leo, sit amet finibus velit ante nec lacus. Cras erat nunc, pulvinar nec leo at, rhoncus elementum orci. Nullam ut sapien ultricies, gravida ante ut, ultrices nunc.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Accordion */}
                                            </div>
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