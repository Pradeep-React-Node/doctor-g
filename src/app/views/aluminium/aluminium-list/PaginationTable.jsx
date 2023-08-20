import { Link } from 'react-router-dom'
import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  Chip,
  TableHead,
  TablePagination,
  TableRow,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAluminiumList, deleteAluminium } from "../../../redux/actions/AluminiumAction";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Container, StyledTable, StylPopUp, Heading } from "../../Style";
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
  color: "#ec412c",
  borderColor: "#ec412c",
  backgroundColor: "rgba(236,65,44,.1)",
  "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));


const PaginationTable = (props) => {
  const navigate = useNavigate()

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

  const aluminiumData = useSelector(state => state.aluminiums.aluminiumList);

  useEffect(() => {
    dispatch(getAluminiumList());
  }, [dispatch]);

  const deleteAluminiums = async (id) => {
    await deleteAluminium(id);
    dispatch(getAluminiumList())
    toast.success('Delete Aluminium Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


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
        <StyledTable>
          
            {
              aluminiumData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (

                  <>
                    <StylPopUp key={index} sx={{ mb: 2, background: `linear-gradient(87deg,#11cdef 0,#1171ef 100%)!important` }}>
                      <Grid container spacing={2}>
                        <Grid item sm={10} xs={10}>
                          <TableHead>
                            <TableRow style={{ width: "100%" }}>

                              <TableCell style={{ width: '10%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                <ContentBox>
                                  <Box >
                                    <H4 sx={{ color: "black", fontSize: "15px" }}>S.No.</H4>
                                    <Taskbox>
                                      {index + 1}
                                    </Taskbox>
                                  </Box>
                                </ContentBox>
                              </TableCell>

                              <TableCell style={{ width: '25%', padding: "5px", fontSize: "14px", borderBottom: "none" }} align="center">
                                <ContentBox>
                                  <Icon className="icon">location_city</Icon>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "15px" }}>Site Name</H4>
                                    <Heading sx={{ fontSize: "13px" }}>{subscriber.a_site_name}</Heading>
                                  </Box>
                                </ContentBox>
                              </TableCell>

                              <TableCell style={{ width: '26%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                <ContentBox>
                                  <Icon className="icon">engineeringOu</Icon>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "15px" }}>Site Incharge</H4>
                                    <Heading sx={{ fontSize: "13px" }}>{subscriber.a_site_incharge}</Heading>
                                  </Box>
                                </ContentBox>
                              </TableCell>

                              <TableCell style={{ width: '28%', padding: "0px", fontSize: "14px", borderBottom: "none" }}>
                                <ContentBox>
                                  <Icon className="icon">location_city</Icon>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "15px" }}>Remark</H4>
                                    <Heading sx={{ fontSize: "13px", maxWidth: "100px", maxHeight: "20px", overflow: "hidden" }}>{subscriber.remark}</Heading>

                                  </Box>
                                </ContentBox>
                              </TableCell>



                              <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                <ContentBox>
                                  <Box ml="7px" mr="7px">
                                    <H4 sx={{ color: "white", fontSize: "15px" }}> Status</H4>
                                    {subscriber?.a_approve_status === true ? <Chip size="small" style={{ fontSize: "13px" }} label="Aprroved" color="success" /> : <Chip style={{ fontSize: "13px" }} size="small" label="UnAprroved" color="error" />}

                                  </Box>
                                </ContentBox>
                              </TableCell>

                            </TableRow>
                          </TableHead>
                        </Grid>

                        <Grid item sm={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                          <Link
                            variant="contained"
                            to="/aluminium/aluminium-details"
                            state={subscriber}
                          >
                            <IconButton aria-label="details" aria-haspopup="true" sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}>
                              <Icon style={{ color: 'primary' }}>
                                trending_flat
                              </Icon>
                            </IconButton>
                          </Link>

                          <IconButton
                            aria-label="details" aria-haspopup="true" sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}
                            onClick={() => deleteAluminiums(subscriber?._id)}
                          >
                            <Icon color="error">close</Icon>
                          </IconButton>
                        </Grid>
                      </Grid>
                    </StylPopUp>
                  </>
                ))}
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={aluminiumData.length}
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
