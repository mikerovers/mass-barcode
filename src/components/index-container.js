import React from 'react';
import BarcodeList from './barcode-list';
import ReactToPrint from "react-to-print";
import { Input, Row, Col, Form, FormGroup, Label, Button, Collapse } from 'reactstrap';

import styles from "./index-container.module.css";

export default class IndexContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            addonText: "",
            displayAddonText: true,
            displayValue: true
        }
    }

    onDefaultValueChange(value) {
        if (value) {
            this.setState({displayValue: true});
        } else {
            this.setState({displayValue: false});
        }
    }

    onAddonTextValueChange(value) {
        if (value) {
            this.setState({displayAddonText: true});
        } else {
            this.setState({displayAddonText: false});
        }
    }

    render() {
        const codes = this.state.text.trim().split('\n');

        return (
            <Row>
                <Col md="6" xs="12">
                    <Form>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"  
                                    onChange={(event) => this.onDefaultValueChange(event.target.checked)} 
                                    defaultChecked={this.state.displayValue} />{' '}
                                Display value
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"  
                                    onChange={(event) => this.onAddonTextValueChange(event.target.checked)} 
                                    defaultChecked={this.state.displayAddonText} />{' '}
                                Display text
                            </Label>
                        </FormGroup>
                        <ReactToPrint
                            trigger={() => <Button className={styles.print} color="success">Print</Button>}
                            content={() => this.componentRef}
                        />
                        <Collapse isOpen={this.state.displayAddonText}>
                            <FormGroup>
                                <Label for="addonText">Text</Label>
                                <Input name="addon" type="textarea" id="addonText" onChange={(event) => this.setState({addonText: event.target.value})} />
                            </FormGroup>
                        </Collapse>
                        <FormGroup>
                            <Label for="barcodesText">Barcode(s)</Label>
                            <Input className={styles.barcode} type="textarea" name="barcodes" id="barcodesText" onChange={(event) => this.setState({text: event.target.value})}/>
                        </FormGroup>                        
                    </Form>
                </Col>
                <Col md="6" xs="12">
                    <h2>Preview</h2>
                    <BarcodeList 
                        className={styles.barcode}
                        displayAddonText={this.state.displayAddonText} 
                        addonText={this.state.addonText} 
                        ref={el => (this.componentRef = el)} 
                        displayValue={this.state.displayValue} 
                        codes={codes} 
                    />
                </Col>
            </Row>
        )
    }
}