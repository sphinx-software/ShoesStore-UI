import React, { Component } from 'react';

export default class Illustrationv2 extends Component {
    render() {

        const illustrationv2 = [
            1, 2, 3, 4, 5, 6
        ];

        return (
            <div className="illustration-v2 margin-bottom-60">
                <div className="customNavigation margin-bottom-25">
                    <a className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></a>
                    <a className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></a>
                </div>
                <ul className="list-inline owl-slider">
                {
                    illustrationv2.map((illustration, index) =>
                        <li className="item">
                            <div className="product-img">
                                <a href="shop-ui-inner.html"><img className="full-width img-responsive" src="assets/img/blog/09.jpg" alt /></a>
                                <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart" />Add to cart</a>
                            </div>
                            <div className="product-description product-description-brd">
                                <div className="overflow-h margin-bottom-5">
                                    <div className="pull-left">
                                        <h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4>
                                        <span className="gender text-uppercase">Men</span>
                                        <span className="gender">Suits - Blazers</span>
                                    </div>
                                    <div className="product-price">
                                        <span className="title-price">$95.00</span>
                                    </div>
                                </div>
                                <ul className="list-inline product-ratings">
                                    <li><i className="rating-selected fa fa-star" /></li>
                                    <li><i className="rating-selected fa fa-star" /></li>
                                    <li><i className="rating-selected fa fa-star" /></li>
                                    <li><i className="rating fa fa-star" /></li>
                                    <li><i className="rating fa fa-star" /></li>
                                    <li className="like-icon"><a data-original-title="Add to wishlist" data-toggle="tooltip" data-placement="left" className="tooltips" href="#"><i className="fa fa-heart" /></a></li>
                                </ul>
                            </div>
                        </li>
                    )
                }
                </ul>
            </div>
        );
    }
}