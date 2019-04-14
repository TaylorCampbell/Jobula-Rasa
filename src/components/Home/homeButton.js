import React from "react";

import { withRouter } from 'react-router-dom'

import ProfileIcon from "react-ionicons/lib/MdHome";

const HomeButton = ({ history }) => (
  <ProfileIcon className={"sidebar-menu__button"} onClick={() => { history.push("/home"); }} fontSize="50px" color="#ffffff" />
);

export default withRouter(HomeButton);