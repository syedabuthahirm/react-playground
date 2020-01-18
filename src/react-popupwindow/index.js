import React, { Component } from "react";

export default class Root extends Component {
  externalWindow = null;
  clickWindow = () => {
    if (this.externalWindow !== null) {
      if (this.externalWindow.closed) {
        this.externalWindow = window.open(
          "http://localhost:3000",
          "",
          "width=400,height=400"
        );
      }
      this.externalWindow.focus();
    } else {
      this.externalWindow = window.open(
        "http://localhost:3000",
        "",
        "width=400,height=400,menubar=1"
      );
    }
  };
  closeWindow = () => {
    if (this.externalWindow !== null && this.externalWindow.closed === false) {
      console.log("woohoo");
      this.externalWindow.close();
    }
  };
  render() {
    return (
      <div>
        Root Component
        <button onClick={this.clickWindow}>Open</button>
        <button onClick={this.closeWindow}>Close</button>
      </div>
    );
  }
}
