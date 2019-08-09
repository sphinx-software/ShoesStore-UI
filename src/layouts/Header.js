import React, { Component }                                                                              from 'react';
import        { Link }                                                                                   from "react-router-dom";

import        { getTotalPrice, remove }                                                                  from "../actions/actions";
import        { connect }                                                                                from "react-redux";

import { Navbar, NavLink, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav } from 'reactstrap';
import '../ui/header/headers.css';


class Header extends Component {

    state = {
        dropdownOpenOne     : false,
        dropdownOpenTwo     : false,
        dropdownOpenThree   : false
    };

    toggleOne() {
        this.setState({
            dropdownOpenOne: !this.state.dropdownOpenOne
        })
    };

    toggleTwo() {
        this.setState({
            dropdownOpenTwo: !this.state.dropdownOpenTwo
        })
    };

    toggleThree() {
        this.setState({
            dropdownOpenThree: !this.state.dropdownOpenThree
        })
    };


    render() {

        const { products } = this.props;

        return (
            <div>
                <Nav>
                    <Navbar color="light" light expand="md">
                        <NavLink href="/" className="timkeo-banner">
                            <img id="logo-header" src="/assets/img/timkeologo.png" style={{ height: 80 }} alt="Logo" />
                        </NavLink>
                        <ButtonGroup className="button-group-dropdown">
                            <ButtonDropdown isOpen={this.state.dropdownOpenOne} toggle={ () => this.toggleOne() }>
                                <DropdownToggle caret size="lg" style={{ background: "#fcfcfc", height: 85 }}>
                                    PRODUCT
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className="product-list"><Link to="/products">Product List</Link></DropdownItem>
                                    <DropdownItem className="checkout"><Link to="/checkout">Checkout</Link></DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                            <ButtonDropdown isOpen={this.state.dropdownOpenTwo} toggle={ () => this.toggleTwo() }>
                                <DropdownToggle caret size="lg" style={{ background: "#fcfcfc", height: 85 }}>
                                    PROMOTION
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className="free-ship"><Link to="#">FreeShip</Link></DropdownItem>
                                    <DropdownItem className="twenty-percent"><Link to="#">20%</Link></DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </ButtonGroup>

                        <ButtonGroup className="button-group-dropdown">
                            <ButtonDropdown isOpen={this.state.dropdownOpenThree} toggle={ () => this.toggleThree() }>
                                <DropdownToggle caret size="lg" style={{ background: "#fcfcfc", height: 85 }}>
                                    <img
                                        src={require("../img/icon/flame-icon-shopping-cart.png")}
                                        style={{ width: 100 }}
                                    />
                                </DropdownToggle>
                                <DropdownMenu style={{ height: 300, width: 300 }}>
                                    {
                                        products.map((product) =>
                                            <li className="icon-cart">
                                                <img src={product.image} style={{ width: 100 }} alt={"text"}/>
                                                <button onClick={ () => this.props.remove(product) } type="button" className="close"><span>X</span></button>
                                                <div className="overflow-h">
                                                    <span>{product.name}</span>
                                                    <small>{product.price} * {product.quantity} </small>
                                                </div>
                                            </li>
                                        )
                                    }
                                </DropdownMenu>
                            </ButtonDropdown>
                        </ButtonGroup>
                    </Navbar>
                </Nav>
            </div>
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