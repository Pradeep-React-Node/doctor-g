import { Link } from 'react-router-dom';
import { Button, Box, TableBody, TableCell, styled, Grid, TableHead, Chip, TablePagination, TableRow, IconButton, Icon } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import { Container } from "../Style"
import { StyledTable, StylPopUp, Heading } from "../Style"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getSurveyListByEmp } from "app/redux/actions/SurveyAction";
import { ToastContainer } from 'react-toastify';
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
    color: "#ec412c",
    borderColor: "#ec412c",
    backgroundColor: "rgba(236,65,44,.1)",
    "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));

const SurveyList = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const surveyData = useSelector(state => state?.survey.empsurveyList);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch(getSurveyListByEmp(user.user.first_name + " " + user.user.last_name));
        }
    }, [dispatch]);

    const [user, setUser] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.user.user_type);
        }
    }, []);

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
                <Container>
                    <Breadcrumb routeSegments={[{ name: "Employee Survey", path: "/emp/survey" }, { name: "Survey List" }]} />
                </Container>

                <Box width="100%">
                    {user === "Employee" ?
                        <Button variant="contained" color="primary" style={{ marginBottom: "10px" }}>
                            <Link color="primary" variant="contained" to="/survey/new-survey">
                                Add Site Survey
                            </Link>
                        </Button>
                        : null}
                </Box>

                <Box>
                    <SimpleCard title="Employee Survey List">
                        <Box width="100%" overflow="auto">
                            <StyledTable>
                                {
                                    surveyData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        ?.map((subscriber, index) => (

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
                                                                                <H4 sx={{ color: "white", fontSize: "15px" }}>Order Group</H4>
                                                                                <Heading sx={{ fontSize: "13px" }}>{subscriber.ordergroup}</Heading>
                                                                            </Box>
                                                                        </ContentBox>
                                                                    </TableCell>

                                                                    <TableCell style={{ width: '26%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                                                        <ContentBox>
                                                                            <Icon className="icon">engineeringOu</Icon>
                                                                            <Box ml="7px" mr="7px">
                                                                                <H4 sx={{ color: "white", fontSize: "15px" }}>Site Incharge</H4>
                                                                                <Heading sx={{ fontSize: "13px" }}>{subscriber.site_incharge}</Heading>
                                                                            </Box>
                                                                        </ContentBox>
                                                                    </TableCell>

                                                                    <TableCell style={{ width: '28%', padding: "0px", fontSize: "14px", borderBottom: "none" }}>
                                                                        <ContentBox>
                                                                            <Icon className="icon">location_city</Icon>
                                                                            <Box ml="7px" mr="7px">
                                                                                <H4 sx={{ color: "white", fontSize: "15px" }}>Mail To Client</H4>
                                                                                <Heading sx={{ fontSize: "13px" }}>{subscriber.mail_to_client}</Heading>

                                                                            </Box>
                                                                        </ContentBox>
                                                                    </TableCell>

                                                                    <TableCell style={{ width: '25%', padding: "0px", fontSize: "14px", borderBottom: "none" }} align="center">
                                                                        <ContentBox>
                                                                            <Box ml="7px" mr="7px">
                                                                                <H4 sx={{ color: "white", fontSize: "15px" }}> Status</H4>
                                                                                {subscriber?.approve_status === true ? <Chip size="small" style={{ fontSize: "13px" }} label="Aprroved" color="success" /> : <Chip style={{ fontSize: "13px" }} size="small" label="UnAprroved" color="error" />}

                                                                            </Box>
                                                                        </ContentBox>
                                                                    </TableCell>

                                                                </TableRow>
                                                            </TableHead>
                                                        </Grid>

                                                        <Grid item sm={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <Link color="primary" variant="contained" to="/survey/edit-survey" state={subscriber}>
                                                                <IconButton
                                                                    aria-label="details" aria-haspopup="true" sx={{ backgroundColor: "white", padding: "3px", marginRight: "4px" }}
                                                                >
                                                                    <Icon color="primary">edit</Icon>
                                                                </IconButton>
                                                            </Link>
                                                            <Link
                                                                variant="contained"
                                                                to="/survey/survey-detail"
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
                </Box>
            </Container >
        </>
    );
};

export default SurveyList;

