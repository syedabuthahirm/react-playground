import React, { Component } from "react"
import { connect } from "react-redux"

import { sendLogs } from "../store/reducers/logs";

class App extends Component {
  timer = null

  componentDidMount() {
    this.timer = setInterval(() => {
      this.props.sendLogs();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log('loaded');
    return (
      <h1>App</h1>
    )
  }
}

export default connect(null,{ sendLogs })(App);