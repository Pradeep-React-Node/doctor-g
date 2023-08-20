import {
  Badge,
  Button,
  Card,
  Drawer,
  Icon,
  IconButton,
  ThemeProvider,
  TextField,
} from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import useNotification from 'app/hooks/useNotification';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { Form } from './FormStyle';
import useSettings from 'app/hooks/useSettings';
import { sideNavWidth, topBarHeight } from 'app/utils/constant';
import { getTimeDifference } from 'app/utils/utils.js';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { themeShadows } from '../MatxTheme/themeColors';
import { Paragraph, Small } from '../Typography';
import {
  getNotification,
  getNotifcationListByEmp,
} from 'app/redux/actions/NotificationActions';
import { updateNotification } from 'app/redux/actions/NotificationActions';

const Notification = styled('div')(() => ({
  padding: '16px',
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  height: topBarHeight,
  boxShadow: themeShadows[6],
  '& h5': {
    marginLeft: '8px',
    marginTop: 0,
    marginBottom: 0,
    fontWeight: '500',
  },
}));

const NotificationCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&:hover': {
    '& .messageTime': {
      display: 'none',
    },
    '& .deleteButton': {
      opacity: '1',
    },
  },
  '& .messageTime': {
    color: theme.palette.text.secondary,
  },
  '& .icon': { fontSize: '1.25rem' },
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  opacity: '0',
  position: 'absolute',
  right: 5,
  marginTop: 9,
  marginRight: '24px',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const CardLeftContent = styled('div')(({ theme }) => ({
  padding: '12px 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(0, 0, 0, 0.01)',
  '& small': {
    fontWeight: '500',
    marginLeft: '16px',
    color: theme.palette.text.secondary,
  },
}));

const Heading = styled('span')(({ theme }) => ({
  fontWeight: '500',
  marginLeft: '16px',
  color: theme.palette.text.secondary,
}));

const NotificationBar = ({ container }) => {
  const location = useLocation();
  // const notificationData = location.state
  // const id = notificationData?._id;
  const dispatch = useDispatch();
  const { settings } = useSettings();
  const theme = useTheme();
  const secondary = theme.palette.text.secondary;
  const [panelOpen, setPanelOpen] = React.useState(false);
  // const { clearNotifications, notifications } = useNotification();

  const handleDrawerToggle = () => {
    setPanelOpen(!panelOpen);
  };

  const [user, setUser] = useState();
  const [state, setState] = useState({ status: true });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  const notificationListss = useSelector(
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

  const notificationLists = useSelector(
    (state) => state.notifications.notificationList
  );

  useEffect(() => {
    dispatch(getNotification());
  }, [dispatch]);

  const totalsms = notificationListss
    .filter((person) => person.status === false)
    .filter((person) => person.user_type_notifaction === 'Employee')
    .map((filteredPerson) => filteredPerson.length);

  const totaladminsms = notificationLists
    .filter((person) => person.status === false)
    .filter((person) => person.user_type_notifaction === 'Admin')
    .map((filteredPerson) => filteredPerson.length);

  const handelDelete = (id) => {
    window.location.reload(false);
    dispatch(updateNotification(id, state));
  };

  const { palette } = useTheme();
  const textColor = palette.text.primary;

  console.log('notificato data', notificationListss);
  console.log('notificato', notificationLists);
  return (
    <>
      {user === 'Admin' ? (
        <Fragment>
          <IconButton onClick={handleDrawerToggle}>
            <Badge color="secondary" badgeContent={totaladminsms.length}>
              <Icon sx={{ color: textColor }}>notifications</Icon>
            </Badge>
          </IconButton>

          <ThemeProvider theme={settings.themes[settings.activeTheme]}>
            <Drawer
              width={'100px'}
              container={container}
              variant="temporary"
              anchor={'right'}
              open={panelOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <Box sx={{ width: sideNavWidth }}>
                <Notification>
                  <Icon color="primary">notifications</Icon>
                  <h5>All Notifications</h5>
                </Notification>

                {notificationLists?.map((notification, index) =>
                  notification.status === false ? (
                    notification.user_type_notifaction === 'Admin' ? (
                      <NotificationCard key={index}>
                        <>
                          <Formik
                            // onSubmit={handleSubmit(notification._id)}
                            enableReinitialize={true}
                            initialValues={{}}
                          >
                            {({ values, handleSubmit }) => (
                              <Form>
                                <DeleteButton
                                  size="small"
                                  className="deleteButton"
                                  onClick={() => handelDelete(notification._id)}
                                >
                                  <Icon className="icon">clear</Icon>
                                </DeleteButton>
                              </Form>
                            )}
                          </Formik>
                          {/* <Link
                             to={`/${notification.h_path}`}
                             onClick={handleDrawerToggle}
                             style={{ textDecoration: 'none' }}
                           > */}
                          <Card
                            sx={{ mx: 2, mb: 3, backgroundColor: '#d0e6fe' }}
                            elevation={3}
                          >
                            <CardLeftContent>
                              <Box display="flex">
                                <Icon color="primary">notifications</Icon>
                                <Heading>Alert For Acquire</Heading>
                              </Box>
                              <Small className="messageTime">
                                {getTimeDifference(
                                  new Date(notification.createdAt)
                                )}
                                &nbsp; ago
                              </Small>
                            </CardLeftContent>
                            <Box sx={{ px: 2, pt: 1, pb: 2 }}>
                              <Paragraph sx={{ m: 0 }}>
                                {notification.newwork_notification}
                              </Paragraph>
                              <Paragraph sx={{ m: 0 }}>
                                {notification.drawing_notification}
                              </Paragraph>
                              <Paragraph sx={{ m: 0 }}>
                                {notification.sitesurvey_notification}
                              </Paragraph>
                              <Paragraph sx={{ m: 0 }}>
                                {notification.aluiminium_notification}
                              </Paragraph>
                              <Paragraph sx={{ m: 0 }}>
                                {notification.glass_notification}
                              </Paragraph>
                              <Paragraph sx={{ m: 0 }}>
                                {notification.handover_notification}
                              </Paragraph>
                            </Box>
                          </Card>
                        </>
                      </NotificationCard>
                    ) : null
                  ) : null
                )}
                {/* {!!notificationLists?.length && (
                  <Box sx={{ color: secondary }}>
                    <Button>Clear Notifications</Button>
                  </Box>
                )} */}
              </Box>
            </Drawer>
          </ThemeProvider>
        </Fragment>
      ) : (
        <Fragment>
          <IconButton onClick={handleDrawerToggle}>
            <Badge color="secondary" badgeContent={totalsms.length}>
              <Icon sx={{ color: textColor }}>notifications</Icon>
            </Badge>
          </IconButton>

          <ThemeProvider theme={settings.themes[settings.activeTheme]}>
            <Drawer
              width={'100px'}
              container={container}
              variant="temporary"
              anchor={'right'}
              open={panelOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <Box sx={{ width: sideNavWidth }}>
                <Notification>
                  <Icon color="primary">notifications</Icon>
                  <h5>All Notifications</h5>
                </Notification>

                {notificationListss?.map((notification, index) =>
                  notification.status === false ? (
                    notification.user_type_notifaction === 'Employee' ? (
                      <NotificationCard key={index}>
                        <Formik
                          // onSubmit={handleSubmit(notification._id)}
                          enableReinitialize={true}
                          initialValues={{}}
                        >
                          {({ values, handleSubmit }) => (
                            <Form>
                              <DeleteButton
                                size="small"
                                className="deleteButton"
                                onClick={() => handelDelete(notification._id)}
                              >
                                <Icon className="icon">clear</Icon>
                              </DeleteButton>
                            </Form>
                          )}
                        </Formik>
                        <Card
                          sx={{ mx: 2, mb: 3, backgroundColor: '#d0e6fe' }}
                          elevation={3}
                        >
                          <CardLeftContent>
                            <Box display="flex">
                              <Icon color="primary">notifications</Icon>
                              <Heading>
                                Alert For{' '}
                                {notification.site_incharge
                                  ? notification.site_incharge
                                  : 'Admin'}{' '}
                              </Heading>
                            </Box>
                            <Small className="messageTime">
                              {getTimeDifference(
                                new Date(notification.createdAt)
                              )}
                              &nbsp; ago
                            </Small>
                          </CardLeftContent>
                          <Box sx={{ px: 2, pt: 1, pb: 2 }}>
                            <Paragraph sx={{ m: 0 }}>
                              {notification.newwork_notification}
                            </Paragraph>

                            <Paragraph sx={{ m: 0 }}>
                              {notification.d_approve}
                            </Paragraph>
                            <Paragraph sx={{ m: 0 }}>
                              {notification.st_approve}
                            </Paragraph>
                            <Paragraph sx={{ m: 0 }}>
                              {notification.al_approve}
                            </Paragraph>
                            <Paragraph sx={{ m: 0 }}>
                              {notification.gl_approve}
                            </Paragraph>
                            <Paragraph sx={{ m: 0 }}>
                              {notification.hd_approve}
                            </Paragraph>
                          </Box>
                        </Card>
                      </NotificationCard>
                    ) : null
                  ) : null
                )}
                {/* {!!notificationLists?.length && (
                  <Box sx={{ color: secondary }}>
                    <Button onClick={() => handelDelete(5)}>
                      Clear Notifications
                    </Button>
                  </Box>
                )} */}
              </Box>
            </Drawer>
          </ThemeProvider>
        </Fragment>
      )}
    </>
  );
};

export default NotificationBar;
