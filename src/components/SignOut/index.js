import React from "react";

import { withFirebase } from "../Firebase";

import LogOutIcon from "react-ionicons/lib/MdLogOut";

const SignOutButton = ({ firebase }) => (
  <LogOutIcon className={"sidebar-menu__button"} onClick={firebase.doSignOut} fontSize="50px" color="#ffffff" />
);

export default withFirebase(SignOutButton);