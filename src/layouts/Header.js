import React, { Component }                                                                              from 'react';
import        { Link }                                                                                   from "react-router-dom";
import        { getTotalPrice, remove }                                                                  from "../actions/actions";
import        { connect }                                                                                from "react-redux";
import                                                                                                        '../ui/header/headers.css';
import {
    Navbar,
    NavLink,
    ButtonGroup,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Nav,
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
                                <DropdownMenu style={{ width: 400 }}>
                                    {/*{*/}
                                    {/*    products.map((product) =>*/}
                                    {/*        <div className="product">*/}
                                    {/*            <img className="image" src={product.image} alt={"text"}/>*/}
                                    {/*            <div className="name-price-quantity">*/}
                                    {/*                <h2>{product.name}</h2>*/}
                                    {/*                <h4>{product.price}$ x {product.quantity}</h4>*/}
                                    {/*            </div>*/}
                                    {/*            <div className="total-price">*/}
                                    {/*                <h2>{product.price * product.quantity}$</h2>*/}
                                    {/*            </div>*/}
                                    {/*            <button onClick={ () => this.props.remove(product) } type="button" className="close">x</button>*/}
                                    {/*        </div>*/}
                                    {/*    )*/}
                                    {/*}*/}
                                    <div>
                                        <center>
                                            <div className="sub-total">
                                                <h3>SUBTOTAL</h3>
                                                <h3>$</h3>
                                            </div>
                                            <div>
                                                <Button className="checkout-button" color="primary" size="lg"><Link to="/checkout">Checkout</Link></Button>{' '}
                                            </div>
                                        </center>
                                    </div>
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
