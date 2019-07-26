import React, { Component } from 'react';
import { Link } from "react-router-dom";
import IconCart from '../../components/Icon/IconCart';

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
                            <IconCart/>
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
