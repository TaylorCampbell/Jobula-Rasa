import React from "react";

import { withRouter } from 'react-router-dom'

import ProfileIcon from "react-ionicons/lib/MdHome";
import IconButton from "../../assets/Styles/IconButton";

const HomeButton = ({ history }) => (
  <IconButton>
    <ProfileIcon className={"sidebar-menu__button"} onClick={() => { history.push("/home"); }} fontSize="36px" color="#ffffff" />
  </IconButton>
);

export default withRouter(HomeButton);