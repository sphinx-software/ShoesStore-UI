import React, { Component } from 'react';
import propTypes            from 'prop-types';
import Nav                  from "reactstrap/es/Nav";
import {NavLink}            from "react-router-dom";
import Button               from "reactstrap/es/Button";


export default class ProductItem extends Component {
    render() {

        const { product } = this.props;

        return (
            <Nav>
                <li className="item">
                    <div className="product-img">
                        <NavLink href="/products-detail"><img className="full-width img-responsive" src={product.img} alt={'product-page'}/></NavLink>
                        <NavLink className="product-review" href="/products-detail">Quick review</NavLink>
                        <NavLink className="add-to-cart" href="/checkout"><i className="fa fa-shopping-cart" />Add to cart</NavLink>
                    </div>
                    <div className="product-description product-description-brd">
                        <div className="overflow-h margin-bottom-5">
                            <div className="pull-left">
                                <h4 className="title-price"><NavLink href="shop-ui-inner.html">{product.name}</NavLink></h4>
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
                            <li className="like-icon">
                                <Button data-original-title="Add to wishlist" data-toggle="tooltip" data-placement="left" className="tooltips" href="#">
                                    <i className="fa fa-heart" />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </li>
            </Nav>

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
        price: "300$",
        img: "assets/img/blog/41.jpg"
    }
}
