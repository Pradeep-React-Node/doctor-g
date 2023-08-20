import { styled, Grid, Box, Icon, FormControlLabel, Checkbox, Button, Typography, TableBody, TableCell, Table, TableHead, TableRow, } from '@mui/material';
import React, { useState, useEffect } from "react";
import { Breadcrumb } from "app/components";
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { Container, Heading, StyledCard, StyledCard2, StyledCard3 } from "../../Style";
import { H2, H4, H3 } from "app/components/Typography";
import { updateDrawing } from "app/redux/actions/DrawingAction";
import { createNotification } from "app/redux/actions/NotificationActions";
import { Form } from './FormStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';


const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: "-10px",
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const StyledTable = styled(Table)(() => ({
    width: '100%',
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
}));

const IMG = styled("img")(() => ({
    width: "100%",
    height: "auto",
    borderRadius: "4px",
    marginBottom: "50px",
}));


const DrawingView = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const drawing = location.state
    const id = drawing?._id;


    const [user, setUser] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.user.user_type);
        }
    }, []);

    const [state, setState] = useState({
        approve_status: drawing.approve_status,
        user_type_notifaction: drawing.user_type_notifaction,
    });

    const handleSubmit = (value) => {
        dispatch(updateDrawing(id, state))
        dispatch(createNotification(value))
        navigate("/drawing/drawing-list")
        // window.location.reload(false);
        toast.success('Update Drawing Successfully!', {
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
                approve_status: !prevState.approve_status,
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
                    <Breadcrumb routeSegments={[{ name: "Drawing", path: "/orders/order-list" }, { name: "View Drawing" }]} />
                </Box>

                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>

                    {/* {user === "employee" ?
                                <Button variant="contained" color="primary">
                                <Link style={{ display: "flex", alignItems: "center" }} color="primary" variant="contained" to="/aluminium/new-aluminium" state={drawing}>
                                    <Icon style={{ fontSize:"19px"}}>domain</Icon> <span style={{ marginLeft:"5px"}}>Add Aluminium delivery</span> 
                                </Link>
                            </Button>
                                : null} */}

                </Box>

                <StyledCard3 sx={{ mt: 2, }} elevation={2}>
                    <Box sx={{ mt: 2, }}>
                        <H2> Project Name : {drawing?.d_sitename} </H2>
                        <H2> Site Incharge : {drawing?.d_siteincharge} </H2>
                    </Box>

                    <Box>
                        <Grid container spacing={1}>
                            <Grid item sm={8} xs={12}>
                                <Grid item sm={12} xs={12}>

                                    <StyledCard sx={{ mt: 2, }} elevation={2}>
                                        <Box width="100%" overflow="auto">
                                            <StyledTable>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center"><H4>Material</H4></TableCell>
                                                        <TableCell align="center" ><H4>Material Size</H4></TableCell>
                                                        <TableCell align="center" ><H4>Mate. Thickness</H4> </TableCell>
                                                        <TableCell align="center" ><H4>Material Waste</H4> </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {drawing?.drawingmt.map((drawingmts, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell align="center">{drawingmts?.material}</TableCell>
                                                            <TableCell align="center">{drawingmts?.m_size}</TableCell>
                                                            <TableCell align="center">{drawingmts?.m_thickness}</TableCell>
                                                            <TableCell align="center">{drawingmts?.m_waste}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </StyledTable>
                                        </Box>
                                    </StyledCard>

                                </Grid>

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
                                                <H4 sx={{ display: "flex", }} mt="10px">1- Set all plan According site measurements.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb1 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">2- Set all Sections According to site measurements.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb2 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

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

                                                {drawing?.drawing_ckb3 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

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

                                                {drawing?.drawing_ckb4 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

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

                                                {drawing?.drawing_ckb5 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

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

                                                {drawing?.drawing_ckb6 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">7- Then cut the typical drawing after formate.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb7 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">8- Send the drawing to senior consultant for calculations Bracket/fastener/Alu. Sections/MS
                                                    structure etc.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb8 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">9- Drawing Printout sets for site, office, Architect, client.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb9 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">10- Make store/lockable area at site.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb10 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">11- Tirpal / Mats / Safety equipments.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb11 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">12- Insurance for man power.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb12 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">13- Material order list as per approved make list with timeline as we want.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb13 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">14- Powder/ Anodizing colour code approved.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb14 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">15- Send Brackets ,fasteners list bolt.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb15 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>


                                    <Grid container spacing={1}>
                                        <Grid item sm={9.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, }} elevation={2}>
                                                <H4 sx={{ display: "flex", }} mt="10px">16- Re-estimate the project if it is increasing then inform the client by mail.</H4>
                                            </StyledCard>
                                        </Grid>

                                        <Grid item sm={2.5} xs={12}>
                                            <StyledCard sx={{ mt: 2, display: "flex", justifyContent: "center", }} elevation={2}>

                                                {drawing?.drawing_ckb16 === true ? <Button variant="contained" color="primary"> Copmplete </Button> : <Button variant="contained" disabled> UnCopmplete </Button>}

                                            </StyledCard>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Grid>

                            <Grid item sm={4} xs={12} sx={{ mb: 2, }}>
                                {/* <StyledCard sx={{ mt: 2, }} elevation={2}>
                                    <ContentBox>
                                        <Box>
                                            <H4>Drawing Deadline</H4>
                                            <Heading>{moment(drawing?.drawing_deadline_sm).format("Do MMM YY")}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard> */}

                                <StyledCard2 sx={{ mt: 2, px: 2, py: 2, height: "30%", }} elevation={3}>
                                    <ContentBox>
                                        <Icon className="icon">assignmentOutlined</Icon>
                                        <Box ml="12px">
                                            <H4>Remarks</H4>
                                            <Heading>{drawing?.drawing_remark}</Heading>
                                        </Box>
                                    </ContentBox>
                                </StyledCard2>

                                <Box sx={{ mt: 2, mb: 5, }}>
                                    <IMG src={"http://localhost:6002/uploads/" + drawing?.drawing_pic} alt="IMG" />
                                </Box>
                            </Grid>

                        </Grid>

                        {user === "Admin" ?
                            <Formik
                                onSubmit={handleSubmit}
                                enableReinitialize={true}
                                initialValues={{
                                    d_approve: "Your New Drawing Approved By Admin",
                                    site_incharge: drawing?.d_siteincharge,
                                    user_type_notifaction:"Employee",
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
                                            control={<Checkbox checked={state?.approve_status === true ? 'Checked' : ''} />}
                                            name="approve_status"
                                            value={true}
                                            onChange={handleCheckBox1}
                                            label={<Typography style={{ fontSize: '20px' }}>Approve Drawing</Typography>}
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

export default DrawingView;
