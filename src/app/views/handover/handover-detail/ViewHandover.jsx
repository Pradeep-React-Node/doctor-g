import { styled, Grid, Box, Icon, FormControlLabel, Checkbox, Button, Typography } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Breadcrumb } from "app/components";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Heading, StyledCard, StyledCard2, StyledCard3 } from "../../Style";
import { H2, H4, H3 } from "app/components/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { Form } from './FormStyle'
import { updateHandover } from "app/redux/actions/HandoverAction";
import { createNotification } from "app/redux/actions/NotificationActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
require('dotenv').config();

const IMG = styled("img")(() => ({
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "50px",
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));


const HandoverView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const handover = location.state
    const id = handover?._id;

    const [user, setUser] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.user.user_type);
        }
    }, []);

    const [state, setState] = useState({
        h_approve_status: handover.h_approve_status,
        user_type_notifaction: handover.user_type_notifaction,
    });

    const handleSubmit = (values) => {
        dispatch(updateHandover(id, state))
        dispatch(createNotification(values));
        navigate("/handover/handover-list")
        // window.location.reload(false);
        toast.success('Update Handover Successfully!', {
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

    const handleCheckBox1 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                h_approve_status: !prevState.h_approve_status,
            }
        })
    }

    const path = process.env.PORT;

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
                    <Breadcrumb routeSegments={[{ name: "Handover", path: "/handover/handover-list" }, { name: "View Handover" }]} />
                </Box>


                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>

                    {user === "employee" ?
                        <Button variant="contained" color="primary">
                            <Link style={{ display: "flex", alignItems: "center" }} color="primary" variant="contained" to="/handover/edit-handover" state={handover}>
                                <Icon style={{ fontSize: "19px" }}>edit</Icon> <span style={{ marginLeft: "5px" }}>Update Handover</span>
                            </Link>
                        </Button>
                        : null}

                </Box>

                <StyledCard3 sx={{ mt: 2, }} elevation={2}>

                    <Box>
                        <Grid container spacing={1}>
                            <Grid item sm={8} xs={12}>
                                <Box>
                                    <Grid container spacing={1}>
                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Box>
                                                        <H4>Project Name</H4>
                                                        <Heading>{handover?.h_sitename}</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Icon className="icon"></Icon>
                                                    <Box>
                                                        <H4>Site Incharge</H4>
                                                        <Heading>{handover?.h_siteincharge}</Heading>
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
                                            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                                                <H3> Status </H3>
                                            </Box>

                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">1- Get your scrap back with verification.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb1 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">2- Check all joint of silicone before removal of scaffolding.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb2 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">3- Water test.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb3 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">4- Cleaning Sticker/protection tape removal etc.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb4 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">5- Measurement before removal of scaffolding.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb5 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">6- Return challan & scaffolding if scaffolding is our side.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb6 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">7- Scaffolding labour, bill and measurement check.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb7 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">8- Check Contractor's safety equipments bags/tools if any.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {handover?.handover_ckb8 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </Grid>

                            <Grid item sm={4} xs={12} sx={{ mb: 2, }}>
                                {/* <StyledCard sx={{ mt: 2, }} elevation={2}>
                                    <ContentBox>
                                        <Box>
                                            <H4>Handover Deadline</H4>
                                            <Heading>{moment(handover?.handover_deadline_sm).format("Do MMM YY")}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard> */}
                                <StyledCard2 sx={{ mt: 2, px: 2, py: 2, height: "50%", }} elevation={3}>
                                    <ContentBox>
                                        <Icon className="icon">assignmentOutlined</Icon>
                                        <Box ml="12px">
                                            <H4>Remarks</H4>
                                            <Heading>{handover?.add_handover_commnet}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard2>

                                <Box sx={{ mt: 2, mb: 5, }}>
                                    <IMG src={"http://localhost:6002/uploads/" + handover?.handover_pic} alt="IMG" />
                                </Box>
                            </Grid>
                        </Grid>

                        {user === "Admin" ?

                            <Formik
                                onSubmit={handleSubmit}
                                enableReinitialize={true}
                                initialValues={{
                                    hd_approve: "Your New Handover Approved By Admin",
                                    site_incharge: handover?.h_siteincharge,
                                    user_type_notifaction: "Employee",
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    setSubmitting,
                                    setFieldValue,
                                }) => (
                                    <Form>
                                        <FormControlLabel
                                            control={<Checkbox checked={state?.h_approve_status === true ? 'Checked' : ''} />}
                                            name="h_approve_status"
                                            value={true}
                                            onChange={handleCheckBox1}
                                            label={<Typography style={{ fontSize: '20px' }}>Approve Handover</Typography>}
                                            sx={{ width: '100%', mt: "30px", }}
                                        />

                                        <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                                            Update Status
                                        </Button>
                                    </Form>
                                )}
                            </Formik>

                            : null}
                    </Box>
                </StyledCard3>
            </Container>
        </>

    );
};

export default HandoverView;
