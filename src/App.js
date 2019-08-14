import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./Home";

import store from "./store";
import About from "./About";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <RoutesWrapper />
        </Router>
      </Provider>
    );
  }
}

class Routes extends Component {
  componentDidMount() {
    document
      .querySelectorAll(".tracking")
      .forEach(cell => cell.addEventListener("click", this.handleKeyUp, false));
  }
  componentWillUnmount() {
    document
      .querySelectorAll(".tracking")
      .forEach(cell =>
        cell.removeEventListener("click", this.handleKeyUp, false)
      );
  }
  componentDidUpdate() {
    console.log(document.querySelectorAll(".tracking"));
    document
      .querySelectorAll(".tracking")
      .forEach(cell => cell.addEventListener("click", this.handleKeyUp, false));
  }
  handleKeyUp(event) {
    console.log(event.target.getAttribute("data-id"));
  }
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </React.Fragment>
    );
  }
}

const RoutesWrapper = withRouter(Routes);
