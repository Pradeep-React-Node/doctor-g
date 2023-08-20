import { Card, Grid, Box, TableBody, TableCell, FormControlLabel, Checkbox, Typography, TableRow, Table, Icon, Button } from "@mui/material";
import { H2 } from "app/components/Typography";
import { styled } from "@mui/system";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from "app/components";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import { updateAluminium } from "app/redux/actions/AluminiumAction";
import moment from "moment";
import { Form } from './FormStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
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


const AluminiumDetail = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const aluminiumData = location.state;
    const id = aluminiumData?._id;

    const [user, setUser] = useState()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUser(user.user.user_type);
        }
    }, []);


    const [state, setState] = useState({
        a_approve_status: aluminiumData.a_approve_status,
    });

    const handleSubmit = (event) => {
        dispatch(updateAluminium(id, state))
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
                <Container>
                    <Breadcrumb routeSegments={[{ name: "Survey List", path: "/survey/survey-list" }, { name: "View Survey" }]} />
                </Container>

                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", }} >
                    <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                        <Icon >navigate_before</Icon> Back
                    </Button>


                    {/* {user === "employee" ?
                    <Button variant="contained" color="primary">
                        <Link style={{ display: "flex", alignItems: "center" }} color="primary" variant="contained" to="/glassacphplfixing/add-glassacphplfixing" state={aluminiumData} >
                            <Icon style={{ fontSize: "19px" }}>edit</Icon> <span style={{ marginLeft: "5px" }}>Add Glass/ ACP </span>
                        </Link>
                    </Button>
                    : null} */}

                </Box>

                <Card sx={{ px: 4, py: 4 }} elevation={3}>
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <H2 sx={{ mt: 0, mb: 2 }}>{aluminiumData?.a_site_name}</H2>
                            <Box>
                                <StyledTable >
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Created At </TableCell>
                                            <TableCell align="center">{moment(aluminiumData?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Order Group </TableCell>
                                            <TableCell align="center">{aluminiumData?.a_site_name}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Site Incharge </TableCell>
                                            <TableCell align="center">{aluminiumData?.a_site_incharge}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Building Saul </TableCell>
                                            <TableCell align="center">{aluminiumData?.count_aluminium}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Floor Finishing From Client </TableCell>
                                            <TableCell align="center">{aluminiumData?.check_coating} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Celling Height </TableCell>
                                            <TableCell align="center">{aluminiumData?.take_receiving_challan} </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Mail To Client </TableCell>
                                            <TableCell align="center">{aluminiumData?.scaffolding} </TableCell>
                                        </TableRow>



                                    </TableBody>

                                </StyledTable>

                                {user === "admin" ?
                                    <Form onSubmit={handleSubmit}>
                                        <FormControlLabel
                                            control={<Checkbox checked={state?.a_approve_status === true ? 'Checked' : ''} />}
                                            name="a_approve_status"
                                            value={true}
                                            onChange={handleCheckBox1}
                                            label={<Typography style={{ fontSize: '20px' }}>Approve Aluminium Delevery</Typography>}
                                            sx={{ width: '100%', mt: "30px", }}
                                        />

                                        <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                                            Update Status
                                        </Button>
                                    </Form>
                                    : null}
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    );
};

export default AluminiumDetail;
