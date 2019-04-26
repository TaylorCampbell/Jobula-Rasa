import React, { Component } from "react";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";
import AddCardButton from "../Card/addCardButton";

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
      <AddCardButton />
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
