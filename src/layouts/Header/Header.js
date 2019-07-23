import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return(
            <div className="header-v5 header-static">
                <div className="navbar navbar-default mega-menu" role="navigation">
                    <div className="container">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a href="/" className="navbar-brand">
                                <img id="logo-header" src="assets/img/logo.png" alt="Logo" />
                            </a>
                        </div>
                        {/* Shopping Cart */}
                        <div className="shop-badge badge-icons pull-right">
                            <a href="#"><i className="fa fa-shopping-cart" /></a>
                            <span className="badge badge-sea rounded-x">3</span>
                            <div className="badge-open">
                                <ul className="list-unstyled mCustomScrollbar" data-mcs-theme="minimal-dark">
                                    <li>
                                        <img src="assets/img/thumb/05.jpg" alt />
                                        <button type="button" className="close">×</button>
                                        <div className="overflow-h">
                                            <span>Black Glasses</span>
                                            <small>1 x $400.00</small>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/img/thumb/02.jpg" alt />
                                        <button type="button" className="close">×</button>
                                        <div className="overflow-h">
                                            <span>Black Glasses</span>
                                            <small>1 x $400.00</small>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="assets/img/thumb/03.jpg" alt />
                                        <button type="button" className="close">×</button>
                                        <div className="overflow-h">
                                            <span>Black Glasses</span>
                                            <small>1 x $400.00</small>
                                        </div>
                                    </li>
                                </ul>
                                <div className="subtotal">
                                    <div className="overflow-h margin-bottom-10">
                                        <span>Subtotal</span>
                                        <span className="pull-right subtotal-cost">$1200.00</span>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <a href="shop-ui-inner.html" className="btn-u btn-brd btn-brd-hover btn-u-sea-shop btn-block">View Cart</a>
                                        </div>
                                        <div className="col-xs-6">
                                            <a href="shop-ui-add-to-cart.html" className="btn-u btn-u-sea-shop btn-block">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Shopping Cart */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse navbar-responsive-collapse">
                            {/* Nav Menu */}
                            <ul className="nav navbar-nav">
                                {/* Pages */}
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                        Product
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/products">Product List</Link></li>
                                        <li><Link to="/products-detail">Product Details</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                    </ul>
                                </li>
                                {/* End Pages */}
                                {/* Promotion */}
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                        Promotion
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown">
                                            <a href="javascript:void(0);">FreeShip</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="javascript:void(0);">20%</a>
                                        </li>
                                    </ul>
                                </li>
                                {/* End Promotion */}
                            </ul>
                            {/* End Nav Menu */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
