import { styled, Grid, Box, Icon, FormControlLabel, Button, Checkbox, Typography } from '@mui/material';
import { Breadcrumb } from "app/components";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Heading, StyledCard, StyledCard2, StyledCard3 } from "../../Style";
import { H4, H3, H2 } from "app/components/Typography";
import { Form } from './FormStyle';
import { Formik } from "formik";
import { updateGlassacphplfixing } from "app/redux/actions/GlassAcpHplFixingAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNotification } from "app/redux/actions/NotificationActions";
import moment from 'moment';

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


const ViewGlassAcpHplFixing = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const glassacphplfixing = location.state;
    const id = glassacphplfixing?._id;


    const [user, setUser] = useState()
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.user.user_type);
        }
    }, []);

    const [state, setState] = useState({
        g_approve_status: glassacphplfixing.g_approve_status,
        user_type_notifaction: glassacphplfixing.user_type_notifaction,
    });

    const handleSubmit = (value) => {
        dispatch(updateGlassacphplfixing(id, state))
        dispatch(createNotification(value))
        navigate("/glassacphplfixing/glassacphplfixing-list")
        // window.location.reload(false);
        toast.success('Update GlassAcpHplFixing Successfully!', {
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
                g_approve_status: !prevState.g_approve_status,
            }
        })
    }


    return (
        <><ToastContainer
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
                    <Breadcrumb routeSegments={[{ name: "Glass Fixing", path: "/glassacphplfixing/glassacphplfixing-list" }, { name: "View Glass Fixing" }]} />
                </Box>


                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>
                </Box>

                <StyledCard3 sx={{ mt: 2, }} elevation={2}>
                    <Box sx={{ mt: 2, }}>
                        <H2> Project Name : {glassacphplfixing?.g_sitename} </H2>
                        <H2> Site Incharge : {glassacphplfixing?.g_siteincharge} </H2>
                    </Box>
                    <Box>
                        <Grid container spacing={1}>
                            <Grid item sm={8} xs={12}>
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
                                                <H4 sx={{ display: "flex", }} mt="10px">1- Check all glass qty, quality and receiving on challan.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb1 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">2- Check colour /code of glass /ACP/HPL.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb2 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">3- Check Thickness, dent, scratches, chipping, shade variation etc.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb3 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">4- Ensure other labour can't damage the glasses or Acp/HPL/Alu. Parts or profile.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb4 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">5- Check the received wastage from glass processor.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb5 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">6- Check the fixing and silicone quality of a part fixing then after satisfaction of site manager to go ahead for further process.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb6 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">7- Remove all glass stickers & protection tape before removing the scaffolding.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {glassacphplfixing?.glassacphplfixing_ckb7 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12} sx={{ mb: 2, }}>

                                {/* <StyledCard sx={{ mt: 2, }} elevation={2}>
                                    <ContentBox>
                                        <Box>
                                            <H4>Deadline fixing Deadline</H4>
                                            <Heading>{moment(glassacphplfixing?.glassacphplfixing_deadline_sm).format("Do MMM YY")}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard> */}
                                <StyledCard2 sx={{ mt: 2, px: 2, py: 2, height: "40%", }} elevation={3}>
                                    <ContentBox>
                                        <Icon className="icon">assignmentOutlined</Icon>
                                        <Box ml="12px">
                                            <H4>Remarks</H4>
                                            <Heading>{glassacphplfixing?.add_glassacphplfixing_remark}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard2>

                                <Box sx={{ mt: 2, mb: 5, }}>
                                    <IMG src={"http://localhost:6002/uploads/" + glassacphplfixing?.glassacp_pic} alt="IMG" />
                                </Box>
                            </Grid>
                        </Grid>

                        {user === "Admin" ?
                            <Formik
                                onSubmit={handleSubmit}
                                enableReinitialize={true}
                                initialValues={{
                                    gl_approve: "Your New Glass / ACP Approved By Admin",
                                    site_incharge: glassacphplfixing?.g_siteincharge,
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
                                            control={<Checkbox checked={state?.g_approve_status === true ? 'Checked' : ''} />}
                                            name="g_approve_status"
                                            value={true}
                                            onChange={handleCheckBox1}
                                            label={<Typography style={{ fontSize: '20px' }}>Approve Glass Delivery</Typography>}
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

export default ViewGlassAcpHplFixing;
