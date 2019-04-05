import React, { Component } from "react"; 
import "./sidebar.css";
import SignOutButton from "../SignOut/index.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-menu-container">
        <SignOutButton />
      </div>
    );
  }
}

export default Sidebar;
