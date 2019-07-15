import React, { Component } from 'react';
import propTypes from "prop-types";

export default class ListItem extends Component {
    render() {

        const { item } = this.props;

        return(
            <div className="list-product-description product-description-brd margin-bottom-30">
                <div className="row">
                    <div className="col-sm-4">
                        <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/31.jpg" alt /></a>
                    </div>
                    <div className="col-sm-8 product-description">
                        <div className="overflow-h margin-bottom-5">
                            <ul className="list-inline overflow-h">
                                <li><h4 className="title-price"><a href="shop-ui-inner.html">{item.name}</a></h4></li>
                                <li><span className="gender text-uppercase">Men</span></li>
                                <li className="pull-right">
                                    <ul className="list-inline product-ratings">
                                        <li><i className="rating-selected fa fa-star" /></li>
                                        <li><i className="rating-selected fa fa-star" /></li>
                                        <li><i className="rating-selected fa fa-star" /></li>
                                        <li><i className="rating fa fa-star" /></li>
                                        <li><i className="rating fa fa-star" /></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="margin-bottom-10">
                                <span className="title-price margin-right-10">{item.promotion_price}</span>
                                <span className="title-price line-through">{item.price}</span>
                            </div>
                            <p className="margin-bottom-20">{item.description}</p>
                            <ul className="list-inline add-to-wishlist margin-bottom-20">
                                <li className="wishlist-in">
                                    <i className="fa fa-heart" />
                                    <a href="#">Add to Wishlist</a>
                                </li>
                                <li className="compare-in">
                                    <i className="fa fa-exchange" />
                                    <a href="#">Add to Compare</a>
                                </li>
                            </ul>
                            <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ListItem.propTypes = {
    item: propTypes.object
}

ListItem.defaultProps = {
    item: {
        name: "Shoes tổ ong đậm chất men",
        promotion_price: "50$",
        price: "100$",
        description: "Oh yeahhh, mua ngay, mua ngay"
    }
}