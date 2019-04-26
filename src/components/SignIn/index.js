import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../lib/constant/routes";
import withCard from "../FormCard";
import withModal from "../Modal/formModalSignIn";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      ...INITIAL_STATE,
      isLoading: false
    };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
    const { email, password, error, isLoading } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.onChange} defaultValue={email}/>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.onChange} defaultValue={password}/>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isInvalid} onClick={this.handleClick}>
          {isLoading ? <Spinner animation="border" variant="light" size="sm" /> : "SIGN IN"}
        </Button>
        {error && <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>}
      </Form>
    );
  }
}

// This can be imported anywhere we want to offer a sign-up
const SignInLink = () => (
  <p>
    Already have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

const SignInFormInCard = compose(
  withCard
)(SignInForm);

const SignInFormInModal = compose(
  withModal
)(SignInForm);


export default SignInPage;

export { SignInLink, SignInForm, SignInFormInCard, SignInFormInModal };
