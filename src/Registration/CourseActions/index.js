import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

function CourseActions(props) {
  let buttons;
  if (props.status === 'enrolled') {
    buttons = (
      <ButtonGroup size='small'>
        <Button color="secondary">Drop</Button>
      </ButtonGroup>
    );
  } else if (props.status === 'planned') {
    buttons = (
      <ButtonGroup size='small'>
        <Button color="primary">Enroll</Button>
        <Button>Remove</Button>
      </ButtonGroup>
    );
  }
  return buttons;
}

export default CourseActions;
