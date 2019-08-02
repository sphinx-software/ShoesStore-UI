import React, { Component } from 'react';
import propTypes            from 'prop-types';

export default class CategoryItem extends Component {
    render() {
        const { category } = this.props;
        return (
            <div className="col-md-4 md-margin-bottom-30">
                <div className="overflow-h">
                    <a className="illustration-v3 illustration-img1" href="#">
                      <span className="illustration-bg">
                        <span className="illustration-ads">
                          <span className="illustration-v3-category">
                            <span className="product-category">{category.name}</span>
                            <span className="product-amount">{category.amount}</span>
                          </span>
                        </span>
                      </span>
                    </a>
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
        amount: "100 Items"
    }
}
