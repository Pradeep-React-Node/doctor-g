import { Link } from 'react-router-dom';
import {
  Box,
  Table,
  styled,
  Icon,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Grid
} from '@mui/material';
import { SimpleCard } from "app/components";
import { StylPopUp, Heading } from "../../Style"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, getOrderList } from '../../../redux/actions/OrderAction';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { H4 } from "app/components/Typography";


const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: "-10px",
  '& small': { color: "white" },
  '& .icon': { fontSize: '40px', color: "white", },
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
  color: "white",
  borderColor: "#ec412c",
  backgroundColor: "rgba(236,65,44,.1)",
  "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));



const PaginationTable = (props) => {
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

  const orderData = useSelector((state) => state?.orders);

  useEffect(() => {
    getWorks();
  }, [dispatch]);

  const getWorks = () => {
    dispatch(getOrderList());
  };

  const deleteOrders = async (id) => {
    await deleteOrder(id);
    toast.success('Work Delete Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    dispatch(getOrderList());
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
      
        <Box width="100%" overflow="auto">

          {
            orderData.orderList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <>
                  <StylPopUp key={index} sx={{ mb: 3, background: "#1da1f2", }}>
                    <Grid container spacing={2}>
                      <Grid item sm={10} xs={10}>
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ width: '9%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                              <ContentBox>
                                <Box >
                                  <H4 sx={{ color: "white", fontSize: "14px" }}> Work List</H4>
                                  <Taskbox>
                                    {index + 1}
                                  </Taskbox>
                                </Box>
                              </ContentBox>
                            </TableCell>
                            <TableCell style={{ width: '17%', padding: "5px", fontSize: "14px", borderBottom: "none" }} align="center">
                              <ContentBox>
                                <Icon className="icon">location_city</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ color: "white", fontSize: "14px" }}>Work Group</H4>
                                  <Heading sx={{fontSize: "15px" }}>{subscriber.work_order_group}</Heading>
                                </Box>
                              </ContentBox>
                            </TableCell>
                            <TableCell style={{ width: '20%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                              <ContentBox>
                                <Icon className="icon">keyOutlined</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ color: "white", fontSize: "14px" }}>Site Owner</H4>
                                  <Heading sx={{fontSize: "15px" }}>{subscriber.site_owner}</Heading>
                                </Box>
                              </ContentBox>
                            </TableCell>
                            <TableCell style={{ width: '20%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                              <ContentBox>
                                <Icon className="icon">engineeringOu</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ color: "white", fontSize: "14px" }}>Site Incharge</H4>
                                  <Heading sx={{fontSize: "15px" }}>{subscriber.site_incharge}</Heading>
                                </Box>
                              </ContentBox>
                            </TableCell>
                            <TableCell style={{ width: '20%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">

                              <ContentBox>
                                <Icon className="icon">location_city</Icon>
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ color: "white", fontSize: "14px" }}> Project Deadline</H4>
                                  <Heading sx={{fontSize: "15px" }}>{(moment(subscriber?.deadline).format("MMM Do YYYY"))}</Heading>

                                </Box>
                              </ContentBox>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                      </Grid>

                      <Grid item sm={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <TableHead>
                          <TableRow>
                            <TableCell style={{ borderBottom: "none" }} align="center" >
                            <Link
                              color="primary"
                              variant="contained"
                              to="/orders/edit-order"
                              state={subscriber}
                            >
                              <IconButton aria-label="edit" aria-haspopup="true" sx={{ backgroundColor:"white" , padding:"3px", marginRight:"4px"}}>
                                <Icon fontSize='10px' color="black">edit</Icon>
                              </IconButton>
                            </Link>
                            <Link
                              variant="contained"
                              to="/orders/order-details"
                              state={subscriber}
                            >
                              <IconButton aria-label="details" aria-haspopup="true" sx={{ backgroundColor:"white" , padding:"3px", marginRight:"4px"}}>
                                <Icon style={{ color: 'primary' }}>
                                  trending_flat
                                </Icon>
                              </IconButton>
                            </Link>
                            <IconButton
                            sx={{ backgroundColor:"white" , padding:"3px", marginRight:"4px"}}
                              aria-label="delete"
                              aria-haspopup="true"
                              onClick={() => deleteOrders(subscriber?._id)}
                            >
                              <Icon color="error">close</Icon>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      </TableHead>
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
          count={orderData.orderList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>
    
    </>
  );
};

export default PaginationTable;
