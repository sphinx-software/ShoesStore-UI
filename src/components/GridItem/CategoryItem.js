import React, { Component }         from 'react';
import propTypes                    from 'prop-types';
import Nav                          from "reactstrap/es/Nav";
import { Card, CardImg, CardBody }  from 'reactstrap';


export default class CategoryItem extends Component {

    render() {

        const { category } = this.props;

        return (
            <div className="col-md-4 md-margin-bottom-30">
                <div className="overflow-h">
                    <Nav className="illustration-v3 illustration-img1" href="#">
                        <div>
                        <Card className="card">
                            <CardImg top width="100%" src={category.img} alt="Card image cap" />
                            <CardBody>
                                <span className="product-category">{category.name}</span>
                            </CardBody>
                        </Card>
                        </div>
                    </Nav>
                </div>
            </div>
        );
    }
}

CategoryItem.propTypes = {
    category: propTypes.object
}

CategoryItem.defaultProps = {
    category: {
        name: "Gay",
        img: "assets/img/blog/collection3.png"
    }
}
