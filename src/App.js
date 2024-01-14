import React from "react";
import { Tabs } from 'antd';

import PreventRender from "./prevent-render-component/PreventRender";
import SkipFirstRender from "./skip-first-render/SkipFirstRender";
import ImperativeHandle from "./imperative-handle/ImperativeHandle";

export default function App() {
  return (
    <div className="App">
      <h1>React Test Interview</h1>

      <Tabs defaultActiveKey="1" >
        <Tabs.TabPane tab="Prevent Render Component" key="1">
          <PreventRender />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Skip Frist Render" key="2">
          <SkipFirstRender />
        </Tabs.TabPane>
        <Tabs.TabPane tab="imperativeHandle" key="4">
          <ImperativeHandle />
        </Tabs.TabPane>
      </Tabs>

    </div>
  );
}
