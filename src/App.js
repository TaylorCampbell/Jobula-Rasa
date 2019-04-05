import React, { Component } from "react";
import "./assets/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withAuthentication } from "./components/Session"; // This will include withFirebase()

import Sidebar from "./components/sidebar/sidebar.js";
import Home from "./components/cards/card_container.js";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/SignIn";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="main-container">
            <Sidebar />
            <div className="component-container">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/signin" component={SignInPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
