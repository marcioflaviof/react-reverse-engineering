function convertToHtml(virtualNode) {
  const $domElement = virtualNode.tagName
    ? document.createElement(virtualNode.tagName)
    : document.createElement(virtualNode.type);

  if (typeof virtualNode === "string" || typeof virtualNode === "number") {
    return document.createTextNode(`${virtualNode}`);
  }

  const children = [...virtualNode.props.children];

  children.forEach((virtualChild) => {
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

const React = {
  createElement,
};

function App() {
  return (
    <section className="App">
      <h1>Contador</h1>
      <div>
        <div>0</div>
        <button>Incrementar</button>
        <button>Decrementar</button>
      </div>
    </section>
  );
}

render(React.createElement(App, null), document.querySelector("#root"));
