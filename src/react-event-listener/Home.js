import React, { Component } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="tracking">Home Tracking</h1>
        <Link to="/about">About</Link>
        <Todo />
      </React.Fragment>
    );
  }
}
