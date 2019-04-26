import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../lib/constant/routes";
import withCard from "../FormCard";
import withCardModal from "../Modal/formModalAddCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { auth } from "firebase";

// Creating an object to deconstruct for easy reset of state
const INITIAL_STATE = {
  name: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class AddCardBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE, isLoading: false };
  }

  onSubmit = event => {
    event.preventDefault();
    const { job_title, job_description, job_link } = this.state;
    console.log(this.state);
    this.setState({ isLoading: true });
    console.log(this.props.firebase.auth.currentUser.uid);
    this.props.firebase.users().once('value', authUser => {
        this.props.firebase
          .job(this.props.firebase.auth.currentUser.uid)
          .push({
            job_title,
            job_description,
            job_link
          })
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE, isLoading: false });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const {
      job_title,
      job_description,
      job_link,
      error,
      isLoading
    } = this.state;

    const isInvalid = job_title === "";

    return (
      <Form onSubmit={this.onSubmit}>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="job_title">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job Title"
                onChange={this.onChange}
                defaultValue={job_title}
              />
            </Form.Group>
          </Col>
          <Col xs={8}>
            <Form.Group controlId="job_description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description..."
                onChange={this.onChange}
                defaultValue={job_description}
                as="textarea"
                row={4}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="job_link">
            <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Link"
                onChange={this.onChange}
                defaultValue={job_link}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" varient="outline" type="submit" disabled={isInvalid}>
          {isLoading ? (
            <Spinner animation="border" variant="light" size="sm" />
          ) : (
            "Add Job"
          )}
        </Button>
        {error && (
          <Form.Control.Feedback type="invalid">
            {error.message}
          </Form.Control.Feedback>
        )}
      </Form>
    );
  }
}

const AddCardForm = compose(
  withFirebase
)(AddCardBase);

const AddCardFormInCard = compose(withCard)(AddCardForm);

const AddCardFormInModal = compose(withCardModal)(AddCardForm);

export default AddCardForm;

export { AddCardFormInCard, AddCardFormInModal };
