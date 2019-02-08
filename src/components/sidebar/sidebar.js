import React, { Component } from "react";
import "./sidebar.css";

import SidebarMenu from "./sidebar_menu.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <SidebarMenu />
      </div>
    );
  }
}

export default Sidebar;
