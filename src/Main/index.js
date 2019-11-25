import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Record from '../Record';
import TopTab from '../TopTab';
import Home from '../Home';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopTab />
        <Switch>
          <Route path='/recordsandregistration'>
            <Record />
          </Route>
          <Route path='/personalinfo'>from perosn</Route>
          <Route path='/emploheeinfo'>from emploheeinfo</Route>
          <Route path='/gwalertloginportal'>from gw</Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            URL does not exist
          </Route>
        </Switch>
      </div>
    );
  }
}
