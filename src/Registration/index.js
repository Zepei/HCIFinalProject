import React, { Component } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import CourseActions from './CourseActions';

export default class Registration extends Component {
  render() {
    return (
      <Box>
        <Box style={{ padding: '25px 0px' }}>
          <Container>
            <Typography variant='h5'>You can add, plan, look up course here </Typography>
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
                {rows.map(row => {
                  return (
                    <TableRow hover key={row.course}>
                      {columns.map(column => {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id != 'actions' ? (
                              <Typography variant='body2'>{row[column.id]}</Typography>
                            ) : (
                              <CourseActions status={row['status']} />
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
      </Box>
    );
  }
}

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

const rows = [
  {
    course: 'CSCI 6212',
    section: '10',
    title: 'Algorithm',
    days: 'Wednesday',
    time: '03:30 pm - 06:00 pm',
    instructor: 'Hyeong-Ah Choi',
    location: 'ROME 205',
    actions: { plan: false, enroll: false, drop: true },
    status: 'enrolled',
  },
  {
    course: 'CSCI 6511',
    section: '80',
    title: 'Artificial Intelligence',
    days: 'Friday',
    time: '06:10 pm - 08:40 pm',
    instructor: 'Amrinder Singh Arora',
    location: 'MPA 309',
    actions: { plan: false, enroll: false, drop: true },
    status: 'planned',
  },
];
