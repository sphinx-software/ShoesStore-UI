import React, { Component } from 'react';

import "../../ui/banner/headbanner.css";

export default class HeadBanner extends Component {
    render() {
        return(
            <div className="headbanner">
                <div className="container">
                    <span className="page-name">ShoesStore</span>
                    <h1 className="quote">Choice for everyone</h1>
                </div>
            </div>
        );
    }
}
