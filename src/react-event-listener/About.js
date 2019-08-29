import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div>About</div>
        <Link to="/">Home</Link>
        <button className="tracking application" data-id="About">
          About Button
        </button>
      </React.Fragment>
    );
  }
}
