import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../ui/item/item.css';


import { addToCart }    from  '../../actions/actions';
import { connect }      from  'react-redux';
import Nav from "reactstrap/es/Nav";
import NavLink from "reactstrap/es/NavLink";


class Item extends Component {

    viewDetail() {
        let products      = [...this.state.products];
        const id          = this.props.match.id;
        const viewCarts   = products.find(product => product.id === id)
        this.setState({
            products: viewCarts
        })
    }

    render() {

        const { product } = this.props;

        return (
            <Nav className="col-md-4">
                <div>
                <Card className="card">
                    <CardImg top width="100%" src={product.image} alt="Card image cap" />
                    <CardBody>
                        <div className="name">
                            <CardTitle><h3><NavLink>{product.name}</NavLink></h3></CardTitle>
                        </div>
                        <div className="gender">
                            <CardSubtitle>{product.gender}</CardSubtitle>
                        </div>
                        <div className="price">
                            <CardText><h3>{product.price}</h3></CardText>
                        </div>
                        <div>
                            <Button onClick={ () => this.viewDetail() } className="quick-review"><NavLink href={`/products/${product.id}`}>Quick review</NavLink></Button>{' '}
                            <Button onClick={ () => this.props.addToCart(product) } className="add-cart"><NavLink>Add to cart</NavLink></Button>{' '}
                        </div>
                    </CardBody>
                </Card>
            </div>
            </Nav>
        )
    }
}


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
