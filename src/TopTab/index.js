import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { withRouter } from 'react-router';

const tabURL = [
  '/recordsandregistration',
  '/personalinfo',
  '/emploheeinfo',
  '/gwalertloginportal',
];

class index extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Tabs
          value={tabURL.indexOf(this.props.location.pathname)}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab
            label='Student Records and Registration'
            href='recordsandregistration'
          />
          <Tab label='Employee Information' href='personalinfo' />
          <Tab label='Rersonal Information Menu' href='emploheeinfo' />
          <Tab label='GW Alert Login Portal' href='gwalertloginportal' />
        </Tabs>
      </div>
    );
  }
}

const TobTab = withRouter(index);
export default TobTab;
