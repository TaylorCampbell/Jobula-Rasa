import React from "react";

import { withRouter } from 'react-router-dom'

import ProfileIcon from "react-ionicons/lib/MdContact";

const ProfileButton = ({ history }) => (
  <ProfileIcon className={"sidebar-menu__button"} onClick={() => { history.push("/profile"); }} fontSize="50px" color="#ffffff" />
);

export default withRouter(ProfileButton);