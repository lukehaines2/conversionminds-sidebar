import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './header';
import '../style/content.scss';

import ImageGrid from "./imageGrid";
import GridResponsive from "./gridResponsive";

const Content = (props) => (
  <div className="content-wrapper">
    <Header {...props} />
    <div className="content">
      <Switch>
        <Route exact path="/">
          <ImageGrid />
        </Route>
        <Route path="/gridResponsive">
          <GridResponsive />
        </Route>
      </Switch>
    </div>
  </div>
);

export default Content;
