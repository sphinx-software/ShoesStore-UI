import React, { Component }         from 'react';
import ProductService               from '../components/ProductService/ProductService';
import Quantity                     from "../components/Quantity/Quantity";
import BreadCrumbs                  from "../components/BreadCrumbs/BreadCrumbs";
import Slideshow                    from "../components/GridItem/ItemDetailSilde";
import Nav                          from "reactstrap/es/Nav";
import NavLink                      from "reactstrap/es/NavLink";
import { Button }                   from "reactstrap";
import propTypes                    from "prop-types";


export default class ProductDetailPage extends Component {

    state = {
        quantity : 1,
        name     : 'Shoes',
        cart     : []
    }

    componentWillMount() {
        this.setState({
            totalPrice: this.props.totalPrice
        });
    }

    decrease() {
        this.setState({
            quantity: this.state.quantity > 1 ? --this.state.quantity : 1
        });
    }

    increase() {
        this.setState({
            quantity: ++this.state.quantity
        });
    }


    render() {

        const { totalPrice }       = this.props;
        const { name, quantity }   = this.state;

        return (
            <Nav>
                <div className="wrapper">
                    {/*=== Shop Product ===*/}
                    <div className="shop-product">
                        {/* Breadcrumbs v5 */}
                        <div className="container">
                            <BreadCrumbs page="Products-Detail"/>
                        </div>
                        {/* End Breadcrumbs v5 */}
                        <div className="container">
                            <div >
                                {/* Item Detail Slide*/}
                                <div className="col-md-6 md-margin-bottom-50">
                                    <Slideshow/>
                                </div>

                                <div className="col-md-4 margin-left">
                                    <h2>{ name }</h2>
                                    <ul className="list-inline product-ratings margin-bottom-30">
                                        <li><i className="rating-selected fa fa-star"/></li>
                                        <li><i className="rating-selected fa fa-star"/></li>
                                        <li><i className="rating-selected fa fa-star"/></li>
                                        <li><i className="rating fa fa-star"/></li>
                                        <li><i className="rating fa fa-star"/></li>
                                        <li className="product-review-list">
                                            <span>(1) <NavLink href="#">Review</NavLink> | <NavLink href="#"> Add Review</NavLink></span>
                                        </li>
                                    </ul>
                                    {/*/end shop product ratings*/}
                                    <p>This is <strong>new product</strong> !!</p>
                                    <br/>
                                    <ul className="list-inline shop-product-prices margin-bottom-30">

                                        <li className="shop-red">$ { totalPrice.price * quantity } </li>

                                        <li className="line-through">$ { totalPrice.price * quantity / 2 } </li>

                                        <li><small className="shop-bg-red time-day-left">4 days left</small></li>
                                    </ul>
                                    {/*/end shop product prices*/}

                                    <h3 className="shop-product-title">Quantity</h3>
                                    <div className="margin-bottom-40">
                                        <form name="f1" className="product-quantity sm-margin-bottom-20">
                                            <Quantity decrease={ () => this.decrease() }
                                                      increase={ () => this.increase() }
                                                      value={ quantity }/>
                                        </form>

                                        <Button className="add-to-cart"><NavLink>Add to cart</NavLink></Button>{' '}

                                    </div>
                                    {/*/end product quantity*/}

                                    <ul className="list-inline add-to-wishlist add-to-wishlist-brd">
                                        <li className="wishlist-in">
                                            <i className="fa fa-heart"/>
                                            <NavLink href="#">Add to Wishlist</NavLink>
                                        </li>
                                        <li className="compare-in">
                                            <i className="fa fa-exchange"/>
                                            <NavLink href="#">Add to Compare</NavLink>
                                        </li>
                                    </ul>
                                    <p className="wishlist-category"><strong>Categories:</strong>
                                        <NavLink href="#">Clothing,</NavLink>
                                        <NavLink href="#">Shoes</NavLink></p>
                                </div>
                            </div>
                            {/*/end row*/}
                        </div>
                    </div>
                    {/*=== End Shop Product ===*/}
                    {/*=== Content Medium ===*/}
                    <div className="content-md container">
                        {/*=== Product Service ===*/}
                        <ProductService/>
                        {/*=== End Product Service ===*/}
                    </div>
                    {/*/end container*/}
                </div>
            </Nav>
        );
    }
}

ProductDetailPage.propTypes = {
    totalPrice: propTypes.object,
};

ProductDetailPage.defaultProps = {
    totalPrice: {
        price: 1500
    }
}
