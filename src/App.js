import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Sidebar from "./Components/sidebar";
import Content from "./Components/content";
import "./style/App.scss";

function App() {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar {...{ collapsed, toggleNavbar }} />
        <Content {...{ collapsed, toggleNavbar }} />
      </div>
    </Router>
  );
}

export default App;
