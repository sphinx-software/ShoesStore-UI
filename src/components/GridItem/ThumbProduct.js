import React, { Component } from 'react';
import propTypes            from 'prop-types';
import NavLink              from "reactstrap/es/NavLink";

export default class ThumbProduct extends Component {
    render() {

        const { product } = this.props;

        return(
            <div className="thumb-product">
                <img className="thumb-product-img" src="assets/img/blog/40.jpg" alt={'text'} />
                <div className="thumb-product-in">
                    <h4><NavLink href="shop-ui-inner.html">{ product.name }</NavLink></h4>
                    <span className="thumb-product-type">Footwear - Oxfords</span>
                </div>
                <ul className="list-inline overflow-h">
                    <li className="thumb-product-price line-through">150$</li>
                    <li className="thumb-product-price">{ product.price }</li>
                    <li className="thumb-product-purchase"><NavLink href="#"><i className="fa fa-shopping-cart" /></NavLink> | <NavLink href="#"><i className="fa fa-heart" /></NavLink></li>
                </ul>
            </div>
        )
    }
}

ThumbProduct.propTypes = {
    product: propTypes.object
}

ThumbProduct.defaultProps = {
    product: {
        name: "Bitis",
        price: "100$",
    }
}
