function convertToHtml(virtualNode) {
  console.log(virtualNode);
  const $domElement = document.createElement(virtualNode.tagName);

  if (typeof virtualNode === "string" || typeof virtualNode === "number") {
    return document.createTextNode(`${virtualNode}`);
  }

  virtualNode.props.children.forEach((virtualChild) => {
    $domElement.appendChild(convertToHtml(virtualChild));
  });

  return $domElement;
}

function render(initialVirtualTree, $domRoot) {
  const $appHTML = convertToHtml(initialVirtualTree);

  $domRoot.appendChild($appHTML);
}

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

function cloneElement(children, config) {
  const myProps = { props: { ...children.props, ...config } };

  return { ...children, ...myProps };
}

const React = {
  createElement,
  cloneElement,
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
