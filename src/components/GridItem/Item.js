import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../ui/item/item.css';
import {Link} from "react-router-dom";

export default class Item extends Component {

    addToCart() {
        this.props.addToCart();
    }

    viewDetail() {
        this.props.viewDetail();
    }

    render() {

        const { product } = this.props;

        return (
            <div className="col-md-4">
                <Card className="card">
                    <CardImg top width="100%" src={product.image} alt="Card image cap" />
                    <CardBody>
                        <div className="name">
                            <CardTitle><h3><a>{product.name}</a></h3></CardTitle>
                        </div>
                        <div className="gender">
                            <CardSubtitle>{product.gender}</CardSubtitle>
                        </div>
                        <div className="price">
                            <CardText><h3>{product.price}</h3></CardText>
                        </div>
                        <div>
                            <Button onClick={ () => this.viewDetail() } className="quick-review"><Link to={`/products/${product.id}`}>Quick review</Link></Button>{' '}
                            <Button onClick={ () => this.addToCart() } className="add-cart"><a>Add to cart</a></Button>{' '}
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

