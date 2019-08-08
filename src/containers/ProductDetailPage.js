import React, {Component}           from 'react';
import {Link}                       from "react-router-dom";
import ProductService               from '../components/ProductService/ProductService';
import Quantity                     from "../components/Quantity/Quantity";
import propTypes                    from "prop-types";
import BreadCrumbs                  from "../components/BreadCrumbs/BreadCrumbs";

import Nav                          from "reactstrap/es/Nav";
import NavLink                      from "reactstrap/es/NavLink";


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
        })
    };

    increase() {
        this.setState({
            quantity: ++this.state.quantity
        })
    };


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
                            <div className="row">
                                <div className="col-md-6 md-margin-bottom-50">
                                </div>
                                <div className="col-md-6">
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

                                        <Link to="/checkout" className="btn-u btn-u-sea-shop btn-u-lg">
                                            Add to Cart
                                        </Link>
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
                        <div className="tab-v6">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="active">
                                    <NavLink href="#description" role="tab" data-toggle="tab">Description</NavLink>
                                </li>
                                <li>
                                    <NavLink href="#reviews" role="tab" data-toggle="tab">Reviews (1)</NavLink>
                                </li>
                            </ul>
                            <div className="tab-content">
                                {/* Description */}
                                <div className="tab-pane fade in active" id="description">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <p>This is new product !!</p><br/>
                                            <h3 className="heading-md margin-bottom-20">Specifies</h3>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <ul className="list-unstyled specifies-list">
                                                        <li><i className="fa fa-caret-right"/>Brand
                                                            Name: <span>Lacoste</span></li>
                                                        <li><i
                                                            className="fa fa-caret-right"/>Technics: <span>Computer</span> Knitted
                                                        </li>
                                                        <li><i className="fa fa-caret-right"/>Sleeve
                                                            Length: <span>Full</span></li>
                                                        <li><i className="fa fa-caret-right"/>Sleeve
                                                            Style: <span>Regular</span></li>
                                                        <li><i className="fa fa-caret-right"/>Pattern
                                                            Type: <span>PAID</span></li>
                                                        <li><i className="fa fa-caret-right"/>Style: <span>Casual</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6">
                                                    <ul className="list-unstyled specifies-list">
                                                        <li><i
                                                            className="fa fa-caret-right"/>Material: <span>Cotton,Nylon</span>
                                                        </li>
                                                        <li><i className="fa fa-caret-right"/>Item
                                                            Type: <span>Pullovers</span></li>
                                                        <li><i
                                                            className="fa fa-caret-right"/>Thickness: <span>Thin</span>
                                                        </li>
                                                        <li><i className="fa fa-caret-right"/>Model
                                                            Number: <span>TM-11013 </span></li>
                                                        <li><i className="fa fa-caret-right"/>Gender: <span>Men</span>
                                                        </li>
                                                        <li><i
                                                            className="fa fa-caret-right"/>MATERIAL: <span>80%COTTON+10%NYLON</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="responsive-video">
                                                <iframe src="//player.vimeo.com/video/72343553" frameBorder={0}
                                                        webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Description */}
                                {/* Reviews */}
                                <div className="tab-pane fade" id="reviews">
                                    <div className="product-comment margin-bottom-40">
                                        <div className="product-comment-in">
                                            <img className="product-comment-img rounded-x" src="/assets/img/team/01.jpg"
                                                 alt={'product-comment-img'}/>
                                            <div className="product-comment-dtl">
                                                <h4>Mickel <small>22 days ago</small></h4>
                                                <p>I like the green colour, it's very likeable and reminds me of
                                                    Hollister. A little loose though but I am very skinny</p>
                                                <ul className="list-inline product-ratings">
                                                    <li className="reply">
                                                        <NavLink href="#">Reply</NavLink>
                                                    </li>
                                                    <li className="pull-right">
                                                        <ul className="list-inline">
                                                            <li><i className="rating-selected fa fa-star"/></li>
                                                            <li><i className="rating-selected fa fa-star"/></li>
                                                            <li><i className="rating-selected fa fa-star"/></li>
                                                            <li><i className="rating fa fa-star"/></li>
                                                            <li><i className="rating fa fa-star"/></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="heading-md margin-bottom-30">Add a review</h3>
                                    <form action="assets/php/demo-contacts-process.php" method="post" id="sky-form3"
                                          className="sky-form sky-changes-4">
                                        <fieldset>
                                            <div className="margin-bottom-30">
                                                <label className="label-v2">Name</label>
                                                <label className="input">
                                                    <input type="text" name="name" id="name"/>
                                                </label>
                                            </div>
                                            <div className="margin-bottom-30">
                                                <label className="label-v2">Email</label>
                                                <label className="input">
                                                    <input type="email" name="email" id="email"/>
                                                </label>
                                            </div>
                                            <div className="margin-bottom-30">
                                                <label className="label-v2">Review</label>
                                                <label className="textarea">
                                                    <textarea rows={7} name="message" id="message" defaultValue={""}/>
                                                </label>
                                            </div>
                                        </fieldset>
                                        <footer className="review-submit">
                                            <label className="label-v2">Review</label>
                                            <div className="stars-ratings">
                                                <input type="radio" name="stars-rating" id="stars-rating-5"/>
                                                <label htmlFor="stars-rating-5"><i className="fa fa-star"/></label>
                                                <input type="radio" name="stars-rating" id="stars-rating-4"/>
                                                <label htmlFor="stars-rating-4"><i className="fa fa-star"/></label>
                                                <input type="radio" name="stars-rating" id="stars-rating-3"/>
                                                <label htmlFor="stars-rating-3"><i className="fa fa-star"/></label>
                                                <input type="radio" name="stars-rating" id="stars-rating-2"/>
                                                <label htmlFor="stars-rating-2"><i className="fa fa-star"/></label>
                                                <input type="radio" name="stars-rating" id="stars-rating-1"/>
                                                <label htmlFor="stars-rating-1"><i className="fa fa-star"/></label>
                                            </div>
                                            <button type="button"
                                                    className="btn-u btn-u-sea-shop btn-u-sm pull-right">Submit
                                            </button>
                                        </footer>
                                    </form>
                                </div>
                                {/* End Reviews */}
                            </div>
                        </div>
                    </div>
                    {/*/end container*/}
                    {/*=== End Content Medium ===*/}
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
