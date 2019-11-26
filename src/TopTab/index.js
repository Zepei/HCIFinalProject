import React, { Component } from 'react';
import { Tabs, Tab, Container } from '@material-ui/core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import homePageImg from '../resource/gweb_is_2.gif';

const tabURL = ['/recordsandregistration', '/personalinfo', '/emploheeinfo', '/gwalertloginportal'];

class TobTab extends Component {
  render() {
    let tabValue = -1;
    for (let i = 0; i < 5; i++) {
      if (this.props.location.pathname.includes(tabURL[i])) {
        tabValue = i;
        break;
      }
    }

    return (
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <a href='/' style={{ position: 'absolute', zIndex: 100 }}>
          <img src={homePageImg} style={{ height: '56px', width: 'auto' }} alt='img not found' />
        </a>
        <Container>
          <Tabs value={tabValue} indicatorColor='primary' textColor='primary' centered>
            <Tab label='Student Records and Registration' component={Link} to='/recordsandregistration' />
            <Tab label='Employee Information' component={Link} to='/personalinfo' />
            <Tab label='Rersonal Information Menu' component={Link} to='/emploheeinfo' />
            <Tab label='GW Alert Login Portal' component={Link} to='/gwalertloginportal' />
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default withRouter(TobTab);
