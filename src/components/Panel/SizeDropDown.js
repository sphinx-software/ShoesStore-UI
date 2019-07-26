import React, { Component } from 'react';

export default class SizeDropDown extends Component {
    render() {

        const { title } = this.props;

        return(
            <div className="panel-group" id="accordion-v3">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion-v3" href="#collapseThree">
                                { title }
                                <i className="fa fa-angle-down" />
                            </a>
                        </h2>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <ul className="list-unstyled checkbox-list">
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox" />
                                        <i />
                                        S
                                        <small><a href="#">(23)</a></small>
                                    </label>
                                </li>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox" defaultChecked />
                                        <i />
                                        M
                                        <small><a href="#">(4)</a></small>
                                    </label>
                                </li>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox" />
                                        <i />
                                        L
                                        <small><a href="#">(11)</a></small>
                                    </label>
                                </li>
                                <li>
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox" />
                                        <i />
                                        XL
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
