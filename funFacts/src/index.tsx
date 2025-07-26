import React from "react";
import ReactDOM from "react-dom/client";
import FunFacts from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <FunFacts />
  </React.StrictMode>
);
