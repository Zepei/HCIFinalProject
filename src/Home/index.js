import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Typography variant='h3'>Hello User</Typography>
        <Typography variant='h4'>Welcome to the GWeb informatioin system</Typography>
      </Container>
    );
  }
}
