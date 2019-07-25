import React, { Component } from 'react';

export default class PriceDropDown extends Component {
    render() {

        const { title } = this.props;

        return(
            <div className="panel-group" id="accordion-v4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion-v4" href="#collapseFour">
                                { title }
                                <i className="fa fa-angle-down" />
                            </a>
                        </h2>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <ul className="list-unstyled checkbox-list">
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox"/>
                                        <i></i>
                                        0-100$
                                        <small><a href="#">(23)</a></small>
                                    </label>
                                </li>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox"/>
                                        <i></i>
                                        100$-300$
                                        <small><a href="#">(4)</a></small>
                                    </label>
                                </li>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox"/>
                                        <i></i>
                                        300-700$
                                        <small><a href="#">(11)</a></small>
                                    </label>
                                </li>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox"/>
                                        <i></i>
                                        700$-1500$
                                        <small><a href="#">(3)</a></small>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
