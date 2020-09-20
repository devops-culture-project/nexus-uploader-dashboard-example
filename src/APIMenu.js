import React from 'react';
import './MenuOption.css';
import Button from 'react-bootstrap/Button';

function APIMenu(props) {

    if(!props.isVisible){
        return null;
    }

    return(
        <div className="api-menu" style={{ padding: '10px'}}>
            <Button className="menu-option" variant="dark" size="lg" block style={{ padding: '10px'}}>
                REST API
            </Button>
        </div>
        
    );
}

export default APIMenu;

// {props.action} is exisits and supposed to be athe actionKey.
 //<Button className="api-option" style={{ padding: '10px'}} variant="dark" size="lg" block>