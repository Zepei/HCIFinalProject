import React, { Component } from 'react';
import { Tabs, Tab, Container } from '@material-ui/core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const tabURL = ['/registration', '/studentrecord', '/studentaccount', '/admissions', '/veteran'];

class VerticalTabs extends Component {
  render() {
    let tabValue = -1;
    for (let i = 0; i < 5; i++) {
      if (this.props.location.pathname.includes(tabURL[i])) {
        tabValue = i;
        break;
      }
    }
    return (
      <div>
        <Tabs orientation='vertical' indicatorColor='primary' textColor='primary' value={tabValue}>
          <Tab label='Registration Menu' component={Link} to={'/recordsandregistration/registration'} />
          <Tab label='Student Record Information Menu' component={Link} to={'/recordsandregistration/studentrecord'} />
          <Tab label='Student Accounts Menu' component={Link} to={'/recordsandregistration/studentaccounts'} />
          <Tab label='Admissions' component={Link} to={'/recordsandregistration/admissions'} />
          <Tab label='Veteran Menu' component={Link} to={'/recordsandregistration/veteran'} />
        </Tabs>
      </div>
    );
  }
}

export default withRouter(VerticalTabs);
