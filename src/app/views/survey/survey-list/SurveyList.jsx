import { Breadcrumb, SimpleCard } from "app/components";
import { Link } from "react-router-dom";
import {
  Box,
  Icon,
  IconButton,
  Chip,
  styled,
  Grid,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurveyList, deleteSurvey } from "app/redux/actions/SurveyAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { H4 } from "app/components/Typography";
import { Container, StyledTable, StylPopUp, Heading } from "../../Style";

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
  color: "#black",
  borderColor: "#ec412c",
  backgroundColor: "rgba(236,65,44,.1)",
  "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));

const SurveyList = () => {
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
  const surveyData = useSelector((state) => state?.survey.surveyList);
  console.log("___RoomsData", surveyData);

  useEffect(() => {
    dispatch(getSurveyList());
  }, [dispatch]);

  const deleteSurveys = async (id) => {
    await deleteSurvey(id);
    dispatch(getSurveyList());
    toast.success("Delete Survey Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
            routeSegments={[
              { name: "Room", path: "survey/survey-list" },
              { name: "Room List" },
            ]}
          />
        </Box>
        <Box width="100%">
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: "10px" }}
          >
            <Link color="primary" variant="contained" to="/survey/new-survey">
              Add Room
            </Link>
          </Button>
        </Box>
        <SimpleCard title="Room List">
          <Box width="100%" overflow="auto">
            <StyledTable>
              {surveyData
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((subscriber, index) => (
                  <>
                    <StylPopUp
                      key={index}
                      sx={{
                        mb: 2,
                        // background: `linear-gradient(87deg,#11cdef 0,#1171ef 100%)!important`,
                        background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(133,230,152,1) 0%, rgba(0,212,255,1) 98%)`,
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
                                    <H4
                                      sx={{ color: "black", fontSize: "15px" }}
                                    >
                                      S.No.
                                    </H4>
                                    <Taskbox>{index + 1}</Taskbox>
                                  </Box>
                                </ContentBox>
                              </TableCell>

                              <TableCell
                                style={{
                                  width: "20%",
                                  padding: "5px",
                                  fontSize: "14px",
                                  borderBottom: "none",
                                }}
                                align="center"
                              >
                                <ContentBox>
                                  {/* <Icon className="icon">location_city</Icon> */}
                                  <Box ml="7px" mr="7px">
                                    <H4
                                      sx={{ color: "white", fontSize: "15px" }}
                                    >
                                      Date
                                    </H4>
                                    <Heading sx={{ fontSize: "13px" }}>
                                      {(subscriber.date) ? (new Date(subscriber.date)).toLocaleDateString() : ''}
                                    </Heading>
                                  </Box>
                                </ContentBox>
                              </TableCell>
                              <Box>
                                {subscriber.slots.map((slot, subIndex) => (
                                  <div key={subIndex}>
                                    <TableCell
                                      style={{
                                        width: "20%",
                                        padding: "0px",
                                        fontSize: "14px",
                                        borderBottom: "none",
                                      }}
                                    >
                                      <ContentBox>
                                        {/* <Icon className="icon">location_city</Icon> */}
                                        <Box ml="7px" mr="7px">
                                          <H4
                                            sx={{
                                              color: "white",
                                              fontSize: "15px",
                                            }}
                                          >
                                            Start
                                          </H4>
                                          <Heading sx={{ fontSize: "13px" }}>
                                            {slot.start}
                                          </Heading>
                                        </Box>
                                      </ContentBox>
                                    </TableCell>

                                    <TableCell
                                      style={{
                                        width: "20%",
                                        padding: "0px",
                                        fontSize: "14px",
                                        borderBottom: "none",
                                      }}
                                    >
                                      <ContentBox>
                                        {/* <Icon className="icon">location_city</Icon> */}
                                        <Box ml="7px" mr="7px">
                                          <H4
                                            sx={{
                                              color: "white",
                                              fontSize: "15px",
                                            }}
                                          >
                                            End
                                          </H4>
                                          <Heading sx={{ fontSize: "13px" }}>
                                            {slot.end}
                                          </Heading>
                                        </Box>
                                      </ContentBox>
                                    </TableCell>

                                    <TableCell
                                      style={{
                                        width: "20%",
                                        padding: "0px",
                                        fontSize: "14px",
                                        borderBottom: "none",
                                      }}
                                    >
                                      <ContentBox>
                                        {/* <Icon className="icon">location_city</Icon> */}
                                        <Box ml="7px" mr="7px">
                                          <H4
                                            sx={{
                                              color: "white",
                                              fontSize: "15px",
                                            }}
                                          >
                                            Doctor
                                          </H4>
                                          <Heading sx={{ fontSize: "13px" }}>
                                            {slot.doctor_name}
                                          </Heading>
                                        </Box>
                                      </ContentBox>
                                    </TableCell>
                                  </div>
                                ))}






                              </Box>
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
                            to="/survey/survey-detail"
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
                                trending_flat
                              </Icon>
                            </IconButton>
                          </Link>

                          <IconButton
                            aria-label="details"
                            aria-haspopup="true"
                            sx={{
                              backgroundColor: "white",
                              padding: "3px",
                              marginRight: "4px",
                            }}
                            onClick={() => deleteSurveys(subscriber?._id)}
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
              count={surveyData?.length}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ "aria-label": "Next Page" }}
              backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
          </Box>
        </SimpleCard>
      </Container>
    </>
  );
};

export default SurveyList;
