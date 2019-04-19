import React, { Component } from "react";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
