import React, { Component } from "react";
import "./home.css";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";

class Home extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <FirebaseContext.Consumer>
            {firebase => {
              return (
                <div className="test-card">
                  I am authenticated? {this.props.authUser ? "Yes" : "Nah"}
                </div>
              );
            }}
          </FirebaseContext.Consumer>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
