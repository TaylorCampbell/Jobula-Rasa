import React, { Component } from "react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import SignOutButton from "./index";

import LogOutIcon from "react-ionicons/lib/MdLogOut";

const popover = (
  <Popover id="popover-basic">
    <SignOutButton />
  </Popover>
);

class ProfileMenu extends Component {
  render() {
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose>
        <LogOutIcon fontSize="50px" color="#ffffff" />
      </OverlayTrigger>
    );
  }
}

export default ProfileMenu;
