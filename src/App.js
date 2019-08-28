import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import withGlobalClick from "./GlobalClickHOC";

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
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </React.Fragment>
    );
  }
}

const RoutesWrapper = withRouter(
  withGlobalClick({ eventClassName: ".tracking" })(Routes)
);
