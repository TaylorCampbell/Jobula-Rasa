import React from "react"

import { SignUpLink } from "../SignUp";
import Modal from "react-bootstrap/Modal";

const FormModalSignIn = Component => props => {
      return (
        <Modal
          show={true}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          // animation={false} - Broken rn, watch the BS for React github
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign In
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Component {...props} />
          </Modal.Body>
          <Modal.Footer>
            <SignUpLink />
          </Modal.Footer>
        </Modal>
      );
  }

  export default FormModalSignIn;
  