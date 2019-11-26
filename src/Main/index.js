import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import TopTab from '../TopTab';
import RecordRegistration from '../RecordRegistration';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopTab />
        <div style={{ height: '50px' }} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/recordsandregistration' component={RecordRegistration} />
          <Route path='/personalinfo' />
          <Route path='/emploheeinfo' />
          <Route path='/gwalertloginportal' />
        </Switch>
      </div>
    );
  }
}
