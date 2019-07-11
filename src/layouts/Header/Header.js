import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return(
                <BrowserRouter>
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
                                    <a className="navbar-brand" href="index.html">
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
                                        <li className="dropdown active">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="active"><a href="index.html">Shop UI</a></li>
                                                <li><a href="shop-ui-inner.html">Product Page</a></li>
                                                <li><a href="shop-ui-filter-grid.html">Filter Grid Page</a></li>
                                                <li><a href="shop-ui-filter-list.html">Filter List Page</a></li>
                                                <li><a href="shop-ui-add-to-cart.html">Checkout</a></li>
                                                <li><a href="shop-ui-login.html">Login</a></li>
                                                <li><a href="shop-ui-register.html">Register</a></li>
                                            </ul>
                                        </li>
                                        {/* End Pages */}
                                        {/* Promotion */}
                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                                Promotion
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a href="javascript:void(0);">Jeans</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="#">Skinny Jeans</a></li>
                                                        <li><a href="#">Bootcut Jeans</a></li>
                                                        <li><a href="#">Straight Cut Jeans</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a href="javascript:void(0);">Shoes</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="#">Sandals</a></li>
                                                        <li><a href="#">Heels</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        {/* End Promotion */}
                                        {/* Gifts */}
                                        <li className="dropdown mega-menu-fullwidth">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                                Gifts
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <div className="mega-menu-content">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-md-3 col-sm-12 col-xs-12 md-margin-bottom-30">
                                                                    <h3 className="mega-menu-heading">Pellentes que nec diam lectus</h3>
                                                                    <p>Proin pulvinar libero quis auctor pharet ra. Aenean fermentum met us orci, sedf eugiat augue pulvina r vitae. Nulla dolor nisl, molestie nec aliquam vitae, gravida sodals dolor...</p>
                                                                    <button type="button" className="btn-u btn-u-dark">Read More</button>
                                                                </div>
                                                                <div className="col-md-3 col-sm-4 col-xs-4 md-margin-bottom-30">
                                                                    <a href="#"><img className="product-offers img-responsive" src="assets/img/blog/01.jpg" alt /></a>
                                                                </div>
                                                                <div className="col-md-3 col-sm-4 col-xs-4 sm-margin-bottom-30">
                                                                    <a href="#"><img className="product-offers img-responsive" src="assets/img/blog/02.jpg" alt /></a>
                                                                </div>
                                                                <div className="col-md-3 col-sm-4 col-xs-4">
                                                                    <a href="#"><img className="product-offers img-responsive" src="assets/img/blog/03.jpg" alt /></a>
                                                                </div>
                                                            </div>{/*/end row*/}
                                                        </div>{/*/end container*/}
                                                    </div>{/*/end mega menu content*/}
                                                </li>
                                            </ul>{/*/end dropdown-menu*/}
                                        </li>
                                        {/* End Gifts */}
                                        {/* Clothes */}
                                        <li className="dropdown">
                                            <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown" data-delay={1000}>
                                                Clothes
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Jeans</a></li>
                                                <li><a href="#">T-shirts</a></li>
                                                <li><a href="#">Shorts</a></li>
                                            </ul>
                                        </li>
                                        {/* End Clothes */}
                                    </ul>
                                    {/* End Nav Menu */}
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
        );
    }
}