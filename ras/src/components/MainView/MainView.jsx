import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Diagram from '../Diagram/Diagram';

const MainView = () => (
  <Switch>
    <Route path="/dashboard/home" component={Home} />
    <Route path="/dashboard/diagram" component={Diagram} />
  </Switch>
);

export default MainView;
