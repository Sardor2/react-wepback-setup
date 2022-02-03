/* eslint-disable global-require */
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (module.hot && process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  module.hot.accept("./App", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NextApp = require("./App").default;
    ReactDOM.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>,
      rootId
    );
  });
}
