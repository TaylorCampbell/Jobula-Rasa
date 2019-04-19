import React, { Component } from "react";

import { FirebaseContext } from "../Firebase";
import { AuthUserContext, withAuthorization } from "../Session";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    {users.map(user => (
      <ul key={user.uid}>
      <li>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
      </li>
      <li>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
      </li>
      <li>
        <span>
          <strong>Name:</strong> {user.name}
        </span>
      </li>
      </ul>
    ))}
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Admin);
