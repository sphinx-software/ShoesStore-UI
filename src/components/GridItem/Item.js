import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../ui/item/item.css';

export default class Item extends Component {
    render() {

        const { image, name, gender, price } = this.props;

        return (
            <div className="col-md-4">
                <Card className="card">
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                    <CardBody>
                        <div className="name">
                            <CardTitle><h3><a>{name}</a></h3></CardTitle>
                        </div>
                        <div className="gender">
                            <CardSubtitle>{gender}</CardSubtitle>
                        </div>
                        <div className="price">
                            <CardText><h3>{price}</h3></CardText>
                        </div>
                        <div>
                            <Button className="quick-review"><a href="/products-detail">Quick review</a></Button>{' '}
                            <Button className="add-cart"><a href="/checkout">Add to cart</a></Button>{' '}
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

