import React, { Component } from 'react';

export default class RelatedItem extends Component {
    render() {
        return(
            <li className="item">
                <a href="#"><img className="img-responsive" src="assets/img/thumb/09.jpg" alt /></a>
                <div className="product-description-v2">
                    <div className="margin-bottom-5">
                        <h4 className="title-price"><a href="#">Double-breasted</a></h4>
                        <span className="title-price">$95.00</span>
                    </div>
                    <ul className="list-inline product-ratings">
                        <li><i className="rating-selected fa fa-star" /></li>
                        <li><i className="rating-selected fa fa-star" /></li>
                        <li><i className="rating-selected fa fa-star" /></li>
                        <li><i className="rating fa fa-star" /></li>
                        <li><i className="rating fa fa-star" /></li>
                    </ul>
                </div>
            </li>
        );
    }
}
