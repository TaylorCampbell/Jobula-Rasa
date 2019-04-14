import React, { Component } from "react";
import "./sidebar.css";

import HomeButton from "../Home/homeButton";
import SignOutButton from "../SignOut";
import ProfileButton from "../Profile";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-menu-container__upper">
          <HomeButton />
        </div>
        <div className="sidebar-menu-container__lower">
          <ProfileButton />
          <SignOutButton />
        </div>
      </div>
    );
  }
}

export default Sidebar;
