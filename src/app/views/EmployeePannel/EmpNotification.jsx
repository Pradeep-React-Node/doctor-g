import {
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import { Breadcrumb } from 'app/components';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNotifcationListByEmp } from 'app/redux/actions/NotificationActions';
import { Container, StyledTable, NStyledCard } from '../Style';
import { H2 } from 'app/components/Typography';
import moment from 'moment';
import { deleteNotification } from 'app/redux/actions/NotificationActions';

const EmpNotificationPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const notificationLists = useSelector(
    (state) => state.notifications.notificationempList
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(
        getNotifcationListByEmp(
          user.user.first_name + ' ' + user.user.last_name
        )
      );
    }
  }, [dispatch]);

  const deleteNotifications = (id) => {
    alert('notification id', id);
    // dispatch(deleteNotification(id));
    // window.location.reload(false);
  };

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: 'Notification', path: '/handover/handover-list' },
            { name: 'Notification List' },
          ]}
        />
      </div>

      {/* <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/handover/add-handover")}>
                Add New Handover
            </Button> */}

      <H2>All Notification History</H2>
      <Box sx={{ mt: 2 }}>
        <NStyledCard>
          <StyledTable>
            <TableHead sx={{ backgroundColor: '#d0e6fe' }}>
              <TableRow>
                <TableCell style={{ width: '7%' }} align="center">
                  S.No.
                </TableCell>
                <TableCell style={{ width: '30%' }} align="center">
                  Date
                </TableCell>
                <TableCell style={{ width: '73%' }} align="left">
                  Notification
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notificationLists
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                  <TableRow key={index}>
                    <TableCell style={{ width: '7%' }} align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ width: '30%' }} align="center">
                      {moment(subscriber.createdAt).format('Do MMM YY')}
                    </TableCell>
                    <TableCell style={{ width: '73%' }} align="left">
                      {subscriber.newwork_notification}
                      {subscriber.drawing_notification}
                      {subscriber.sitesurvey_notification}
                      {subscriber.aluiminium_notification}
                      {subscriber.glass_notification}
                      {subscriber.handover_notification}
                      {subscriber.d_approve}
                      {subscriber.st_approve}
                      {subscriber.al_approve}
                      {subscriber.gl_approve}
                      {subscriber.hd_approve}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={notificationLists?.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ 'aria-label': 'Next Page' }}
            backIconButtonProps={{ 'aria-label': 'Previous Page' }}
          />
        </NStyledCard>
      </Box>
    </Container>
  );
};

export default EmpNotificationPage;
