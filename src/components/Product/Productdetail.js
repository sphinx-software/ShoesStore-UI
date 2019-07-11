import React, {Component} from 'react';

export default class Productdetailtail extends Component{
    render() {
        return(
            <div>
                <div className="shop-product">
                    <div className="container">
                        <ul className="breadcrumb-v5">
                            <li><a href="index.html"><i className="fa fa-home"/></a></li>
                            <li><a href="#">Products</a></li>
                            <li className="active">New</li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 md-margin-bottom-50">
                                <div className="ms-showcase2-template">
                                    <div className="master-slider ms-skin-default" id="masterslider">
                                        <div className="ms-slide">
                                            <img className="ms-brd" src="assets/img/blank.gif"
                                                 data-src="assets/img/blog/28.jpg" alt="lorem ipsum dolor sit"/>
                                            <img className="ms-thumb" src="assets/img/blog/28-thumb.jpg" alt="thumb"/>
                                        </div>
                                        <div className="ms-slide">
                                            <img src="assets/img/blank.gif" data-src="assets/img/blog/29.jpg"
                                                 alt="lorem ipsum dolor sit"/>
                                            <img className="ms-thumb" src="assets/img/blog/29-thumb.jpg" alt="thumb"/>
                                        </div>
                                        <div className="ms-slide">
                                            <img src="assets/img/blank.gif" data-src="assets/img/blog/30.jpg"
                                                 alt="lorem ipsum dolor sit"/>
                                            <img className="ms-thumb" src="assets/img/blog/30-thumb.jpg" alt="thumb"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="shop-product-heading">
                                    <h2>Corinna Foley</h2>
                                    <ul className="list-inline shop-product-social">
                                        <li><a href="#"><i className="fa fa-facebook"/></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"/></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest"/></a></li>
                                    </ul>
                                </div>
                                <ul className="list-inline product-ratings margin-bottom-30">
                                    <li><i className="rating-selected fa fa-star"/></li>
                                    <li><i className="rating-selected fa fa-star"/></li>
                                    <li><i className="rating-selected fa fa-star"/></li>
                                    <li><i className="rating fa fa-star"/></li>
                                    <li><i className="rating fa fa-star"/></li>
                                    <li className="product-review-list">
                                        <span>(1) <a href="#">Review</a> | <a href="#"> Add Review</a></span>
                                    </li>
                                </ul>
                                <p>Integer <strong>dapibus ut elit</strong> non volutpat. Integer auctor purus a lectus
                                    suscipit fermentum. Vivamus lobortis nec erat consectetur elementum.</p><br/>
                                <ul className="list-inline shop-product-prices margin-bottom-30">
                                    <li className="shop-red">$57.00</li>
                                    <li className="line-through">$70.00</li>
                                    <li>
                                        <small className="shop-bg-red time-day-left">4 days left</small>
                                    </li>
                                </ul>
                                <h3 className="shop-product-title">Size</h3>
                                <ul className="list-inline product-size margin-bottom-30">
                                    <li>
                                        <input type="radio" id="size-1" name="size"/>
                                        <label htmlFor="size-1">S</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size-2" name="size"/>
                                        <label htmlFor="size-2">M</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size-3" name="size" defaultChecked/>
                                        <label htmlFor="size-3">L</label>
                                    </li>
                                    <li>
                                        <input type="radio" id="size-4" name="size"/>
                                        <label htmlFor="size-4">XL</label>
                                    </li>
                                </ul>
                                <h3 className="shop-product-title">Color</h3>
                                <ul className="list-inline product-color margin-bottom-30">
                                    <li>
                                        <input type="radio" id="color-1" name="color"/>
                                        <label className="color-one" htmlFor="color-1"/>
                                    </li>
                                    <li>
                                        <input type="radio" id="color-2" name="color" defaultChecked/>
                                        <label className="color-two" htmlFor="color-2"/>
                                    </li>
                                    <li>
                                        <input type="radio" id="color-3" name="color"/>
                                        <label className="color-three" htmlFor="color-3"/>
                                    </li>
                                </ul>
                                <h3 className="shop-product-title">Quantity</h3>
                                <div className="margin-bottom-40">
                                    <form name="f1" className="product-quantity sm-margin-bottom-20">
                                        <button type="button" className="quantity-button" name="subtract"
                                                onClick="javascript: subtractQty();" value="-">-
                                        </button>
                                        <input type="text" className="quantity-field" name="qty" defaultValue={1}
                                               id="qty"/>
                                        <button type="button" className="quantity-button" name="add"
                                                onClick="javascript: document.getElementById(&quot;qty&quot;).value++;"
                                                value="+">+
                                        </button>
                                    </form>
                                    <button type="button" className="btn-u btn-u-sea-shop btn-u-lg">Add to Cart</button>
                                </div>
                                <ul className="list-inline add-to-wishlist add-to-wishlist-brd">
                                    <li className="wishlist-in">
                                        <i className="fa fa-heart"/>
                                        <a href="#">Add to Wishlist</a>
                                    </li>
                                    <li className="compare-in">
                                        <i className="fa fa-exchange"/>
                                        <a href="#">Add to Compare</a>
                                    </li>
                                </ul>
                                <p className="wishlist-category"><strong>Categories:</strong> <a href="#">Clothing,</a>
                                    <a href="#">Shoes</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-md container">
                    <div className="row margin-bottom-60">
                        <div className="col-md-4 product-service md-margin-bottom-30">
                            <div className="product-service-heading">
                                <i className="fa fa-truck"/>
                            </div>
                            <div className="product-service-in">
                                <h3>Free Delivery</h3>
                                <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar
                                    semper veliUt porta, leo...</p>
                                <a href="#">+Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 product-service md-margin-bottom-30">
                            <div className="product-service-heading">
                                <i className="icon-earphones-alt"/>
                            </div>
                            <div className="product-service-in">
                                <h3>Customer Service</h3>
                                <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar
                                    semper veliUt porta, leo...</p>
                                <a href="#">+Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 product-service">
                            <div className="product-service-heading">
                                <i className="icon-refresh"/>
                            </div>
                            <div className="product-service-in">
                                <h3>Free Returns</h3>
                                <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar
                                    semper veliUt porta, leo...</p>
                                <a href="#">+Read More</a>
                            </div>
                        </div>
                    </div>
                    {/*/end row*/}
                    {/*=== End Product Service ===*/}
                    <div className="tab-v6">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#description" role="tab" data-toggle="tab">Description</a>
                            </li>
                            <li><a href="#reviews" role="tab" data-toggle="tab">Reviews (1)</a></li>
                        </ul>
                        <div className="tab-content">
                            {/* Description */}
                            <div className="tab-pane fade in active" id="description">
                                <div className="row">
                                    <div className="col-md-7">
                                        <p>Morbi non semper est, eget tincidunt turpis. Vivamus sollicitudin sodales
                                            nisi, et venenatis turpis Vivamus sollicitudin ultricies eget. Fusce vitae
                                            neque blandit lectus faucibus aliquet nec vel ipsum. Integer mattis lacinia
                                            felis vel sollicitudin molestie.</p><br/>
                                        <h3 className="heading-md margin-bottom-20">Specifies</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="list-unstyled specifies-list">
                                                    <li><i className="fa fa-caret-right"/>Brand
                                                        Name: <span>Lacoste</span></li>
                                                    <li><i
                                                        className="fa fa-caret-right"/>Technics: <span>Computer</span> Knitted
                                                    </li>
                                                    <li><i className="fa fa-caret-right"/>Sleeve
                                                        Length: <span>Full</span></li>
                                                    <li><i className="fa fa-caret-right"/>Sleeve
                                                        Style: <span>Regular</span></li>
                                                    <li><i className="fa fa-caret-right"/>Pattern
                                                        Type: <span>PAID</span></li>
                                                    <li><i className="fa fa-caret-right"/>Style: <span>Casual</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list-unstyled specifies-list">
                                                    <li><i
                                                        className="fa fa-caret-right"/>Material: <span>Cotton,Nylon</span>
                                                    </li>
                                                    <li><i className="fa fa-caret-right"/>Item
                                                        Type: <span>Pullovers</span></li>
                                                    <li><i className="fa fa-caret-right"/>Thickness: <span>Thin</span>
                                                    </li>
                                                    <li><i className="fa fa-caret-right"/>Model
                                                        Number: <span>TM-11013 </span></li>
                                                    <li><i className="fa fa-caret-right"/>Gender: <span>Men</span></li>
                                                    <li><i
                                                        className="fa fa-caret-right"/>MATERIAL: <span>80%COTTON+10%NYLON</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="responsive-video">
                                            <iframe src="//player.vimeo.com/video/72343553" frameBorder={0}
                                                    webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                            {'}'}
                            {'}'}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}