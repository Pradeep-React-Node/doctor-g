import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Formik } from "formik";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, Divider, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { H3 } from "app/components/Typography";
import { updateGlassacphplfixing } from "app/redux/actions/GlassAcpHplFixingAction";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const EditGlassAcpHplFixing = () => {
    const location = useLocation()
    const glassacphplfixingData = location.state
    const id = glassacphplfixingData?._id;
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
        g_sitename: glassacphplfixingData.g_sitename,
        g_siteincharge: glassacphplfixingData.g_siteincharge,
        glassacphplfixing_ckb1: glassacphplfixingData.glassacphplfixing_ckb1,
        glassacphplfixing_ckb2: glassacphplfixingData.glassacphplfixing_ckb2,
        glassacphplfixing_ckb3: glassacphplfixingData.glassacphplfixing_ckb3,
        glassacphplfixing_ckb4: glassacphplfixingData.glassacphplfixing_ckb4,
        glassacphplfixing_ckb5: glassacphplfixingData.glassacphplfixing_ckb5,
        glassacphplfixing_ckb6: glassacphplfixingData.glassacphplfixing_ckb6,
        glassacphplfixing_ckb7: glassacphplfixingData.glassacphplfixing_ckb7,
        glassacp_pic: glassacphplfixingData.glassacp_pic,
        add_glassacphplfixing_remark: glassacphplfixingData.add_glassacphplfixing_remark,
    });

    const handleSubmit = (event) => {
        dispatch(updateGlassacphplfixing(id, state))
        navigate("/emp/glassacplist")
        window.location.reload(false);
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

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleCheckBox1 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb1: !prevState.glassacphplfixing_ckb1,
            }
        })
    }
    const handleCheckBox2 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb2: !prevState.glassacphplfixing_ckb2,
            }
        })
    }
    const handleCheckBox3 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb3: !prevState.glassacphplfixing_ckb3,
            }
        })
    }
    const handleCheckBox4 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb4: !prevState.glassacphplfixing_ckb4,
            }
        })
    }
    const handleCheckBox5 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb5: !prevState.glassacphplfixing_ckb5,
            }
        })
    }
    const handleCheckBox6 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb6: !prevState.glassacphplfixing_ckb6,
            }
        })
    }
    const handleCheckBox7 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                glassacphplfixing_ckb7: !prevState.glassacphplfixing_ckb7,
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
                    <Breadcrumb routeSegments={[{ name: "GlassAcpHplFixing", path: "/glassacphplfixing/glassacphplfixing-list" }, { name: "New GlassAcpHplFixing" }]} />
                </Box>

                <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                    <Icon >navigate_before</Icon> Back
                </Button>



                <Stack spacing={3}>
                    {/* Material Details................ */}

                    <SimpleCard title="Working GlassAcpHplFixing">
                        <Formik
                            onSubmit={handleSubmit}
                            enableReinitialize={true}
                            initialValues={initialValues}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                //handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setSubmitting,
                                setFieldValue,
                            }) => (
                                <Form>

                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item sm={6} xs={12}>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="g_sitename"
                                                    label="Site Name."
                                                    onChange={handleChange}
                                                    value={state.g_sitename || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item sm={6} xs={12}>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="g_siteincharge"
                                                    label="Site Incharge."
                                                    onChange={handleChange}
                                                    value={state.g_siteincharge || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.handover_ckb1 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb1"
                                        value={true}
                                        onChange={handleCheckBox1}
                                        label={<Typography style={{ fontSize: '20px' }}>Check all glass qty, quality and receiving on challan.</Typography>}
                                        sx={{ width: '100%', mt: "30px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.glassacphplfixing_ckb2 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb2"
                                        value={true}
                                        onChange={handleCheckBox2}
                                        label={<Typography style={{ fontSize: '20px' }}>Check colour /code of glass /ACP/HPL.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.glassacphplfixing_ckb3 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb3"
                                        value={true}
                                        onChange={handleCheckBox3}
                                        label={<Typography style={{ fontSize: '20px' }}>Check Thickness, dent, scratches, chipping, shade variation etc.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.glassacphplfixing_ckb4 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb4"
                                        value={true}
                                        onChange={handleCheckBox4}
                                        label={<Typography style={{ fontSize: '20px' }}>Ensure other labour can't damage the glasses or Acp/HPL/Alu. Parts or profile.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.glassacphplfixing_ckb5 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb5"
                                        value={true}
                                        onChange={handleCheckBox5}
                                        label={<Typography style={{ fontSize: '20px' }}>Check the received wastage from glass processor.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.glassacphplfixing_ckb6 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb6"
                                        value={true}
                                        onChange={handleCheckBox6}
                                        label={<Typography style={{ fontSize: '20px' }}>Check the fixing and silicone quality of a part fixing then after satisfaction of site manager to go ahead for further process.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.glassacphplfixing_ckb7 === true ? 'Checked' : ''} />}
                                        name="glassacphplfixing_ckb7"
                                        value={true}
                                        onChange={handleCheckBox7}
                                        label={<Typography style={{ fontSize: '20px' }}>Remove all glass stickers & protection tape before removing the scaffolding.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <Divider sx={{ mt: 3, mb: 2 }} />
                                    <H3 sx={{ mb: 2 }} fontWeight={500}>Take all photos and upload / Remark </H3>
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
                                                            <span>Upload photos Here</span>
                                                        )}
                                                    </FlexBox>
                                                </DropZone>

                                            </Grid>
                                            <Grid item sm={6} xs={12}>
                                                <TextField
                                                    size="small"
                                                    name="add_glassacphplfixing_remark"
                                                    label="Add Remarks if any."
                                                    onChange={handleChange}
                                                    value={state.add_glassacphplfixing_remark || ""}
                                                    multiline
                                                    rows={1}
                                                    sx={{ width: '100%' }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                                        <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                                            Update GlassAcpHplFixing
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
    glassacphplfixing_ckb1: false,
    glassacphplfixing_ckb2: false,
    glassacphplfixing_ckb3: false,
    glassacphplfixing_ckb4: false,
    glassacphplfixing_ckb5: false,
    glassacphplfixing_ckb6: false,
    glassacphplfixing_ckb7: false,
    // handover_remark: false,
    // client_certificate: false,
    // handover_commnet: false
};

export default EditGlassAcpHplFixing;