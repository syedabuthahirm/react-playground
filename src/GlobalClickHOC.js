import React, { Component } from "react";

const withGlobalClick = ({ eventClassName }) => WrappedComponent => {
  return class ProtectedRoutes extends Component {
    componentDidMount() {
      console.log(document.querySelectorAll(eventClassName));
      document
        .querySelectorAll(eventClassName)
        .forEach(cell =>
          cell.addEventListener("click", this.handleKeyUp, false)
        );
    }

    componentWillUnmount() {
      document
        .querySelectorAll(eventClassName)
        .forEach(cell =>
          cell.removeEventListener("click", this.handleKeyUp, false)
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("will removed old listener");
      document
        .querySelectorAll(eventClassName)
        .forEach(cell =>
          cell.removeEventListener("click", this.handleKeyUp, false)
        );
      return null;
    }

    componentDidUpdate() {
      console.log(document.querySelectorAll(eventClassName));
      document
        .querySelectorAll(eventClassName)
        .forEach(cell =>
          cell.addEventListener("click", this.handleKeyUp, false)
        );
    }

    handleKeyUp(event) {
      console.log(event.target.getAttribute("data-id"));
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withGlobalClick;
