import "/project/workspace/src/pads.css";
import arr from "/project/workspace/src/pads.js";
import React from "react";

function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.pad.color }}
      className={props.pad.on ? "on" : null}
      onClick={() => props.toggle(props.pad.id)}
    ></button>
  );
}

function Main() {
  const [padsList, setPadsList] = React.useState(arr);

  function toggle(id) {
    setPadsList((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }

  const Pads = padsList.map((pad) => (
    <Pad key={pad.id} toggle={toggle} pad={pad} />
  ));

  return (
    <main>
      <section className="pad-container">{Pads}</section>
    </main>
  );
}
export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
