import React, { Component } from 'react';

export default class CollectionBanner extends Component {
    render() {
        return (
            <div className="collection-banner">
                <div className="container">
                    <div className="col-md-7 md-margin-bottom-50">
                        <h2>Makeup collection</h2>
                        <p>Duis in posuere risus. Vivamus sed dignissim tellus. In vehicula justo tempor commodo. <br /> Nunc lobortis dapibus neque quis lacinia</p><br />
                        <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-light">Shop Now</a>
                    </div>
                    <div className="col-md-5">
                        <div className="overflow-h">
                            <span className="percent-numb">50</span>
                            <div className="percent-off">
                                <span className="discount-percent">%</span>
                                <span className="discount-off">off</span>
                            </div>
                            <div className="new-offers shop-bg-green rounded-x">
                                <p>new</p>
                                <span>Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
