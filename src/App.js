import React, { Component } from "react";
import "./assets/App.css";
import Sidebar from "./components/sidebar/sidebar.js";
import CardContainer from "./components/cards/card_container.js";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Sidebar />
        <CardContainer />
      </div>
    );
  }
}

export default App;
