import React, { Component } from 'react';

export default class Illustrationv4 extends Component {
    render() {

        const illustrationv4 = [
            1, 2, 3, 4
        ];

        return (
            <div className="row illustration-v2">
                {illustrationv4.map((illustration, index) =>
                    <div className="col-md-3 col-sm-6 md-margin-bottom-30">
                            <div className="product-img">
                                <a href="shop-ui-inner.html"><img className="full-width img-responsive" src="assets/img/blog/25.jpg" alt /></a>
                                <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart" />Add to cart</a>
                            </div>
                            <div className="product-description product-description-brd">
                                <div className="overflow-h margin-bottom-5">
                                    <div className="pull-left">
                                        <h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4>
                                        <span className="gender text-uppercase">Woman</span>
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
                        </div>
                )}
            </div>
        );
    }
}