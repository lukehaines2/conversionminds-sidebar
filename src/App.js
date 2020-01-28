import React, { useState } from 'react';

import Sidebar from "./Components/sidebar";
import Content from "./Components/content";
import "./style/App.scss";

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="app-wrapper">
      <Sidebar {...{ collapsed, toggleNavbar }} />
      <Content {...{ collapsed, toggleNavbar }} />
    </div>
  );
}

export default App;
