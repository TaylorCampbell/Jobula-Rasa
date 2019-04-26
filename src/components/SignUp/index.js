import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from "../../lib/constant/routes";
import withCard from "../FormCard"
import withModal from "../Modal/formModalSignUp"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

// Creating an object to deconstruct for easy reset of state
const INITIAL_STATE = {
  name: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE,
      isLoading: false
    };
  }

  onSubmit = event => {
    const { name, email, passwordOne } = this.state;
    this.setState({ isLoading: true });
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            name,
            email,
          });
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
    const { name, email, passwordOne, passwordTwo, error, isLoading } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      name === "";

    console.log(this.state);
    console.log(isInvalid);

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" onChange={this.onChange} defaultValue={name}/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={this.onChange} defaultValue={email}/>
        </Form.Group>
        <Form.Group controlId="passwordOne">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.onChange} defaultValue={passwordOne}/>
        </Form.Group>
        <Form.Group controlId="passwordTwo">
          <Form.Control type="password" placeholder="Confirm Password" onChange={this.onChange} defaultValue={passwordTwo}/>
        </Form.Group>
        <Button variant="primary" varient="outline" type="submit" disabled={isInvalid}>
          {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : "SIGN IN"}
        </Button>
        {error && <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>}
      </Form>
    );
  }
}

// This can be imported anywhere we want to offer a sign-up
const SignUpLink = () => (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );

// This is broken into a seperate component for use with HOCs and
// so it can be used away from signUpPage
const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);

const SignUpFormInCard = compose(
  withCard
)(SignUpForm);

const SignUpFormInModal = compose(
  withModal
)(SignUpForm);

export default SignUpForm;

export { SignUpForm, SignUpLink, SignUpFormInCard, SignUpFormInModal };