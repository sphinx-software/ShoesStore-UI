import React, { Component } from 'react';

export default class Illustrationv1 extends Component {
    render() {
        return (
            <div className="row margin-bottom-60">
                <div className="col-md-6 md-margin-bottom-30">
                    <div className="overflow-h">
                        <div className="illustration-v1 illustration-img1">
                            <div className="illustration-bg">
                                <div className="illustration-ads ad-details-v1">
                                    <h3>NEW YEAR <strong>SALE</strong> 30% - 60% <strong>off</strong></h3>
                                    <a className="btn-u btn-brd btn-brd-hover btn-u-light" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="overflow-h">
                        <a className="illustration-v1 illustration-img2" href="#">
              <span className="illustration-bg">
                <span className="illustration-ads ad-details-v2">
                  <span className="item-time">Spring 2014</span>
                  <span className="item-name">Lacoste</span>
                </span>
              </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}