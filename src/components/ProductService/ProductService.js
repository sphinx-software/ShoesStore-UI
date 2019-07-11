import React, { Component } from 'react';

export default class ProductService extends Component {
    render() {
        return (
            <div className="row margin-bottom-60">
                <div className="col-md-4 product-service md-margin-bottom-30">
                    <div className="product-service-heading">
                        <i className="fa fa-truck" />
                    </div>
                    <div className="product-service-in">
                        <h3>Free Delivery</h3>
                        <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper veliUt porta, leo...</p>
                        <a href="#">+Read More</a>
                    </div>
                </div>
                <div className="col-md-4 product-service md-margin-bottom-30">
                    <div className="product-service-heading">
                        <i className="icon-earphones-alt" />
                    </div>
                    <div className="product-service-in">
                        <h3>Customer Service</h3>
                        <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper veliUt porta, leo...</p>
                        <a href="#">+Read More</a>
                    </div>
                </div>
                <div className="col-md-4 product-service">
                    <div className="product-service-heading">
                        <i className="icon-refresh" />
                    </div>
                    <div className="product-service-in">
                        <h3>Free Returns</h3>
                        <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper veliUt porta, leo...</p>
                        <a href="#">+Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}