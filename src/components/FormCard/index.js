import React from "react";
import Card from "react-bootstrap/Card";

const FormCard = Component => props => (
    <Card>
        <Card.Body>
            <Component {...props} />
        </Card.Body>
    </Card>
    );

export default FormCard;