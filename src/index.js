import React from "react";
import { render } from "react-dom";

function App() {
  return React.createElement(
    "section",
    {
      className: "App",
    },
    React.createElement("h1", null, "Contador"),
    React.createElement(
      "div",
      null,
      React.createElement("div", null, "0"),
      React.createElement("button", null, "Incrementar"),
      React.createElement("button", null, "Decrementar")
    )
  );
}

render(<App />, document.querySelector("#root"));
