import React from "react";

import { withRouter } from 'react-router-dom'

import PlusIcon from "react-ionicons/lib/MdAdd";
import AddCardButton from "../../assets/Styles/AddCardButton";

const ProfileButton = (props, { history }) => (
  <AddCardButton aria-label={"profile"} onClick={props.onClick}>
    <PlusIcon className={"sidebar-menu__button"} fontSize="36px" color="#ffffff" />
  </AddCardButton>
);

export default withRouter(ProfileButton);