import React, {Component}           from 'react';
import ProductService               from '../components/ProductService/ProductService';
import Quantity                     from "../components/Quantity/Quantity";
import propTypes                    from "prop-types";
import BreadCrumbs                  from "../components/BreadCrumbs/BreadCrumbs";

import Nav                          from "reactstrap/es/Nav";
import NavLink                      from "reactstrap/es/NavLink";
import Slideshow                    from "../components/GridItem/ItemDetailSilde";
import {Button} from "reactstrap";


export default class ProductDetailPage extends Component {
    constructor() {
        super();
        this.state = {
            quantity: 1,
            name: 'Shoes',
            cart: []
        };
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

        const { totalPrice } = this.props;
        const { quantity }   = this.state;

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
                                    <h2>{this.state.name}</h2>
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
                                    <h3 className="shop-product-title">Size</h3>
                                    <ul className="list-inline product-size margin-bottom-30">
                                        <li>
                                            <input type="radio" id="size-1" name="size"/>
                                            <label htmlFor="size-1">S</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="size-2" name="size"/>
                                            <label htmlFor="size-2">M</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="size-3" name="size" defaultChecked/>
                                            <label htmlFor="size-3">L</label>
                                        </li>

                                    </ul>
                                    {/*/end product size*/}
                                    <h3 className="shop-product-title">Color</h3>
                                    <ul className="list-inline product-color margin-bottom-30">
                                        <li>
                                            <input type="radio" id="color-1" name="color"/>
                                            <label className="color-one" htmlFor="color-1"/>
                                        </li>
                                        <li>
                                            <input type="radio" id="color-2" name="color" defaultChecked/>
                                            <label className="color-two" htmlFor="color-2"/>
                                        </li>
                                        <li>
                                            <input type="radio" id="color-3" name="color"/>
                                            <label className="color-three" htmlFor="color-3"/>
                                        </li>
                                    </ul>
                                    {/*/end product color*/}
                                    <h3 className="shop-product-title">Quantity</h3>
                                    <div className="margin-bottom-40">
                                        <form name="f1" className="product-quantity sm-margin-bottom-20">
                                            <Quantity decrease={() => this.decrease()}
                                                      increase={() => this.increase()}
                                                      value={this.state.quantity}/>
                                        </form>

                                        <Button className="add-cart"><NavLink>Add to cart</NavLink></Button>{' '}

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
                    {/*=== Illustration v2 ===*/}
                    <div className="container">
                        <div className="heading heading-v1 margin-bottom-20">
                            <h2>Related products</h2>
                        </div>
                        <div className="illustration-v2 margin-bottom-60">
                            <div className="customNavigation margin-bottom-25">
                                <NavLink className="owl-btn prev rounded-x"><i className="fa fa-angle-left"/></NavLink>
                                <NavLink className="owl-btn next rounded-x"><i className="fa fa-angle-right"/></NavLink>
                            </div>
                            <ul className="list-inline owl-slider-v4">
                                {/*{*/}
                                {/*    items.map((item, index) => {*/}
                                {/*        return(<RelatedItem/>)*/}
                                {/*    })*/}
                                {/*}*/}
                            </ul>
                        </div>
                    </div>
                    {/*=== End Illustration v2 ===*/}
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
