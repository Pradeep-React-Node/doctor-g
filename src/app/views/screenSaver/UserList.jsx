import { Link } from 'react-router-dom';
import {
  Card,
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useEffect } from 'react';
import { Breadcrumb } from 'app/components';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList, deleteUser } from 'app/redux/actions/userAction';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledTable = styled(Table)(() => ({
  minWidth: 1000,
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const Container = styled('div')(({ theme }) => ({
  margin: '20px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const UserTable = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const deleteUsers = async (id) => {
    await deleteUser(id);
    toast.success('User Delete Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    dispatch(getUserList());
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        theme="dark"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'User', path: '#' }, { name: 'User List' }]}
          />
        </Box>

        <Card sx={{ px: 0, py: 0 }} elevation={1}>
          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: '5%' }} align="center">
                    S.No.
                  </TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">User Type</TableCell>
                  <TableCell align="center">Created At</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {userData.user.map((subscriber, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">
                      {subscriber.first_name}
                    </TableCell>
                    <TableCell align="center">{subscriber.last_name}</TableCell>
                    <TableCell align="center">{subscriber.email}</TableCell>
                    <TableCell align="center">{subscriber.phone}</TableCell>
                    <TableCell align="center">{subscriber.user_type}</TableCell>
                    <TableCell align="center">
                      {moment(subscriber?.createdAt).format('MMMM Do YYYY')}
                    </TableCell>
                    <TableCell align="center">
                      <Link
                        color="primary"
                        variant="contained"
                        to="/users/edit-user"
                        state={subscriber}
                      >
                        <IconButton aria-label="edit" aria-haspopup="true">
                          <Icon color="primary">edit</Icon>
                        </IconButton>
                      </Link>
                      <Link
                        variant="contained"
                        to="/users/user-details"
                        state={subscriber}
                      >
                        <IconButton aria-label="details" aria-haspopup="true">
                          <Icon style={{ color: 'primary' }}>
                            trending_flat
                          </Icon>
                        </IconButton>
                      </Link>
                      <IconButton
                        aria-label="delete"
                        aria-haspopup="true"
                        onClick={() => deleteUsers(subscriber?._id)}
                      >
                        <Icon color="error">close</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default UserTable;
