import React, {Component} from 'react';
import Card from "react-bootstrap/Card";

export default class ProductService extends Component {
    render() {
        return (
            <div>
                <div className="row" style={{display: "flex",
                    flexDirection: "row",
                    alignItems: "inherit",
                    justifyContent: "space-between",
                    textAlign: "center"}} >
                    <Card bg="success" className="col-md-3 product-service md-margin-bottom-30">
                        <i className="fa fa-truck"/>
                        <Card.Body>
                            <Card.Title><h3>Free Delivery</h3></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                            <Card.Link>+Read More</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card bg="success" className="col-md-3 product-service md-margin-bottom-30" >
                        <i className="icon-earphones-alt"/>
                        <Card.Body>
                            <Card.Title><h3>Customer Service</h3></Card.Title>
                            <Card.Text>
                                This card has supporting text belo  w as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Link>+Read More</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card bg="success" className="col-md-3 product-service" >
                        <i className={"icon-refresh"}/>
                        <Card.Body>
                            <Card.Title><h3>Free Returns</h3></Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                            <Card.Link>+Read More</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        );
    }
}
