import React from "react";
import ReactDOM from "react-dom";
import App from "./react-tracker/Dashboard";
import { Provider } from "react-redux";
import store from "./store";

import { TrackerProvider, Tracker } from "react-tracker";
import trackAddToCart from "./react-tracker/tracking/listeners/dashboard";

const tracker = new Tracker([trackAddToCart]);

ReactDOM.render(
  <Provider store={store}>
    <TrackerProvider tracker={tracker}>
      <App />
    </TrackerProvider>
  </Provider>,
  document.getElementById("root")
);
