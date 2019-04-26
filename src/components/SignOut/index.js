import React from "react";

import { withFirebase } from "../Firebase";

import LogOutIcon from "react-ionicons/lib/MdLogOut";
import IconButton from "../../assets/Styles/IconButton";

const SignOutButton = ({ firebase }) => (
  <IconButton aria-label={"sign out"} onClick={firebase.doSignOut}>
    <LogOutIcon className={"sidebar-menu__button"} fontSize="36px" color="#ffffff" />
  </IconButton>
);

export default withFirebase(SignOutButton);