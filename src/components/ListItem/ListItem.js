import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return(
            <div className="col-md-9">
                <div className="row margin-bottom-5">
                    <div className="col-sm-4 result-category">
                        <h2>Men</h2>
                        <small className="shop-bg-red badge-results">45 Results</small>
                    </div>
                    <div className="col-sm-8">
                        <ul className="list-inline clear-both">
                            <li className="grid-list-icons">
                                <a href="shop-ui-filter-list.html"><i className="fa fa-th-list" /></a>
                                <a href="shop-ui-filter-grid.html"><i className="fa fa-th" /></a>
                            </li>
                            <li className="sort-list-btn">
                                <h3>Sort By :</h3>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                        Popularity <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="#">All</a></li>
                                        <li><a href="#">Best Sales</a></li>
                                        <li><a href="#">Top Last Week Sales</a></li>
                                        <li><a href="#">New Arrived</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sort-list-btn">
                                <h3>Show :</h3>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                        20 <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="#">All</a></li>
                                        <li><a href="#">10</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">3</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>{/*/end result category*/}
                <div className="filter-results">
                    <div className="list-product-description product-description-brd margin-bottom-30">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/16.jpg" alt /></a>
                            </div>
                            <div className="col-sm-8 product-description">
                                <div className="overflow-h margin-bottom-5">
                                    <ul className="list-inline overflow-h">
                                        <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                        <li><span className="gender text-uppercase">Men</span></li>
                                        <li className="pull-right">
                                            <ul className="list-inline product-ratings">
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="margin-bottom-10">
                                        <span className="title-price margin-right-10">$60.00</span>
                                        <span className="title-price line-through">$95.00</span>
                                    </div>
                                    <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                    <ul className="list-inline add-to-wishlist margin-bottom-20">
                                        <li className="wishlist-in">
                                            <i className="fa fa-heart" />
                                            <a href="#">Add to Wishlist</a>
                                        </li>
                                        <li className="compare-in">
                                            <i className="fa fa-exchange" />
                                            <a href="#">Add to Compare</a>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-product-description product-description-brd margin-bottom-30">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/17.jpg" alt /></a>
                            </div>
                            <div className="col-sm-8 product-description">
                                <div className="overflow-h margin-bottom-5">
                                    <ul className="list-inline overflow-h">
                                        <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                        <li><span className="gender text-uppercase">Men</span></li>
                                        <li className="pull-right">
                                            <ul className="list-inline product-ratings">
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="margin-bottom-10">
                                        <span className="title-price margin-right-10">$60.00</span>
                                        <span className="title-price line-through">$95.00</span>
                                    </div>
                                    <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                    <ul className="list-inline add-to-wishlist margin-bottom-20">
                                        <li className="wishlist-in">
                                            <i className="fa fa-heart" />
                                            <a href="#">Add to Wishlist</a>
                                        </li>
                                        <li className="compare-in">
                                            <i className="fa fa-exchange" />
                                            <a href="#">Add to Compare</a>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-product-description product-description-brd margin-bottom-30">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/21.jpg" alt /></a>
                            </div>
                            <div className="col-sm-8 product-description">
                                <div className="overflow-h margin-bottom-5">
                                    <ul className="list-inline overflow-h">
                                        <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                        <li><span className="gender text-uppercase">Men</span></li>
                                        <li className="pull-right">
                                            <ul className="list-inline product-ratings">
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="margin-bottom-10">
                                        <span className="title-price margin-right-10">$60.00</span>
                                        <span className="title-price line-through">$95.00</span>
                                    </div>
                                    <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                    <ul className="list-inline add-to-wishlist margin-bottom-20">
                                        <li className="wishlist-in">
                                            <i className="fa fa-heart" />
                                            <a href="#">Add to Wishlist</a>
                                        </li>
                                        <li className="compare-in">
                                            <i className="fa fa-exchange" />
                                            <a href="#">Add to Compare</a>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-product-description product-description-brd margin-bottom-30">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/22.jpg" alt /></a>
                            </div>
                            <div className="col-sm-8 product-description">
                                <div className="overflow-h margin-bottom-5">
                                    <ul className="list-inline overflow-h">
                                        <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                        <li><span className="gender text-uppercase">Men</span></li>
                                        <li className="pull-right">
                                            <ul className="list-inline product-ratings">
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="margin-bottom-10">
                                        <span className="title-price margin-right-10">$60.00</span>
                                        <span className="title-price line-through">$95.00</span>
                                    </div>
                                    <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                    <ul className="list-inline add-to-wishlist margin-bottom-20">
                                        <li className="wishlist-in">
                                            <i className="fa fa-heart" />
                                            <a href="#">Add to Wishlist</a>
                                        </li>
                                        <li className="compare-in">
                                            <i className="fa fa-exchange" />
                                            <a href="#">Add to Compare</a>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-product-description product-description-brd">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/23.jpg" alt /></a>
                            </div>
                            <div className="col-sm-8 product-description">
                                <div className="overflow-h margin-bottom-5">
                                    <ul className="list-inline overflow-h">
                                        <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                        <li><span className="gender text-uppercase">Men</span></li>
                                        <li className="pull-right">
                                            <ul className="list-inline product-ratings">
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating-selected fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                                <li><i className="rating fa fa-star" /></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="margin-bottom-10">
                                        <span className="title-price margin-right-10">$60.00</span>
                                        <span className="title-price line-through">$95.00</span>
                                    </div>
                                    <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                    <ul className="list-inline add-to-wishlist margin-bottom-20">
                                        <li className="wishlist-in">
                                            <i className="fa fa-heart" />
                                            <a href="#">Add to Wishlist</a>
                                        </li>
                                        <li className="compare-in">
                                            <i className="fa fa-exchange" />
                                            <a href="#">Add to Compare</a>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/end filter resilts*/}
                <div className="text-center">
                    <ul className="pagination pagination-v2">
                        <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}