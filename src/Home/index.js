import React, { Component } from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container style={{ paddingTop: '50px' }}>
          <Box style={{height: '200px'}}>
            <Typography variant='h3'>Hello User</Typography>
            <Typography variant='h4'>Welcome to the GWeb informatioin system</Typography>
            <br />
            <br />
            <Typography variant='body1'>
              Common functions are: {/* <a href='/recordsandregistration/registration'>
              class registration
            </a> */}
              <Link to='/recordsandregistration/registration'>class registration</Link>
              , etc.
            </Typography>
          </Box>
        </Container>
      </div>
    );
  }
}
