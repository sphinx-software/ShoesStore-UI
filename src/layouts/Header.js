import React, { Component }     from 'react';
import        { Link }          from "react-router-dom";
import Nav                      from "reactstrap/es/Nav";
import NavLink                  from "reactstrap/es/NavLink";


import { connect }              from "react-redux";
import { remove }               from "../actions/actions";
import { getTotalPrice }        from "../actions/actions";


import '../ui/header/header.css';
import '../ui/header/iconcart.css';


class Header extends Component {

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
                                    <img id="logo-header" src="assets/img/timkeologo.png" style={{ height: 80 }} alt="Logo" />
                                </NavLink>
                            </div>


                            {/* Icon Cart */}
                            <div className="shop-badge badge-icons pull-right">
                                <NavLink href="#"><i className="fa fa-shopping-cart" /></NavLink>
                                <span className="badge badge-sea rounded-x">3</span>
                                <div className="badge-open">
                                    <ul className="list-unstyled mCustomScrollbar" data-mcs-theme="minimal-dark">
                                        {
                                            products.map((product) =>
                                                <li className="icon-cart">
                                                    <img src={product.image} style={{ width: 70 }} alt={"text"}/>
                                                    <button onClick={ () => this.props.remove(product) } type="button" className="close"><span>X</span></button>
                                                    <div className="overflow-h">
                                                        <span>{product.name}</span>
                                                        <small>{product.price} * {product.quantity} </small>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                    <div className="subtotal">
                                        <div className="overflow-h margin-bottom-10">
                                            <span>Subtotal</span>
                                            <span className="pull-right subtotal-cost">{ () => this.props.getTotalPrice(products)}$</span>
                                        </div>
                                        <div className="row">
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
                            </div>
                        </div>
                    </div>
                </div>
            </Nav>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.Cart,
        getTotalPrice: getTotalPrice(state.Cart)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (product) => dispatch(remove(product)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
