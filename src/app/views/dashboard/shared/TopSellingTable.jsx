import {
  Box,
  Card,
  Icon,
  IconButton,
  Button,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination, Grid
} from '@mui/material';
import moment from 'moment';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getOrderList } from "../../../redux/actions/OrderAction"
import { useDispatch, useSelector } from 'react-redux';
import { StylPopUp, Heading } from "../../Style";
import { H4 } from "app/components/Typography";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction"


const ContentBox = styled(Box)(({ theme }) => ({
  maxWidth: 200,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: "-10px",
  '& small': { color: "white" },
  '& .icon': { fontSize: '30px', color: "white", },
}));

const StyledIonButton = styled(IconButton)(() => ({
  padding: "8px",
  "&:hover": { color: "#ffffff" },
  "& svg": { fontSize: "14px" },
}));

const Taskbox = styled(StyledIonButton)(() => ({
  padding: "5px 10px",
  borderRadius: "7px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#ec412c",
  borderColor: "#ec412c",
  backgroundColor: "rgba(236,65,44,.1)",
  "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));


const StyledTable = styled(Table)(() => ({
  minWidth: "auto",
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));


const TopSellingTable = () => {
  const dispatch = useDispatch();


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const orderData = useSelector(state => state?.orders.workList);
  const orderDatas = useSelector((state) => state?.orders);

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  return (
    <>
      {user === "Employee" ?
        <>
          <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
            <CardHeader>
              <Title>All work list</Title>
              <Button variant="outlined" color="primary" style={{ marginBottom: "10px" }}>
                <Link color="primary" to="/emp/work">
                  View All Work
                </Link>
              </Button>
            </CardHeader>

            <Box width="100%" overflow="auto" sx={{ padding: "10px" }}>
              {
                orderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subscriber, index) => (
                    <>
                      <StylPopUp key={index} sx={{ mb: 2, background: `linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)`, minWidth: 400 }}>
                        <Grid container spacing={2}>
                          <Grid item sm={10} xs={10}>
                            <TableHead>
                              <TableRow>
                                <TableCell style={{ width: '12%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                  <ContentBox>
                                    <Box >
                                      <H4 sx={{ color: "black", fontSize: "12px" }}> Work List</H4>
                                      <Taskbox>
                                        {index + 1}
                                      </Taskbox>
                                    </Box>
                                  </ContentBox>
                                </TableCell>
                                <TableCell style={{ width: '20%', padding: "5px", fontSize: "14px", borderBottom: "none" }} align="center">
                                  <ContentBox>
                                    <Icon className="icon">location_city</Icon>
                                    <Box ml="7px" mr="7px">
                                      <H4 sx={{ color: "white", fontSize: "12px" }}>Work Group</H4>
                                      <Heading sx={{ fontSize: "13px" }}>{subscriber.work_order_group}</Heading>
                                    </Box>
                                  </ContentBox>
                                </TableCell>

                                <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                                  <ContentBox>
                                    <Icon className="icon">engineeringOu</Icon>
                                    <Box ml="7px" mr="7px">
                                      <H4 sx={{ color: "white", fontSize: "12px" }}>Site Incharge</H4>
                                      <Heading sx={{ fontSize: "13px" }}>{subscriber.site_incharge}</Heading>
                                    </Box>
                                  </ContentBox>
                                </TableCell>
                                <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                                  <ContentBox>
                                    <Icon className="icon">location_city</Icon>
                                    <Box ml="7px" mr="7px">
                                      <H4 sx={{ color: "white", fontSize: "12px" }}> Project Deadline</H4>
                                      <Heading sx={{ fontSize: "13px" }}>{(moment(subscriber?.deadline).format("MMM Do YYYY"))}</Heading>

                                    </Box>
                                  </ContentBox>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                          </Grid>

                          <Grid item sm={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Link
                              variant="contained"
                              to="/orders/order-details"
                              state={subscriber}
                            >
                              <IconButton aria-label="details" aria-haspopup="true" sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}>
                                <Icon style={{ color: 'primary' }}>
                                  trending_flat
                                </Icon>
                              </IconButton>
                            </Link>
                          </Grid>

                        </Grid>

                      </StylPopUp>
                    </>
                  ))}
              <TablePagination
                sx={{ px: 2 }}
                page={page}
                component="div"
                rowsPerPage={rowsPerPage}
                count={orderData.length}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                nextIconButtonProps={{ "aria-label": "Next Page" }}
                backIconButtonProps={{ "aria-label": "Previous Page" }}
              />
            </Box>

          </Card>

        </>
        :
        <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
          <CardHeader>
            <Title>All work list</Title>
            <Button variant="outlined" color="primary" style={{ marginBottom: "10px" }}>
              <Link color="primary" to="/orders/order-list">
                View All Work
              </Link>
            </Button>
          </CardHeader>

          <Box width="100%" overflow="auto" sx={{ padding: "10px" }}>
            {
              orderDatas.orderList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                  <>
                    <StylPopUp key={index} sx={{ mb: 2, background: `linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)`, minWidth: 400 }}>
                      <Grid container spacing={2}>
                        <Grid item sm={10} xs={10}>
                          <TableHead>
                            <TableRow>
                              <TableCell style={{ width: '12%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                <ContentBox>
                                  <Box >
                                    <H4 sx={{ color: "black", fontSize: "12px" }}> Work List</H4>
                                    <Taskbox>
                                      {index + 1}
                                    </Taskbox>
                                  </Box>
                                </ContentBox>
                              </TableCell>
                              <TableCell style={{ width: '20%', padding: "5px", fontSize: "14px", borderBottom: "none" }} align="center">
                                <ContentBox>
                                  <Icon className="icon">location_city</Icon>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "12px" }}>Work Group</H4>
                                    <Heading sx={{ fontSize: "13px" }}>{subscriber.work_order_group}</Heading>
                                  </Box>
                                </ContentBox>
                              </TableCell>

                              <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                                <ContentBox>
                                  <Icon className="icon">engineeringOu</Icon>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "12px" }}>Site Incharge</H4>
                                    <Heading sx={{ fontSize: "13px" }}>{subscriber.site_incharge}</Heading>
                                  </Box>
                                </ContentBox>
                              </TableCell>
                              <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                                <ContentBox>
                                  <Icon className="icon">location_city</Icon>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "12px" }}> Project Deadline</H4>
                                    <Heading sx={{ fontSize: "13px" }}>{(moment(subscriber?.deadline).format("MMM Do YYYY"))}</Heading>

                                  </Box>
                                </ContentBox>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                        </Grid>

                        <Grid item sm={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <Link
                            variant="contained"
                            to="/orders/order-details"
                            state={subscriber}
                          >
                            <IconButton aria-label="details" aria-haspopup="true" sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}>
                              <Icon style={{ color: 'primary' }}>
                                trending_flat
                              </Icon>
                            </IconButton>
                          </Link>
                        </Grid>

                      </Grid>

                    </StylPopUp>
                  </>
                ))}
            <TablePagination
              sx={{ px: 2 }}
              page={page}
              component="div"
              rowsPerPage={rowsPerPage}
              count={orderDatas.orderList.length}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ "aria-label": "Next Page" }}
              backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
          </Box>

        </Card>
      }


    </>
  );
};

export default TopSellingTable;
