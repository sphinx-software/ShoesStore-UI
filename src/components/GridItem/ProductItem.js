import React, { Component } from 'react';
import propTypes            from 'prop-types';


export default class ProductItem extends Component {
    render() {

        const { product } = this.props;

        return (
            <li className="item">
                <div className="product-img">
                    <a href="shop-ui-inner.html"><img className="full-width img-responsive" src="assets/img/blog/09.jpg" alt /></a>
                    <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                    <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart" />Add to cart</a>
                </div>
                <div className="product-description product-description-brd">
                    <div className="overflow-h margin-bottom-5">
                        <div className="pull-left">
                            <h4 className="title-price"><a href="shop-ui-inner.html">{product.name}</a></h4>
                            <span className="gender text-uppercase">{product.gender}</span>
                            <span className="gender">{product.category}</span>
                        </div>
                        <div className="product-price">
                            <span className="title-price">{product.price}</span>
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
        );
    }
}

ProductItem.propTypes = {
    product: propTypes.object
}

ProductItem.defaultProps = {
    product: {
        name: "name4",
        gender: "man",
        category: "cate4",
        price: "300$"
    }
}