import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './header';
import '../style/content.scss';

import ImageGrid from "./imageGrid";
import GridResponsive from "./gridResponsive";

const Content = (props) => (
  <div className="content-wrapper">
    <Header {...props} />
    <div className="content">
      <Router>
        <Switch>
          <Route exact path="/">
            <ImageGrid />
          </Route>
          <Route path="/gridResponsive">
            <GridResponsive />
          </Route>
        </Switch>
      </Router>
    </div>
  </div>
);

export default Content;
