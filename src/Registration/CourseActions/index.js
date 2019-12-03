import React, { Component } from 'react';
import { Button, ButtonGroup, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export default class CourseActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropModalOpen: false,
      enrollModalOpen: false,
      removeModalOpen: false,
      planModalOpen: false,
    };
    this.openDropModal = this.openDropModal.bind(this);
    this.openEnrollModal = this.openEnrollModal.bind(this);
    this.openRemoveModal = this.openRemoveModal.bind(this);
    this.openPlanModal = this.openPlanModal.bind(this);
    this.handleDropModalClose = this.handleDropModalClose.bind(this);
    this.handleEnrollModalClose = this.handleEnrollModalClose.bind(this);
    this.handleRemoveModalClose = this.handleRemoveModalClose.bind(this);
    this.handlePlanModalClose = this.handlePlanModalClose.bind(this)
    this.confirmDrop = this.confirmDrop.bind(this);
    this.confirmEnroll = this.confirmEnroll.bind(this);
    this.confirmRemove = this.confirmRemove.bind(this);
    this.confirmPlan = this.confirmPlan.bind(this);
  }

  openDropModal() {
    this.setState({ dropModalOpen: true });
  }

  openEnrollModal() {
    this.setState({ enrollModalOpen: true });
  }

  openRemoveModal() {
    this.setState({ removeModalOpen: true });
  }

  openPlanModal() {
    this.setState({ planModalOpen: true });
  }

  handleDropModalClose() {
    this.setState({ dropModalOpen: false });
  }

  handleEnrollModalClose() {
    this.setState({ enrollModalOpen: false });
  }

  handleRemoveModalClose() {
    this.setState({ removeModalOpen: false });
  }

  handlePlanModalClose() {
    this.setState({ planModalOpen: false });
  }

  confirmDrop() {
    this.handleDropModalClose();
    this.props.dropCourse(this.props.data.course);
  }

  confirmEnroll() {
    this.handleEnrollModalClose();
    this.props.enrollCourse(this.props.data.course);
  }

  confirmRemove() {
    this.handleRemoveModalClose();
    this.props.removeCourse(this.props.data.course);
  }

  confirmPlan() {
    this.handlePlanModalClose();
    console.log(this.props)
    this.props.planCourse(this.props.data.course);
  }

  render() {
    let buttons = null;
    if (this.props.status === 'enrolled') {
      buttons = (
        <ButtonGroup size='small'>
          <Button color='secondary' onClick={this.openDropModal}>
            Drop
          </Button>
          <Dialog open={this.state.dropModalOpen} onClose={this.handleDropModalClose}>
            <DialogTitle>Drop This Course?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div style={{ width: '500px' }}>This action cannot be undone!</div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='secondary' onClick={this.confirmDrop}>
                Confirm Drop
              </Button>
              <Button onClick={this.handleDropModalClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </ButtonGroup>
      );
    } else if (this.props.status === 'planned') {
      buttons = (
        <ButtonGroup size='small'>
          <Button color='primary' onClick={this.openEnrollModal}>
            Enroll
          </Button>
          <Dialog open={this.state.enrollModalOpen} onClose={this.handleEnrollModalClose}>
            <DialogTitle>Enroll This Course?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div style={{ width: '500px' }}>Confirm Enroll? Please resole potential conflicts to proceed.</div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='primary' onClick={this.confirmEnroll}>
                Confirm Enroll
              </Button>
              <Button onClick={this.handleEnrollModalClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
          <Button onClick={this.openRemoveModal}>Remove</Button>
          <Dialog open={this.state.removeModalOpen} onClose={this.handleremoveModalClose}>
            <DialogTitle>Remove This Course?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div style={{ width: '500px' }}>Confirm Remove? You can add it back later.</div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='secondary' onClick={this.confirmRemove}>
                Confirm Remove
              </Button>
              <Button onClick={this.handleRemoveModalClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </ButtonGroup>
      );
    } else if (this.props.status === 'open') {
      buttons = (
        <ButtonGroup size='small'>
          <Button color='primary' onClick={this.openEnrollModal}>
            Enroll
          </Button>
          <Dialog open={this.state.enrollModalOpen} onClose={this.handleEnrollModalClose}>
            <DialogTitle>Enroll This Course?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div style={{ width: '500px' }}>Confirm Enroll? Please resole potential conflicts to proceed.</div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='primary' onClick={this.confirmEnroll}>
                Confirm Enroll
              </Button>
              <Button onClick={this.handleEnrollModalClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
          <Button onClick={this.openPlanModal}>Plan</Button>
          <Dialog open={this.state.planModalOpen} onClose={this.handlePlanModalClose}>
            <DialogTitle>Plan This Course?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <div style={{ width: '500px' }}>Confirm Plan? You can enroll this course quickly when time has come.</div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='secondary' onClick={this.confirmPlan}>
                Confirm Plan
              </Button>
              <Button onClick={this.handlePlanModalClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </ButtonGroup>
      );
    }
    return buttons;
  }
}
