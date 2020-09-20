import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion';

function UploadMenu(props) {

    if(!props.isVisible) {
        return null;
    }

    return(
        <Accordion className="upload-menu" style={{ padding: '10px'}}>
            <Accordion.Toggle as={Button} size="lg" block eventKey="0" variant={props.menuState.color}>
                {props.menuState.text}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Form fluid>
                    <Form.File 
                        id="packages"
                        label="Select Packages..."
                        custom
                    />
                </Form>
            </Accordion.Collapse>
        </Accordion>
    );
}

export default UploadMenu;