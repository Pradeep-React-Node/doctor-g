import {
  styled,
  Card,
  Chip,
  Icon,
  IconButton,
  Grid,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Avatar,
  Typography,
  Stack,
  Button
} from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getHandoverList,
  deleteHandover,
} from "app/redux/actions/HandoverAction";
import { Container, StyledTable, StylPopUp, Heading } from "../../Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { H4 } from "app/components/Typography";

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "-10px",
  "& small": { color: "white" },
  "& .icon": { fontSize: "40px", color: "white" },
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
  color: "black",
  borderColor: "#ec412c",
  backgroundColor: "rgba(236,65,44,.1)",
  "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));

const HandoverList = () => {
  const imageUrl = 'https://example.com/path-to-image.jpg';
  // const navigate = useNavigate();
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

  const handoverLists = useSelector((state) => state.handover.handoverList);

  useEffect(() => {
    dispatch(getHandoverList());
  }, [dispatch]);

  const deleteHandovers = async (id) => {
    await deleteHandover(id);
    toast.success("Delete Doctor Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    dispatch(getHandoverList());
  };

  console.log("Handover", handoverLists)
  return (
    <Container>
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
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Doctor", path: "/handover/handover-list" },
            { name: "Doctor List" },
          ]}
        />
      </div>
      <Box width="100%">

        <Button variant="contained" color="primary" style={{ marginBottom: "10px" }}>
          <Link color="primary" variant="contained" to="/handover/add-handover">
            Add Doctors
          </Link>
        </Button>

      </Box>
      <SimpleCard title="Doctor List">
        <Box width="100%" overflow="auto">
          <StyledTable>
            {handoverLists
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <>
                  <StylPopUp
                    key={index}
                    sx={{
                      mb: 2,
                      // background: `linear-gradient(#020024,#3ea352 0,#00d4ff 100%)!important`,
                      background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(133,230,152,1) 0%, rgba(0,212,255,1) 98%)`
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item sm={10} xs={10}>
                        <TableHead>
                          <TableRow style={{ width: "100%" }}>
                            <TableCell
                              style={{
                                width: "10%",
                                padding: "0px",
                                fontSize: "14px",
                                borderBottom: "none",
                              }}
                              align="center"
                            >
                              <ContentBox>
                                <Box>
                                  <H4 sx={{ color: "black", fontSize: "15px" }}>
                                    S.No.
                                  </H4>
                                  <Taskbox>{index + 1}</Taskbox>
                                </Box>
                              </ContentBox>
                            </TableCell>

                            <TableCell
                              style={{
                                width: "25%",
                                padding: "5px",
                                fontSize: "14px",
                                borderBottom: "none",
                              }}
                              align="center"
                            >
                              <ContentBox>
                                <Box ml="7px" mr="7px">
                                  <Heading sx={{ fontSize: "13px" }}>
                                    <Avatar
                                      alt="User Avatar"
                                      src={process.env.REACT_APP_IMAGE_PATH + subscriber.doctor_image}
                                      sx={{ width: 45, height: 45 }}
                                    />
                                  </Heading>
                                </Box>
                              </ContentBox>
                            </TableCell>
                            <TableCell
                              style={{
                                width: "25%",
                                padding: "5px",
                                fontSize: "14px",
                                borderBottom: "none",
                              }}
                              align="center"
                            >
                              <ContentBox>
                                {/* <Icon className="icon">location_city</Icon> */}
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ color: "white", fontSize: "15px" }}>
                                    Doctor Name
                                  </H4>
                                  <Heading sx={{ fontSize: "13px" }}>
                                    {subscriber.doctor_name}
                                  </Heading>
                                </Box>
                              </ContentBox>
                            </TableCell>



                            {/* <TableCell
                              component="th"
                              scope="row"
                              padding="none"
                            >
                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                              >
                                <Avatar  src={subscriber.doctor_image} />
                                <Typography variant="subtitle2" noWrap>
                                  
                                </Typography>
                              </Stack>
                            </TableCell> */}

                            <TableCell
                              style={{
                                width: "26%",
                                padding: "0px",
                                fontSize: "14px",
                                borderBottom: "none",
                              }}
                              align="center"
                            >
                              <ContentBox>
                                {/* <Icon className="icon">engineeringOu</Icon> */}
                                <Box ml="7px" mr="7px">
                                  <H4 sx={{ color: "white", fontSize: "15px" }}>
                                    Doctor Department
                                  </H4>
                                  <Heading sx={{ fontSize: "13px" }}>
                                    {subscriber.doctor_department}
                                  </Heading>
                                </Box>
                              </ContentBox>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                      </Grid>

                      <Grid
                        item
                        sm={2}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          variant="contained"
                          to="/handover/edit-handover"
                          state={subscriber}
                        >
                          <IconButton
                            aria-label="details"
                            aria-haspopup="true"
                            sx={{
                              backgroundColor: "white",
                              padding: "3px",
                              marginRight: "4px",
                            }}
                          >
                            <Icon style={{ color: "primary" }}>
                              edit
                            </Icon>
                          </IconButton>
                        </Link>

                        <IconButton
                          sx={{
                            backgroundColor: "white",
                            padding: "3px",
                            marginRight: "4px",
                          }}
                          aria-label="delete"
                          aria-haspopup="true"
                          onClick={() => deleteHandovers(subscriber?._id)}
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
            count={handoverLists?.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
          />
        </Box>
      </SimpleCard>
    </Container>
  );
};

export default HandoverList;
