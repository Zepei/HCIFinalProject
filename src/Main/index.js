import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Record from '../Record';
import TopTab from '../TopTab';

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
          <Router path='/recordsandregistration'>
            <Record />
          </Router>
          <Router path='/personalinfo'>from perosn</Router>
          <Router path='/emploheeinfo'>from emploheeinfo</Router>
          <Router path='/gwalertloginportal'>from gw</Router>
        </Switch>
      </div>
    );
  }
}
