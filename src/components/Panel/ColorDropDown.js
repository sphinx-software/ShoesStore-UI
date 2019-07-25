import React, { Component } from 'react';

export default class ColorDropDown extends Component {
    render() {

        const { title } = this.props;

        return (
            <div>
                <div className="panel-group" id="accordion-v5">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion-v5" href="#collapseFive">
                                    { title}
                                    <i className="fa fa-angle-down" />
                                </a>
                            </h2>
                        </div>
                        <div id="collapseFive" className="panel-collapse collapse in">
                            <div className="panel-body">
                                <ul className="list-inline product-color-list">
                                    <li><a href="#"><img src="assets/img/colors/01.jpg" alt /></a></li>
                                    <li><a href="#"><img src="assets/img/colors/02.jpg" alt /></a></li>
                                    <li><a href="#"><img src="assets/img/colors/03.jpg" alt /></a></li>
                                    <li><a href="#"><img src="assets/img/colors/04.jpg" alt /></a></li>
                                    <li><a href="#"><img src="assets/img/colors/05.jpg" alt /></a></li>
                                    <li><a href="#"><img src="assets/img/colors/06.jpg" alt /></a></li>
                                    <li><a href="#"><img src="assets/img/colors/07.jpg" alt /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
