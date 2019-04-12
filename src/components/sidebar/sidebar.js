import React, { Component } from "react";
import "./sidebar.css";

import SignOutPopOver from "../SignOut/signOutPopover";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-menu-container">
          <SignOutPopOver />
        </div>
      </div>
    );
  }
}

export default Sidebar;
