import { Link } from 'react-router-dom';
import { Box, styled, TableCell, Grid, TableHead, TablePagination, TableRow, IconButton, Icon } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import { StylPopUp, ContainerForOrder, Heading } from "../Style"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getOrderListByEmp } from "../../redux/actions/OrderAction";
import moment from 'moment';
import { H4 } from "app/components/Typography";

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: "white" },
    '& .icon': { fontSize: '44px', color: "white", },
}));

const StyledIonButton = styled(IconButton)(() => ({
    padding: "8px",
    "&:hover": { color: "#ffffff" },
    "& svg": { fontSize: "14px" },
}));

const Taskbox = styled(StyledIonButton)(() => ({
    padding: "5px 10px",
    borderRadius: "7px",
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
    borderColor: "#ec412c",
    backgroundColor: "rgba(236,65,44,.1)",
    "&:hover": { background: `#ec412c`, color: "#ffffff" },
}));


const TaskList = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const orderData = useSelector(state => state?.orders.workList);

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
            dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
        }
    }, [dispatch]);

    const current = new Date();
    const formattedDate = moment(current).format('DD-MM-YYYY');

    console.log("current date", formattedDate)

    return (

        <>
            <ContainerForOrder>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Work", path: "/orders/order-list" }, { name: "All Work List" }]} />
                </Box>
                <SimpleCard title={"All Work List"}>
                    <Box width="100%" overflow="auto">

                        {
                            orderData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((subscriber, index) => (
                                    <>
                                        <StylPopUp key={index} sx={{ mb: 3, background: "#1da1f2", }}>
                                            <Grid container spacing={2}>
                                                <Grid item sm={11} xs={11}>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell style={{ width: '8%', padding: "5px", fontSize: "16px", borderBottom: "none" }} align="center">
                                                                <ContentBox>
                                                                    <Box >
                                                                        <H4 sx={{ color: "white" }}> Work List</H4>
                                                                        <Taskbox>
                                                                            {index + 1}
                                                                        </Taskbox>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>
                                                            <TableCell style={{ width: '15%', padding: "5px", fontSize: "16px", borderBottom: "none" }} align="center">
                                                                <ContentBox>
                                                                    <Icon className="icon">location_city</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white" }}>Work Group</H4>
                                                                        <Heading>{subscriber.work_order_group}</Heading>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>
                                                            <TableCell style={{ width: '15%', padding: "0px", fontSize: "16px", borderBottom: "none" }} align="center">

                                                                <ContentBox>
                                                                    <Icon className="icon">keyOutlined</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white" }}>Site Owner</H4>
                                                                        <Heading>{subscriber.site_owner}</Heading>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>
                                                            <TableCell style={{ width: '15%', padding: "0px", fontSize: "16px", borderBottom: "none" }} align="center">

                                                                <ContentBox>
                                                                    <Icon className="icon">engineeringOu</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white" }}>Site Incharge</H4>
                                                                        <Heading>{subscriber.site_incharge}</Heading>
                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>
                                                            <TableCell style={{ width: '17%', padding: "0px", fontSize: "16px", borderBottom: "none" }} align="center">

                                                                <ContentBox>
                                                                    <Icon className="icon">location_city</Icon>
                                                                    <Box ml="7px" mr="7px">
                                                                        <H4 sx={{ color: "white" }}> Project Deadline</H4>
                                                                        <Heading>{(moment(subscriber?.deadline).format("MMM Do YYYY"))}</Heading>

                                                                    </Box>
                                                                </ContentBox>
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>

                                                    <Box style={{display:"flex"}} mt="5px">
                                                        <ContentBox style={{  borderRadius:"7px", marginRight:"7px"}}>
                                                            <Box ml="7px" mr="7px">
                                                                <H4 sx={{fontSize:"16px", color:"white"}}>Site Survey Deadline</H4>
                                                                <Heading sx={{fontSize:"16px"}}>{(moment(subscriber?.site_survey_deadline).format("MMM Do YYYY"))}</Heading>
                                                            </Box>
                                                        </ContentBox>

                                                        <ContentBox style={{  borderRadius:"7px", marginRight:"7px"}}>
                                                            <Box ml="7px" mr="7px">
                                                                <H4 sx={{fontSize:"16px", color:"white"}}>Drawing Deadline</H4>
                                                                <Heading sx={{fontSize:"16px"}}>{(moment(subscriber?.drawing_deadline).format("MMM Do YYYY"))}</Heading>
                                                            </Box>
                                                        </ContentBox>
                                                        <ContentBox style={{  borderRadius:"7px", marginRight:"7px"}}>
                                                            <Box ml="7px" mr="7px">
                                                                <H4 sx={{fontSize:"16px", color:"white"}}>Aluminium Deadline</H4>
                                                                <Heading sx={{fontSize:"16px"}}>{(moment(subscriber?.aluminium_deadline).format("MMM Do YYYY"))}</Heading>
                                                            </Box>
                                                        </ContentBox>
                                                        <ContentBox style={{  borderRadius:"7px", marginRight:"7px"}}>
                                                            <Box ml="7px" mr="7px">
                                                                <H4 sx={{fontSize:"16px", color:"white"}}>Glass Fixing Deadline</H4>
                                                                <Heading sx={{fontSize:"16px"}}>{(moment(subscriber?.glassAcphplfixing_deadline).format("MMM Do YYYY"))}</Heading>
                                                            </Box>
                                                        </ContentBox>
                                                        <ContentBox style={{ borderRadius:"7px", marginRight:"7px"}}>
                                                            <Box ml="7px" mr="7px">
                                                                <H4 sx={{fontSize:"16px", color:"white"}}>Handover Deadline</H4>
                                                                <Heading sx={{fontSize:"16px"}}>{(moment(subscriber?.handover_deadline).format("MMM Do YYYY"))}</Heading>
                                                            </Box>
                                                        </ContentBox>
                                                    </Box>
                                                </Grid>

                                                <Grid item sm={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Link variant="contained" to="/orders/order-details" state={subscriber}>
                                                        <IconButton
                                                            aria-label="details"
                                                            aria-haspopup="true"
                                                        >
                                                            <Icon style={{ color: "primary" }} >trending_flat</Icon>
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
                </SimpleCard>
            </ContainerForOrder>


        </>

    );
};

export default TaskList;

