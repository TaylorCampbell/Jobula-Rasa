import React from "react";

import { withFirebase } from "../Firebase";

import LogOutIcon from "react-ionicons/lib/MdLogOut";
import IconButton from "../../assets/Styles/IconButton";

const SignOutButton = ({ firebase }) => (
  <IconButton>
    <LogOutIcon className={"sidebar-menu__button"} onClick={firebase.doSignOut} fontSize="36px" color="#ffffff" />
  </IconButton>
);

export default withFirebase(SignOutButton);