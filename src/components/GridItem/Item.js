import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Item extends Component {
    render() {
        const { item } = this.props;

        return (
            <div className="col-md-4">
                <div className="product-img product-img-brd">
                    <a href="#"><img className="full-width img-responsive" src="assets/img/blog/16.jpg" alt="" /></a>
                    <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                    <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart" />Add to cart</a>
                    <div className="shop-rgba-dark-green rgba-banner">New</div>
                </div>
                <div className="product-description product-description-brd margin-bottom-30">
                    <div className="overflow-h margin-bottom-5">
                    <div className="pull-left">
                        <h4 className="title-price"><a href="shop-ui-inner.html">{item.name}</a></h4>
                        <span className="gender text-uppercase">{item.gender}</span>
                    </div>
                    <div className="product-price">
                        <span className="title-price">{item.price}</span>
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
        )
    }
}

Item.propTypes = {
    item: propTypes.object
}

Item.defaultProps = {
    item: {
        name: 'quan',
        gender: 'nam',
        price: '100$'
    }
}