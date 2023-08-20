import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, Divider, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { updateApproveDrawing } from "app/redux/actions/ApproveDrawingAction";
import { Container, Form, DropZone, StyledTextField } from './FormStyle';
import { H3, H4 } from "app/components/Typography";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditApprovedDrawing = () => {
    const location = useLocation()
    const appoveDrawingData = location.state
    const id = appoveDrawingData?._id;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [imageList, setImageList] = useState([]);
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        accept: "image/*",
    });

    useEffect(() => {
        setImageList(acceptedFiles);
    }, [acceptedFiles]);

    const { palette } = useTheme();
    const textMuted = palette.text.secondary;


    const [state, setState] = useState({
        ap_site_name: appoveDrawingData.ap_site_name,
        start_date: appoveDrawingData.start_date,
        last_date: appoveDrawingData.last_date,
        aprv_drawing_ckb1: appoveDrawingData.aprv_drawing_ckb1,
        aprv_drawing_ckb2: appoveDrawingData.aprv_drawing_ckb2,
        aprv_drawing_ckb3: appoveDrawingData.aprv_drawing_ckb3,
        aprv_drawing_ckb4: appoveDrawingData.aprv_drawing_ckb4,
        aprv_drawing_ckb5: appoveDrawingData.aprv_drawing_ckb5,
        aprv_drawing_ckb6: appoveDrawingData.aprv_drawing_ckb6,
        aprv_drawing_remark: appoveDrawingData.aprv_drawing_remark,
    });

    const handleSubmit = (event) => {
        dispatch(updateApproveDrawing(id, state))
        navigate("/approved-drawing/approved-drawing-list")
        // window.location.reload(false);
        toast.success('Update Approve Drawing Successfully!', {
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

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleCheckBox1 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                aprv_drawing_ckb1: !prevState.aprv_drawing_ckb1,
            }
        })
    }
    const handleCheckBox2 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                aprv_drawing_ckb2: !prevState.aprv_drawing_ckb2,
            }
        })
    }
    const handleCheckBox3 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                aprv_drawing_ckb3: !prevState.aprv_drawing_ckb3,
            }
        })
    }
    const handleCheckBox4 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                aprv_drawing_ckb4: !prevState.aprv_drawing_ckb4,
            }
        })
    }
    const handleCheckBox5 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                aprv_drawing_ckb5: !prevState.aprv_drawing_ckb5,
            }
        })
    }

    const handleCheckBox6 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                aprv_drawing_ckb6: !prevState.aprv_drawing_ckb6,
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
                    <Breadcrumb routeSegments={[{ name: "Drawing", path: "/drawing/drawing-list" }, { name: "Approved Drawing" }]} />
                </Box>

                <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                    <Icon >navigate_before</Icon> Back
                </Button>




                <Stack spacing={3}>
                    {/* Material Details................ */}

                    <SimpleCard title="Approved Drawing">
                        <Formik
                            onSubmit={handleSubmit}
                            enableReinitialize={true}
                            initialValues={initialValues}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                // handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setSubmitting,
                                setFieldValue,
                            }) => (
                                <Form >
                                    <Box overflow="auto">
                                        <Box mt="10px">
                                            <Grid container spacing={3}>
                                                <Grid item sm={2} xs={12}>
                                                    <Typography style={{ fontSize: '20px' }}>Project Name</Typography>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <StyledTextField
                                                        fullWidth
                                                        size="small"
                                                        name="ap_site_name"
                                                        label="Enter Project Name."
                                                        onChange={handleChange}
                                                        value={state.ap_site_name}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Divider sx={{ mt: 1, mb: 2 }} />

                                        <H4>Site scheduling</H4>
                                        <Grid container spacing={2} alignItems="center">

                                            <Grid item md={2} sm={2} xs={12}>
                                                Start Date
                                            </Grid>

                                            <Grid item md={3} sm={3} xs={12}>
                                                <Box ml="-70px" mt="20px">
                                                    <StyledTextField
                                                        fullWidth
                                                        name="start_date"
                                                        type="date"
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={handleBlur}
                                                        value={state.start_date}
                                                        onChange={handleChange}
                                                    />
                                                </Box>
                                            </Grid>

                                            <Grid item md={2} sm={2} xs={12}>
                                                Last Date
                                            </Grid>

                                            <Grid item md={3} sm={3} xs={12}>
                                                <Box ml="-70px" mt="20px">
                                                    <StyledTextField
                                                        fullWidth
                                                        name="last_date"
                                                        type="date"
                                                        size="small"
                                                        variant="outlined"
                                                        onBlur={handleBlur}
                                                        value={state.last_date}
                                                        onChange={handleChange}

                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.aprv_drawing_ckb1 === true ? 'Checked' : ''} />}
                                        name="aprv_drawing_ckb1"
                                        value={true}
                                        onChange={handleCheckBox1}
                                        label={<Typography style={{ fontSize: '20px' }}>Drawing Printout sets for site, office, Architect, client.</Typography>}
                                        sx={{ width: '100%', mt: "30px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.aprv_drawing_ckb2 === true ? 'Checked' : ''} />}
                                        name="aprv_drawing_ckb2"
                                        value={true}
                                        onChange={handleCheckBox2}
                                        label={<Typography style={{ fontSize: '20px' }}>Make store/lockable area at site.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.aprv_drawing_ckb3 === true ? 'Checked' : ''} />}
                                        name="aprv_drawing_ckb3"
                                        value={true}
                                        onChange={handleCheckBox3}
                                        label={<Typography style={{ fontSize: '20px' }}>Make typical drawing as specification list.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.aprv_drawing_ckb4 === true ? 'Checked' : ''} />}
                                        name="aprv_drawing_ckb4"
                                        value={true}
                                        onChange={handleCheckBox4}
                                        label={<Typography style={{ fontSize: '20px' }}>After that, make middle division at plans for panel width.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.aprv_drawing_ckb5 === true ? 'Checked' : ''} />}
                                        name="aprv_drawing_ckb5"
                                        value={true}
                                        onChange={handleCheckBox5}
                                        label={<Typography style={{ fontSize: '20px' }}>Then make section middle division as per optimizations.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.aprv_drawing_ckb6 === true ? 'Checked' : ''} />}
                                        name="aprv_drawing_ckb6"
                                        value={true}
                                        onChange={handleCheckBox6}
                                        label={<Typography style={{ fontSize: '20px' }}>Then make all elevation divisions.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <Divider sx={{ mt: 3, mb: 2 }} />
                                    <H3 sx={{ mb: 2 }} fontWeight={500}>Take all photos and upload / Remark</H3>

                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item sm={6} xs={12}>

                                                <DropZone sx={{ height: "40px" }} {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <FlexBox alignItems="center" >
                                                        <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                                                        {imageList.length ? (
                                                            <span>{imageList.length} images were selected</span>
                                                        ) : (
                                                            <span>Upload Architecture Drawings Here</span>
                                                        )}
                                                    </FlexBox>
                                                </DropZone>

                                            </Grid>
                                            <Grid item sm={6} xs={12}>
                                                <TextField
                                                    size="small"
                                                    name="aprv_drawing_remark"
                                                    label="Add Remark if any."
                                                    onChange={handleChange}
                                                    value={state.aprv_drawing_remark}
                                                    multiline
                                                    rows={1}
                                                    sx={{ width: '100%' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                                        <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                                            Update Approve Drawing
                                        </Button>
                                    </Box>

                                </Form>
                            )}
                        </Formik>
                    </SimpleCard>
                </Stack>

            </Container>
        </>
    )
}

const initialValues = {
    aprv_drawing_ckb1: false,
    aprv_drawing_ckb2: false,
    aprv_drawing_ckb3: false,
    aprv_drawing_ckb4: false,
    aprv_drawing_ckb5: false,
    aprv_drawing_ckb6: false,
};

export default EditApprovedDrawing