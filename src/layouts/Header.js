import React, { Component } from 'react';
import { Link } from "react-router-dom";
import IconCart from '../components/Icon/IconCart';
import propTypes from "prop-types";
import '../ui/header/header.css';
import Nav from "reactstrap/es/Nav";
import NavLink from "reactstrap/es/NavLink";

export default class Header extends Component {

    state = {
        quantity: 1
    }

    componentWillMount() {
        this.setState({
            products: this.props.products
        })
    }

    getTotalPrice(products) {
        const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);
        return totalPrice;
    }

    remove(product) {
        let products        = [...this.state.products];
        const newProducts   = products.filter(item => item.id !== product.id)
        this.setState({
            products: newProducts
        })
        console.log(newProducts);
    }

    render() {

        const { products } = this.props;

        return(
            <Nav>
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
                                <NavLink href="/" className="timkeo">
                                    <img id="logo-header" src="assets/img/timkeologo.png" style={{ height: 80}} alt="Logo" />
                                </NavLink>
                            </div>


                            {/* Icon Cart */}
                            <div className="shop-badge badge-icons pull-right">
                                <NavLink href="#"><i className="fa fa-shopping-cart" /></NavLink>
                                <span className="badge badge-sea rounded-x">3</span>
                                <div className="badge-open">
                                    <ul className="list-unstyled mCustomScrollbar" data-mcs-theme="minimal-dark">
                                        {
                                            products.map((product) => {
                                                return(
                                                    <div>
                                                        <IconCart
                                                            product={product}
                                                            remove={ () => this.remove(product) }
                                                        />
                                                    </div>
                                                )
                                            })
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
                            {/* End Icon Cart */}


                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse navbar-responsive-collapse">
                                {/* Nav Menu */}
                                <ul className="nav navbar-nav">
                                    {/* Pages */}
                                    <li className="dropdown">
                                        <NavLink href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                            Product
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/products">Product List</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                        </ul>
                                    </li>
                                    {/* End Pages */}
                                    {/* Promotion */}
                                    <li className="dropdown">
                                        <NavLink href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                                            Promotion
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown">
                                                <NavLink href="javascript:void(0);">FreeShip</NavLink>
                                            </li>
                                            <li className="dropdown">
                                                <NavLink href="javascript:void(0);">20%</NavLink>
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
            </Nav>
        );
    }
}


Header.propTypes = {
    products: propTypes.object
};

Header.defaultProps = {
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
