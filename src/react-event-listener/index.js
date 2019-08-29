import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EventListener from "react-event-listener";

import Home from "./Home";
import About from "./About";

import store from "../store";

export default class App extends Component {
  onClick = event => {
    const elementClassName = event.target.className;
    if (elementClassName.includes("tracking")) {
      console.log("You can log global event here");
    }

    if (elementClassName.includes("todo-list")) {
      console.log("You can log todos here");
    }
  };
  render() {
    return (
      <Provider store={store}>
        <EventListener target="window" onClick={this.onClick} />
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

class Routes extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </React.Fragment>
    );
  }
}
