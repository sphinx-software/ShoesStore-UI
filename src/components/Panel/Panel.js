import React, { Component } from 'react';

export default class Panel extends Component {
    render() {
        return(
            <div className="col-md-3 filter-by-block md-margin-bottom-60">
                <h1>Filter By</h1>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    Brands
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
                </div>{/*/end panel group*/}
                <div className="panel-group" id="accordion-v2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion-v2" href="#collapseTwo">
                                    Categories
                                    <i className="fa fa-angle-down" />
                                </a>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse in">
                            <div className="panel-body">
                                <ul className="list-unstyled checkbox-list">
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <i />
                                            Clothes
                                            <small><a href="#">(23)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" defaultChecked />
                                            <i />
                                            Glasses
                                            <small><a href="#">(4)</a></small>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox" />
                                            <i />
                                            Shoes
                                            <small><a href="#">(11)</a></small>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>{/*/end panel group*/}
                <div className="panel-group" id="accordion-v3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion-v3" href="#collapseThree">
                                    Size
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
                </div>{/*/end panel group*/}
                <div className="panel-group" id="accordion-v4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion-v4" href="#collapseFour">
                                    Price
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
                </div>{/*/end panel group*/}
                <div className="panel-group" id="accordion-v5">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion-v5" href="#collapseFive">
                                    Color
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
                </div>{/*/end panel group*/}
                <div className="panel-group margin-bottom-30" id="accordion-v6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion-v6" href="#collapseSix">
                                    Rating
                                    <i className="fa fa-angle-down" />
                                </a>
                            </h2>
                        </div>
                        <div id="collapseSix" className="panel-collapse collapse in">
                            <div className="panel-body">
                                <div className="stars-ratings stars-ratings-label">
                                    <input type="radio" name="stars-rating" id="stars-rating-5" />
                                    <label htmlFor="stars-rating-5"><i className="fa fa-star" /></label>
                                    <input type="radio" name="stars-rating" id="stars-rating-4" />
                                    <label htmlFor="stars-rating-4"><i className="fa fa-star" /></label>
                                    <input type="radio" name="stars-rating" id="stars-rating-3" />
                                    <label htmlFor="stars-rating-3"><i className="fa fa-star" /></label>
                                    <input type="radio" name="stars-rating" id="stars-rating-2" />
                                    <label htmlFor="stars-rating-2"><i className="fa fa-star" /></label>
                                    <input type="radio" name="stars-rating" id="stars-rating-1" />
                                    <label htmlFor="stars-rating-1"><i className="fa fa-star" /></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/end panel group*/}
                <button type="button" className="btn-u btn-brd btn-brd-hover btn-u-lg btn-u-sea-shop btn-block">Reset</button>
            </div>
        );
    }
}