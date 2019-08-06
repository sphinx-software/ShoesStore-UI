import React, { Component } from 'react';
import Nav from "reactstrap/es/Nav";
import NavLink from "reactstrap/es/NavLink";

export default class SaleBanner extends Component {
    render() {

        const saleBanners = [
            1, 2
        ];

        return (
            <Nav>
                <div className="row margin-bottom-60">
                    {
                        saleBanners.map((saleBanner, index) =>
                            <div className="col-md-6 md-margin-bottom-30">
                                <div className="overflow-h">
                                    <div className="illustration-v1 illustration-img1">
                                        <div className="illustration-bg">
                                            <div className="illustration-ads ad-details-v1">
                                                <h3>NEW YEAR <strong>SALE</strong> 30% - 60% <strong>off</strong></h3>
                                                <NavLink className="btn-u btn-brd btn-brd-hover btn-u-light" href="#">Shop Now</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Nav>
        );
    }
}
