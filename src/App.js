import React from "react";

import Test01 from "./prevent-render-component/Test01";
import Test02 from "./skip-first-render/Test02";
import Test03 from "./infinite-scroll/Test03";
import Accordion from "./Accordion/Accordion";

export default function App() {
  return (
    <div className="App">
      <h1>React Test Interview</h1>

      <Test01 />
      <br />
      <Test02 />
      <br />
      <Test03 />

      <br />
      <Accordion />
    </div>
  );
}
