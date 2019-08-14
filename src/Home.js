import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  homeOnClick() {
    console.log("Home On Click");
  }
  render() {
    return (
      <React.Fragment>
        <div>Home</div>
        <Link to="/about">About</Link>
        <button className="tracking" onClick={this.homeOnClick} data-id="Home">
          Home Button
        </button>
      </React.Fragment>
    );
  }
}
