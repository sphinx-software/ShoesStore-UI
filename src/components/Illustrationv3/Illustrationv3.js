import React, { Component } from 'react';

export default class Illustrationv3 extends Component {
    render() {
        return (
            <div className="row margin-bottom-50">
                <div className="col-md-4 md-margin-bottom-30">
                    <div className="overflow-h">
                        <a className="illustration-v3 illustration-img1" href="#">
              <span className="illustration-bg">
                <span className="illustration-ads">
                  <span className="illustration-v3-category">
                    <span className="product-category">Men</span>
                    <span className="product-amount">56 Items</span>
                  </span>
                </span>
              </span>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 md-margin-bottom-30">
                    <div className="overflow-h">
                        <a className="illustration-v3 illustration-img2" href="#">
              <span className="illustration-bg">
                <span className="illustration-ads">
                  <span className="illustration-v3-category">
                    <span className="product-category">Women</span>
                    <span className="product-amount">56 Items</span>
                  </span>
                </span>
              </span>
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="overflow-h">
                        <a className="illustration-v3 illustration-img3" href="#">
              <span className="illustration-bg">
                <span className="illustration-ads">
                  <span className="illustration-v3-category">
                    <span className="product-category">Children</span>
                    <span className="product-amount">56 Items</span>
                  </span>
                </span>
              </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}