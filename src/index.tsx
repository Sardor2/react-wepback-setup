import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootId = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootId
);

// @ts-ignore
if (module.hot && process.env.NODE_ENV === "development") {
  // @ts-ignore
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootId
    );
  });
}
