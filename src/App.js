import React, { Component } from "react";
import "./assets/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withAuthentication } from "./components/Session"; // This will include withFirebase()

import Sidebar from "./components/Sidebar/sidebar.js";
import Home from "./components/Home/home.js";
import Settings from "./components/Settings/settings.js";
import { SignUpFormInModal } from "./components/SignUp";
import { SignInFormInModal } from "./components/SignIn";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col className="sidebar-col">
              <Sidebar />
            </Col>
            <Col xs={11} className="main-col">
              <div className="component-container">
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/settings" component={Settings} />
                  <Route path="/profile" component={Settings} />
                  <Route path="/signup" component={SignUpFormInModal} />
                  <Route path="/signin" component={SignInFormInModal} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
