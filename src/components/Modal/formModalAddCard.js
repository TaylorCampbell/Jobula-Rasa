import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const FormModalAddCard = Component => props => {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // animation={false} - Broken rn, watch the BS for React github
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Component {...props} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModalAddCard;
