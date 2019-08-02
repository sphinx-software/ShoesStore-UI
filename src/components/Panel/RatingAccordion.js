import React, { Component } from 'react';
import {Accordion, Card} from "react-bootstrap";
import {FormGroup, Input, Label} from "reactstrap";
import '../../ui/accordion/accordion.css';

export default class RatingAccordion extends Component {
    render() {

        const { title } = this.props;

        return(
            <Accordion className="rating-accordion" defaultActiveKey="0">
                <Card>
                    <div className="card-header">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h3>{ title }</h3>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="0">
                        <FormGroup check>
                            <Label check>
                                <h5>
                                    <strong>
                                        <Input type="checkbox" />{' '}
                                        Check me out
                                    </strong>
                                </h5>
                            </Label>
                        </FormGroup>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}
