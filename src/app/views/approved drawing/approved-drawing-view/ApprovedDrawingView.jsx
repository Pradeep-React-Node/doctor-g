import { styled, Grid, Box, Icon, Button } from '@mui/material';
import { Breadcrumb } from "app/components";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Heading, StyledCard, StyledCard2, StyledCard3 } from "../../Style";
import { H2, H4, H3 } from "app/components/Typography";
import moment from 'moment';
import { Link } from "react-router-dom";


const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));


const ApproveDrawingView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const approveDrawing = location.state


    return (
        <>
            <Container>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Approve Drawing", path: "/orders/order-list" }, { name: "View Approve Drawing" }]} />
                </Box>


                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>

                    <Button variant="contained" color="primary">
                        <Link style={{ display: "flex", alignItems: "center" }} color="primary" variant="contained" to="/approved-drawing/edit-approved-drawing" state={approveDrawing}>
                            <Icon style={{ fontSize: "19px" }}>edit</Icon> <span style={{ marginLeft: "5px" }}>Update Approve Drawing</span>
                        </Link>
                    </Button>

                </Box>

                <StyledCard3 sx={{ mt: 2, }} elevation={2}>
                    <Box sx={{ mt: 2, }}>
                        <H2> Project Name : {approveDrawing?.ap_site_name} </H2>
                    </Box>

                    <Box>
                        <Grid container spacing={1}>
                            <Grid item sm={8} xs={12}>
                                <Box>
                                    <Grid container spacing={1}>
                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Icon className="icon">event_available</Icon>
                                                    <Box ml="12px">
                                                        <H4>Project Start Date</H4>
                                                        <Heading>{moment(approveDrawing?.start_date).format("MMM Do YY")}</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Icon className="icon">event_available</Icon>
                                                    <Box ml="12px">
                                                        <H4>Project End Date</H4>
                                                        <Heading>{moment(approveDrawing?.last_date).format("MMM Do YY")}</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <Box sx={{ mt: 2, }}>
                                                <H3> Work Process </H3>
                                            </Box>
                                          
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <Box sx={{ mt: 2,display: "flex", justifyContent: "center" }}>
                                                <H3> Status </H3>
                                            </Box>
                                           
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">1- Drawing Printout sets for site, office, Architect, client.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {approveDrawing?.aprv_drawing_ckb1 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">2- Make store/lockable area at site.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {approveDrawing?.aprv_drawing_ckb2 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">3- Make typical drawing as specification list.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {approveDrawing?.aprv_drawing_ckb3 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">4- After that, make middle division at plans for panel width.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {approveDrawing?.aprv_drawing_ckb4 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">5- Then make section middle division as per optimizations.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {approveDrawing?.aprv_drawing_ckb5 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">6- Then make all elevation divisions.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {approveDrawing?.aprv_drawing_ckb6 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12} sx={{ mb: 2, }}>
                                <StyledCard2 sx={{ mt: 2, px: 2, py: 2, height: "100%", }} elevation={3}>
                                    <ContentBox>
                                        <Icon className="icon">assignmentOutlined</Icon>
                                        <Box ml="12px">
                                            <H4>Remarks</H4>
                                            <Heading>{approveDrawing?.aprv_drawing_remark}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard2>
                            </Grid>

                        </Grid>
                    </Box>
                </StyledCard3>


            </Container>
        </>

    );
};

export default ApproveDrawingView;
