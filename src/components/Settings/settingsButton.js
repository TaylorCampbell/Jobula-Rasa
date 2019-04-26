import React from "react";

import { withRouter } from 'react-router-dom'

import SettingsIcon from "react-ionicons/lib/MdSettings";
import IconButton from "../../assets/Styles/IconButton";

const HomeButton = ({ history }) => (
  <IconButton aria-label={"settings"} onClick={() => { history.push("/settings"); }}>
    <SettingsIcon className={"sidebar-menu__button"} fontSize="36px" color="#ffffff" />
  </IconButton>
);

export default withRouter(HomeButton);