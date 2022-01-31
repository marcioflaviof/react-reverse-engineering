// import React from "react";
// import { render } from "react-dom";

function render(initialVirtualTree) {}

function createElement(elementType, props, ...children) {
  const virtualElementProps = {
    ...props,
    children,
  };

  if (typeof elementType === "function") {
    return elementType(props);
  }

  return {
    tagName: elementType,
    props: virtualElementProps,
  };
}

const React = {
  createElement,
};

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

render(React.createElement(App, null), document.querySelector("#root"));
