import React, { Component } from 'react';
import { Tabs, Tab, Container } from '@material-ui/core';
import { withRouter } from 'react-router';

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
          <Tab label='Registration Menu' href={'/recordsandregistration/registration'} />
          <Tab label='Student Record Information Menu' href={'/recordsandregistration/studentrecord'} />
          <Tab label='Student Accounts Menu' href={'/recordsandregistration/studentaccounts'} />
          <Tab label='Admissions' href={'/recordsandregistration/admissions'} />
          <Tab label='Veteran Menu' href={'/recordsandregistration/veteran'} />
        </Tabs>
      </div>
    );
  }
}

export default withRouter(VerticalTabs);
