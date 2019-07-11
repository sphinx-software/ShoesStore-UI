import React, { Component } from 'react';

export default class TwitterBlock extends Component {
    render() {
        return (
            <div className="parallaxBg twitter-block margin-bottom-60">
                <div className="container">
                    <div className="heading heading-v1 margin-bottom-20">
                        <h2>Latest Tweets</h2>
                    </div>
                    <div id="carousel-example-generic-v5" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li className="active rounded-x" data-target="#carousel-example-generic-v5" data-slide-to={0} />
                            <li className="rounded-x" data-target="#carousel-example-generic-v5" data-slide-to={1} />
                            <li className="rounded-x" data-target="#carousel-example-generic-v5" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <p>Unify has reached 10000 plus sales and we just want to thank you to our all customers for being part of the Unify Template success <a href="http://bit.ly/1c0UN3Y">http://bit.ly/1c0UN3Y</a></p><p>
                            </p><p><a href="https://twitter.com/htmlstream">@htmlstream</a></p>
                                <ul className="list-inline twitter-icons">
                                    <li><a href="#"><i className="fa fa-reply" /></a></li>
                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" /></a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <p>the majority have suffered #alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                <p><a href="https://twitter.com/htmlstream">@twbootstrap</a></p>
                                <ul className="list-inline twitter-icons">
                                    <li><a href="#"><i className="fa fa-reply" /></a></li>
                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" /></a></li>
                                </ul>
                            </div>
                            <div className="item">
                                <p>New 100% Free Stock Photos. Every. Single. Day. Everything you need for your creative projects. <a href="#">http://publicdomainarchive.com</a></p>
                                <p><a href="https://twitter.com/htmlstream">@wrapbootstrap</a></p>
                                <ul className="list-inline twitter-icons">
                                    <li><a href="#"><i className="fa fa-reply" /></a></li>
                                    <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                    <li><a href="#"><i className="fa fa-star" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="carousel-arrow">
                            <a className="left carousel-control" href="#carousel-example-generic-v5" data-slide="prev">
                                <i className="fa fa-angle-left" />
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic-v5" data-slide="next">
                                <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
