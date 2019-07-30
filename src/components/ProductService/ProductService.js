import React, {Component} from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

export default class ProductService extends Component {
    render() {
        return (
            <CardDeck className="row margin-bottom-60">
                <Card className="col-md-4 product-service md-margin-bottom-30">
                        <i className="fa fa-truck"/>
                        <Card.Body>
                            <Card.Title>Free Delivery</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                            <Card.Link>+Read More</Card.Link>
                        </Card.Body>
                </Card>

                <Card className="col-md-4 product-service md-margin-bottom-30" >
                    <i className="icon-earphones-alt"/>
                    <Card.Body>
                        <Card.Title>Customer Service</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        <Card.Link>+Read More</Card.Link>
                    </Card.Body>
                </Card>

                <Card className="col-md-4 product-service" >
                    <i className={"icon-refresh"}/>
                    <Card.Body>
                        <Card.Title>Free Returns</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        <Card.Link>+Read More</Card.Link>
                    </Card.Body>
                </Card>

                <div className="row margin-bottom-60">
                    <div className="col-md-4 product-service md-margin-bottom-30">
                        <div className="product-service-heading">
                            <i className="fa fa-truck"/>
                        </div>
                        <div className="product-service-in">
                            <h3>Free Delivery</h3>
                            <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper
                                veliUt porta, leo...</p>
                            <a href="#">+Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 product-service md-margin-bottom-30">
                        <div className="product-service-heading">
                            <i className="icon-earphones-alt"/>
                        </div>
                        <div className="product-service-in">
                            <h3>Customer Service</h3>
                            <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper
                                veliUt porta, leo...</p>
                            <a href="#">+Read More</a>
                        </div>
                    </div>

                    <div className="col-md-4 product-service">
                        <div className="product-service-heading">
                            <i className="icon-refresh"/>
                        </div>
                        <div className="product-service-in">
                            <h3>Free Returns</h3>
                            <p>Integer mattis lacinia felis vel molestie. Ut eu euismod erat, tincidunt pulvinar semper
                                veliUt porta, leo...</p>
                            <a href="#">+Read More</a>
                        </div>
                    </div>
                </div>
            </CardDeck>
        );
    }
}