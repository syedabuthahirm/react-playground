import React from "react";
import ReactDOM from "react-dom";
import Root from "./react-popupwindow";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
