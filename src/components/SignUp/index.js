import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from 'recompose';

import { FirebaseContext, withFirebase } from '../Firebase';
import * as ROUTES from "../../lib/constant/routes";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

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

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
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
    const { name, email, passwordOne, passwordTwo, error } = this.state;

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
          <Form.Text className="text-muted" >
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Button variant="primary" type="submit" disabled={isInvalid}>
          Submit
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

export default SignUpPage;

export { SignUpForm, SignUpLink };
