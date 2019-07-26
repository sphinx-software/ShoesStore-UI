import React, { Component } from 'react';

export default class BrandsDropDown extends Component {
    render() {

        const { title } = this.props;

        return (
            <div>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    { title }
                                    <i className="fa fa-angle-down" />
                                </a>
                            </h2>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in">
                            <div className="panel-body">
                                <ul className="list-unstyled checkbox-list">
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <i />
                                            Calvin Klein
                                            <small><a href="#">(23)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <i />
                                            Gucci
                                            <small><a href="#">(4)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i />
                                            Adidas
                                            <small><a href="#">(11)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i />
                                            Puma
                                            <small><a href="#">(3)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i />
                                            Zara
                                            <small><a href="#">(87)</a></small>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
