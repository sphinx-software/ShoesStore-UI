import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../../ui/item/item.css';


import { addToCart }    from  '../../actions/actions';
import { connect }      from  'react-redux';


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
                            <Button onClick={ () => this.viewDetail() } className="quick-review"><a href={`/products/${product.id}`}>Quick review</a></Button>{' '}
                            <Button onClick={ () => this.props.addToCart(product) } className="add-cart"><a>Add to cart</a></Button>{' '}
                        </div>
                    </CardBody>
                </Card>
            </div>
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
