import React, { Component } from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import VerticalTabs from '../VerticalTabs';
import Registration from '../Registration';

export default class RecordRegistration extends Component {
  render() {
    return (
      <WiderContainer>
        <Box display='flex'>
          <Box
            style={{
              borderRight: `1px solid #e0e0e0`,
            }}
          >
            <VerticalTabs />
          </Box>
          <Box>
            <Switch>
              <Route path={'/recordsandregistration/registration'} component={Registration} />
              <Route path={'/recordsandregistration/studentrecord'} />
              <Route path={'/recordsandregistration/studentaccount'} />
              <Route path={'/recordsandregistration/admissions'} />
              <Route path={'/recordsandregistration/veteran'} />
              <Route exact path={'/recordsandregistration'} component={mainExplanation} />
            </Switch>
          </Box>
        </Box>
      </WiderContainer>
    );
  }
}

const WiderContainer = withStyles({
  root: {
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  maxWidthLg: {
    maxWidth: '1550px',
  },
})(Container);

function mainExplanation() {
  return (
    <Box>
      <Container>
        <Typography variant='h4'>Welcome!</Typography>
        <br />
        <Typography variant='h5'>Common jobs can be done here are:</Typography>
        <ul>
          <li>
            <Typography variant='body1'>course registration</Typography>
          </li>
          <li>
            <Typography variant='body1'>transcript and diploma related</Typography>
          </li>
          <li>
            <Typography variant='body1'>tuitions related</Typography>
          </li>
        </ul>
      </Container>
    </Box>
  );
}
