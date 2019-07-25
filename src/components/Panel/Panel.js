import React, { Component } from 'react';
import DropDownList             from "./DropDownList";

export default class Panel extends Component {
    render() {
        return(
            <div className="col-md-3 filter-by-block md-margin-bottom-60">
                <h1>Filter By</h1>
                    <DropDownList />
                <button type="button" className="btn-u btn-brd btn-brd-hover btn-u-lg btn-u-sea-shop btn-block">Reset</button>
            </div>
        );
    }
}
