import React, { Component }             from 'react';
import        { Link }                  from "react-router-dom";
import        { remove }                from "../actions/actions";
import        { connect }               from "react-redux";
import                                       '../ui/header/headers.css';
import {
    Row,
    Col,
    Navbar,
    NavLink,
    ButtonGroup,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';


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
        const { products, getTotalPrice } = this.props;
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Row>
                        <Col xs="6" sm="4">
                            <NavLink href="/" className="timkeo-banner">
                                <img id="logo-header" src="/assets/img/timkeologo.png" style={{ height: 70 }} alt="Logo" />
                            </NavLink>
                        </Col>
                        <Col xs="6" sm="4">
                            <ButtonGroup className="button-group-dropdown">
                                <ButtonDropdown isOpen={this.state.dropdownOpenOne} toggle={ () => this.toggleOne() }>
                                    <DropdownToggle caret size="lg" style={{ background: "#fcfcfc", height: 70 }}>
                                        PRODUCT
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem className="product-list"><Link to="/products">Product List</Link></DropdownItem>
                                        <DropdownItem className="checkout"><Link to="/checkout">Checkout</Link></DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <ButtonDropdown isOpen={this.state.dropdownOpenTwo} toggle={ () => this.toggleTwo() }>
                                    <DropdownToggle caret size="lg" style={{ background: "#fcfcfc", height: 70 }}>
                                        PROMOTION
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem className="free-ship"><Link to="#">FreeShip</Link></DropdownItem>
                                        <DropdownItem className="twenty-percent"><Link to="#">20%</Link></DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </ButtonGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <ButtonGroup className="button-group-dropdown">
                                <ButtonDropdown isOpen={this.state.dropdownOpenThree} toggle={ () => this.toggleThree() }>
                                    <DropdownToggle caret size="lg" style={{ background: "#fcfcfc", height: 70 }}>
                                        <img
                                            src={require("../img/icon/flame-icon-shopping-cart.png")}
                                            style={{ width: 100 }}
                                            alt={'cart'}
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu style={{ width: 350 }}>
                                        {
                                            products.map((product) =>
                                                <div key={product.id} className="product">
                                                    <img className="image" src={product.image} alt={"text"}/>
                                                    <div className="name-price-quantity">
                                                        <h2>{product.name}</h2>
                                                        <h4>{product.price}$ x {product.quantity}</h4>
                                                    </div>
                                                    <div className="total-price">
                                                        <h2>{product.price * product.quantity}$</h2>
                                                    </div>
                                                    <button onClick={ () => this.props.remove(product) } type="button" className="close">x</button>
                                                </div>
                                            )
                                        }
                                        <div>
                                            <center>
                                                <div className="sub-total">
                                                    <h3>SUBTOTAL</h3>
                                                    <h3>{ getTotalPrice }$</h3>
                                                </div>
                                                <div>
                                                    <Button className="checkout-button" color="primary" size="lg"><Link to="/checkout">Checkout</Link></Button>{' '}
                                                </div>
                                            </center>
                                        </div>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Navbar>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.Cart.cart,
        getTotalPrice: state.Cart.total
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
