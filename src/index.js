import React from "react";
import { render } from "react-dom";

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

render(<App />, document.querySelector("#root"));
