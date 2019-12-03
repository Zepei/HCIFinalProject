import React, { Component } from 'react';
import {
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  Button,
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Scheduler, WeekView, Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import CourseActions from './CourseActions';
import { CLIENT_RENEG_LIMIT } from 'tls';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    window.xzp = this;
    this.state = {
      todayDate: '2019-12-01',
      addingState: false,
      semester: '',
      department: '',
      level: '',
      showResult: false,
      availableCourses: [
        {
          course: 'CSCI 6010',
          section: '10',
          title: 'Intro to CS Fundamentals',
          days: 'Monday',
          time: '18:10 - 20:40',
          startTime: '18:10',
          endTime: '20:40',
          instructor: 'Juman Byun',
          location: '1776 G C-110',
          actions: { plan: true, enroll: true, drop: false },
          status: 'open',
        },
        {
          course: 'CSCI 6011',
          section: '10',
          title: 'Intro to Computer Systems',
          days: 'Thursday',
          time: '18:10 - 20:40',
          startTime: '18:10',
          endTime: '20:40',
          instructor: 'Anrieta Draganova',
          location: '1957 E 111',
          actions: { plan: true, enroll: true, drop: false },
          status: 'enrolled',
        },
        {
          course: 'CSCI 6212',
          section: '10',
          title: 'Algorithm',
          days: 'Wednesday',
          time: '15:30 - 18:00',
          startTime: '15:30',
          endTime: '18:00',
          instructor: 'Hyeong-Ah Choi',
          location: 'ROME 205',
          actions: { plan: false, enroll: false, drop: true },
          status: 'open',
        },
        {
          course: 'CSCI 6221',
          section: '10',
          title: 'Advanced Software Paradigms',
          days: 'Thursday',
          time: '18:10 - 20:40',
          startTime: '18:10',
          endTime: '20:40',
          instructor: 'Yih-Feng Hwang',
          location: '1776 G C-119',
          actions: { plan: true, enroll: true, drop: false },
          status: 'open',
        },
        {
          course: 'CSCI 6511',
          section: '80',
          title: 'Artificial Intelligence',
          days: 'Friday',
          time: '18:10 - 20:40',
          startTime: '18:10',
          endTime: '20:40',
          instructor: 'Amrinder Singh Arora',
          location: 'MPA 309',
          actions: { plan: false, enroll: false, drop: true },
          status: 'open',
        },
      ],
    };
    this.dropCourse = this.dropCourse.bind(this);
    this.enrollCourse = this.enrollCourse.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.planCourse = this.planCourse.bind(this);
    this.startAdding = this.startAdding.bind(this);
    this.cancelAdding = this.cancelAdding.bind(this);
    this.handleSemesterChange = this.handleSemesterChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.searchCourse = this.searchCourse.bind(this);
  }

  dropCourse(course) {
    this.setState(prevState => {
      return {
        ...prevState,
        availableCourses: prevState.availableCourses.map(e => {
          if (e.course !== course) return e;
          else return { ...e, status: 'open' };
        }),
      };
    });
  }

  enrollCourse(course) {
    const enrolled = this.state.availableCourses.filter((e)=>e.status === 'enrolled');
    const courseFullInfo = this.state.availableCourses.filter(e=>e.course==course)[0];
    for(let i = 0; i < enrolled.length; i++){
      if(hasConflict(courseFullInfo, enrolled[i])){
        alert("Unsuccessful, resolve conflicts first!")
        return
      }
    }
    this.setState(prevState => {
      return {
        ...prevState,
        availableCourses: prevState.availableCourses.map(e => {
          if (e.course !== course) return e;
          else return { ...e, status: 'enrolled' };
        }),
      };
    });
  }

  removeCourse(course) {
    this.setState(prevState => {
      return {
        ...prevState,
        availableCourses: prevState.availableCourses.map(e => {
          if (e.course !== course) return e;
          else return { ...e, status: 'open' };
        }),
      };
    });
  }

  planCourse(course) {
    this.setState(prevState => {
      return {
        ...prevState,
        availableCourses: prevState.availableCourses.map(e => {
          if (e.course !== course) return e;
          else return { ...e, status: 'planned' };
        }),
      };
    });
  }

  startAdding() {
    this.setState({ addingState: true, showResult: false });
  }

  cancelAdding() {
    this.setState({ addingState: false });
  }

  handleSemesterChange(event) {
    this.setState({
      semester: event.target.value,
    });
  }

  handleDepartmentChange(event) {
    this.setState({
      department: event.target.value,
    });
  }

  handleLevelChange(event) {
    this.setState({
      level: event.target.value,
    });
  }

  searchCourse() {
    this.setState({
      showResult: true,
    });
  }

  render() {
    let show = null;
    if (this.state.addingState === false) {
      show = (
        <Box>
          <Box style={{ padding: '25px 0px' }}>
            <Container>
              <span>
                <Typography variant='h5' display='inline'>
                  You can add, plan, look up course here
                </Typography>
              </span>
              <Button variant='contained' color='primary' style={{ float: 'right' }} onClick={this.startAdding}>
                Add/Plan Course
              </Button>
            </Container>
          </Box>
          <Box>
            <Container>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.availableCourses
                    .filter(e => e.status === 'enrolled' || e.status === 'planned')
                    .map(row => {
                      return (
                        <TableRow hover key={row.course}>
                          {columns.map(column => {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.id != 'actions' ? (
                                  <Typography variant='body2'>{row[column.id]}</Typography>
                                ) : (
                                  <CourseActions
                                    status={row['status']}
                                    data={row}
                                    dropCourse={this.dropCourse}
                                    enrollCourse={this.enrollCourse}
                                    removeCourse={this.removeCourse}
                                    planCourse={this.planCourse}
                                  />
                                )}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </Container>
          </Box>
          <Box style={{ padding: '25px 0px' }}>
            <Container>
              <Typography variant='h5'>Week Schedule </Typography>
            </Container>
          </Box>
          <Box>
            <Container>
              <Scheduler
                data={this.state.availableCourses
                  .filter(e => e.status === 'enrolled' || e.status === 'planned')
                  .map(e => {
                    return {
                      startDate: `${getRightDate(this.state.todayDate, e.days)} ${e.startTime}`,
                      endDate: `${getRightDate(this.state.todayDate, e.days)} ${e.endTime}`,
                      title: e.course,
                      status: e.status,
                      fullInfo: e
                    };
                  })}
              >
                <WeekView
                  startDayHour={8}
                  endDayHour={22}
                  cellDuration={60}
                  dayScaleCellComponent={e => {
                    return <td>{days[e.startDate.getDay()]}</td>;
                  }}
                />
                <Appointments appointmentComponent={Appointment} />
              </Scheduler>
            </Container>
          </Box>
        </Box>
      );
    } else {
      show = (
        <Box>
          <Container>
            <Box style={{ padding: '25px 0px' }}>
              <Typography variant='h5'>You are adding courses to you registration</Typography>
            </Box>
            <Box display='flex'>
              <FormControl required style={{ minWidth: '150px', marginRight: '50px' }}>
                <InputLabel id='semester'>Semester</InputLabel>
                <Select labelId='semester' id='semester-select' value={this.state.semester} onChange={this.handleSemesterChange}>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Spring2020'}>Spring 2020</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl required style={{ minWidth: '150px', marginRight: '50px' }}>
                <InputLabel id='department'>Department</InputLabel>
                <Select labelId='department' id='department-select' value={this.state.department} onChange={this.handleDepartmentChange}>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'DataScience'}>Data Science</MenuItem>
                  <MenuItem value={'ComputerScience'}>Computer Science</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
              <FormControl required style={{ minWidth: '150px', marginRight: '50px' }}>
                <InputLabel id='level'>Level</InputLabel>
                <Select labelId='level' id='level-select' value={this.state.level} onChange={this.handleLevelChange}>
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Undergraduate'}>Undergraduate</MenuItem>
                  <MenuItem value={'Master'}>Master</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Box>
            <Box display={this.state.showResult ? 'block' : 'none'} style={{ marginTop: '25px' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map(column => (
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.availableCourses.map(row => {
                    return (
                      <TableRow hover key={row.course}>
                        {columns.map(column => {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id != 'actions' ? (
                                <Typography variant='body2'>{row[column.id]}</Typography>
                              ) : (
                                <CourseActions
                                  status={row['status']}
                                  data={row}
                                  dropCourse={this.dropCourse}
                                  enrollCourse={this.enrollCourse}
                                  removeCourse={this.removeCourse}
                                  planCourse={this.planCourse}
                                />
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
            <Box style={{ padding: '25px 0px' }}>
              <Button style={{ marginRight: '25px' }} variant='contained' color='primary' onClick={this.cancelAdding}>
                CANCEL
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={this.searchCourse}
                disabled={this.state.semester === '' || this.state.department === '' || this.state.level === ''}
              >
                SEARCH
              </Button>
            </Box>
          </Container>
        </Box>
      );
    }
    return (
      <Box style={{ width: '100%' }}>
        <Container>{show}</Container>
      </Box>
    );
  }
}

function getRightDate(todayDate, day) {
  return `2019-12-0${days.indexOf(day)}`;
}

// TODO: add render to columns
const columns = [
  { id: 'status', label: 'Status', align: 'right', minWidth: 0 },
  { id: 'course', label: 'Course', align: 'right', minWidth: 70 },
  { id: 'section', label: 'Section', align: 'right', minWidth: 0 },
  { id: 'title', label: 'Title', align: 'right', minWidth: 0 },
  { id: 'days', label: 'Days', align: 'right', minWidth: 0 },
  { id: 'time', label: 'Time', align: 'right', minWidth: 0 },
  { id: 'instructor', label: 'Instructor', align: 'right', minWidth: 0 },
  { id: 'location', label: 'Location', align: 'right', minWidth: 0 },
  { id: 'actions', label: 'Actions', align: 'right', minWidth: 0 },
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Appointment = ({ children, style, ...restProps }) => {
  
  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: restProps.data.status === 'planned' ? '#b0bec5' : '#4fc3f7',
        borderRadius: '8px',
      }}
    >
      {children}
    </Appointments.Appointment>
  );
};

function hasConflict(course1, course2) {
  if(course1.days !== course2.days) return false
  else {
    let start1 = parseInt(course1.startTime.replace(':',''))
    let start2 = parseInt(course2.startTime.replace(':',''));
    let end1 = parseInt(course1.endTime.replace(':',''))
    let end2 = parseInt(course2.endTime.replace(':',''))
    return( !(start1 > end2 || end1 < start2))
  }
}
