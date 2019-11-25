import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { withRouter } from 'react-router';

import homePageImg from '../resource/gweb_is_2.gif';

const tabURL = [
  '/recordsandregistration',
  '/personalinfo',
  '/emploheeinfo',
  '/gwalertloginportal',
];

class TobTab extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <a href="/">
          <img src={homePageImg} href='/' />
        </a>
        <Tabs
          value={tabURL.indexOf(this.props.location.pathname)}
          indicatorColor='primary'
          textColor='primary'
          centered
          style={{ display: 'inline-block', marginLeft: "120px" }}
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

export default withRouter(TobTab);
