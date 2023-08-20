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
import { updateAluminium } from "app/redux/actions/AluminiumAction";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNotification } from "app/redux/actions/NotificationActions";


const IMG = styled("img")(() => ({
    width:"100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom:"50px",
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));


const AluminiumView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const aluminiumData = location.state
    const id = aluminiumData?._id;

    const [user, setUser] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.user.user_type);
        }
    }, []);

    const [state, setState] = useState({
        a_approve_status: aluminiumData.a_approve_status,
        user_type_notifaction: aluminiumData.user_type_notifaction,
    });

    const handleSubmit = (value) => {
        dispatch(updateAluminium(id, state))
        dispatch(createNotification(value))
        navigate("/aluminium/aluminium-list")
        // window.location.reload(false);
        toast.success('Update Aluminium Successfully!', {
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
                a_approve_status: !prevState.a_approve_status,
            }
        })
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
            <Container>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Aluminium", path: "/aluminium/aluminium-list" }, { name: "View Aluminium" }]} />
                </Box>


                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>

                    {user === "employee" ?
                        <Button variant="contained" color="primary">
                            <Link style={{ display: "flex", alignItems: "center" }} color="primary" variant="contained" to="/aluminium/edit-aluminium" state={aluminiumData}>
                                <Icon style={{ fontSize: "19px" }}>edit</Icon> <span style={{ marginLeft: "5px" }}>Update Aluminium</span>
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
                                                        <H4>Order Group</H4>
                                                        <Heading>{aluminiumData?.a_site_name}</Heading>
                                                    </Box>
                                                </ContentBox>
                                            </StyledCard>
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <ContentBox>
                                                    <Box>
                                                        <H4>Site Incharge</H4>
                                                        <Heading>{aluminiumData?.a_site_incharge}</Heading>
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
                                                <H4 sx={{ display: "flex", }} mt="10px">1- Count all aluminium at Coating Plant and quality also.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb1 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">2- Check the coating quality at the plant.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb2 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">3- Take receiving on challan from client side.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb3 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">4- Scaffolding/cradle.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb4 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">5- Make part frame for all height and get approved if possible.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb5 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">6- Check the fabrication Quality.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb6 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">7- Scrap management.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb7 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">8- Plaster depth not more than 30mm.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {aluminiumData?.aluminium_ckb8 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12} sx={{ mb: 2, }}>
                                {/* <StyledCard sx={{ mt: 2, }} elevation={2}>
                                    <ContentBox>
                                        <Box>
                                            <H4>Aluminium Deadline</H4>
                                            <Heading>{moment(aluminiumData?.aluminium_deadline_sm).format("Do MMM YY")}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard> */}

                                <StyledCard2 sx={{ mt: 2, mb: 2, px: 2, py: 2, height: "50%", }} elevation={3}>
                                    <ContentBox>
                                        <Icon className="icon">assignmentOutlined</Icon>
                                        <Box ml="12px">
                                            <H4>Remarks</H4>
                                            <Heading>{aluminiumData?.remark}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard2>

                                <Box sx={{ mb: 5,}}>
                                    <IMG src={"http://localhost:6002/uploads/" + aluminiumData?.aluminium_pic}  alt="IMG" />
                                </Box>
                            </Grid>
                        </Grid>

                        {user === "Admin" ?
                            <Formik
                                onSubmit={handleSubmit}
                                enableReinitialize={true}
                                initialValues={{
                                    al_approve: "Your New Aluminium Approved By Admin",
                                    user_type_notifaction:"Employee",
                                    site_incharge: aluminiumData?.a_site_incharge,
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
                                    <Form onSubmit={handleSubmit}>
                                        <FormControlLabel
                                            control={<Checkbox checked={state?.a_approve_status === true ? 'Checked' : ''} />}
                                            name="a_approve_status"
                                            value={true}
                                            onChange={handleCheckBox1}
                                            label={<Typography style={{ fontSize: '20px' }}>Approve Aluminium Delivery</Typography>}
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
                {/* <ToastContainer /> */}
            </Container>
        </>

    );
};

export default AluminiumView;
