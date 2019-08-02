import React, { Component }         from 'react';
import { Accordion, Card }          from "react-bootstrap";
import {FormGroup, Label}           from "reactstrap";
import { Icon }                     from '@blueprintjs/core';

export default class FrequentyQuestions extends Component {

    state = {
        dropdown: true
    }

    toggle() {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    render() {

        const { title, content } = this.props;

        return(
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <div className="card-header">
                            <Accordion.Toggle onClick={ () => this.toggle() } as={Card.Header} eventKey="0">
                                {
                                    this.state.dropdown ? <h4><Icon icon="minus"/> {title}</h4> : <h4><Icon icon="plus"/> {title}</h4>
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
