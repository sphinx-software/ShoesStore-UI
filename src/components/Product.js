import React from 'react'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "reactstrap/es/Button";
const Product = ({ id, name, description, price, img, addFunc }) => {
    return (
        <ButtonToolbar>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
                <div className="tc">
                    <img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2" title={name} alt={'text'} />
                    <h1 className="f3 mb2">{name}</h1>
                    <h2 className="f5 fw4 gray mt0">{description}</h2>

                    <Button className= "success"
                        onClick={() => addFunc({ id, name, description, price, img, units:1})}
                    > Add To Cart </Button>
                    <span>S{price}</span>
                </div>
            </article>
        </ButtonToolbar>
    )
};

export default Product;
