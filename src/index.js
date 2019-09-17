import React from "react";
import ReactDOM from "react-dom";
import App from "./react-tracker/Dashboard";
import "./index.css";

import { TrackerProvider, Tracker } from "react-tracker";
import trackAddToCart from "./react-tracker/tracking/listeners/dashboard";

const tracker = new Tracker([trackAddToCart]);

ReactDOM.render(
  <TrackerProvider tracker={tracker}>
    <App />
  </TrackerProvider>,
  document.getElementById("root")
);
