import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
import App from "./App";

// Redux Import
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import exporter from "./store/store.js";
// Import Context

ReactDOM.render(
  <Provider store={exporter.Store}>
    <PersistGate persistor={exporter.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
