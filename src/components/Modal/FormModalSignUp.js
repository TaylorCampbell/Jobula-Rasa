import React from "react"

import { SignInLink } from "../SignIn";
import Modal from "react-bootstrap/Modal";

import { primaryColor } from "../../assets/Styles";

const FormModalSignUp = Component => props => {
      return (
        <Modal
          show={true}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          // animation={false} - Broken rn, watch the BS for React github
        >
          <Modal.Header style={{ backgroundColor: primaryColor }}>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign Up
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Component {...props} />
          </Modal.Body>
          <Modal.Footer>
            <SignInLink />
          </Modal.Footer>
        </Modal>
      );
  }

  export default FormModalSignUp;
  