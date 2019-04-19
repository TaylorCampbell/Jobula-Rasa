import React from "react";

import { withRouter } from 'react-router-dom'

import ProfileIcon from "react-ionicons/lib/MdContact";
import IconButton from "../../assets/Styles/IconButton";

const ProfileButton = ({ history }) => (
  <IconButton>
    <ProfileIcon className={"sidebar-menu__button"} onClick={() => { history.push("/profile"); }} fontSize="36px" color="#ffffff" />
  </IconButton>
);

export default withRouter(ProfileButton);