import React, { Component }         from 'react';
import { Accordion, Card }          from "react-bootstrap";
import { FormGroup, Label }         from "reactstrap";
import { Icon }                     from '@blueprintjs/core';


import { dropdown }                 from "../../actions/actions";
import { connect }                  from "react-redux";


import '../../ui/payment/paymentmethod.css';


class FrequentyQuestions extends Component {

    render() {

        const { title, content } = this.props;

        return(
            <div className="frequenty-questions">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <div className="card-header">
                            <Accordion.Toggle onClick={ () => this.props.toggle() } as={Card.Header} eventKey="0">
                                {
                                    this.props.dropdown ? <h4><Icon icon="minus"/> {title}</h4> : <h4><Icon icon="plus"/> {title}</h4>
                                }
                            </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey="0">
                            <FormGroup check>
                                <Label check>
                                    <h5>{content}</h5>
                                </Label>
                            </FormGroup>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dropdown: state.DropDown,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => dispatch(dropdown()),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FrequentyQuestions);
