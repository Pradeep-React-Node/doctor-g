import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Box, useTheme } from "@mui/system";
import { Formik } from "formik";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, styled, Divider, Table, Typography, TableBody, MenuItem, Checkbox, FormControlLabel, TableCell, TableHead, IconButton, TableRow, } from "@mui/material";
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { StyledCard } from "../../Style";
import { FlexBox } from "app/components/FlexBox";
import { H3, H4 } from "app/components/Typography";
import { updateDrawing } from "app/redux/actions/DrawingAction";
import { useLocation } from 'react-router-dom';
import { getProductList } from "../../../redux/actions/ProductAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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


const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const EditDrawing = () => {
    const location = useLocation()
    const drawingData = location.state
    const id = drawingData?._id;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const productData = useSelector(state => state?.products);

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch])

    const [drawingmt, setDrawingmt] = useState([
        { material: drawingData.material, m_size: drawingData.m_size, m_thickness: "", m_waste: "", },
    ]);

    const adddrawingmt = () => {
        let object2 = {
            material: "",
            m_size: "",
            m_thickness: "",
            m_waste: "",
        };

        setDrawingmt([...drawingmt, object2])
    };

    const onChange = (e, index) => {

        const updatwidthDrawingmt = drawingmt.map((drawingmt, i) => index === i
            ? Object.assign(drawingmt, { [e.target.name]: e.target.value })
            : drawingmt
        );
        setDrawingmt(updatwidthDrawingmt);

    }

    const removeDrawingmt = (index) => {
        const filteredDrawingmt = [...drawingmt];
        filteredDrawingmt.splice(index, 1);
        setDrawingmt(filteredDrawingmt);
    };


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
        d_sitename: drawingData.d_sitename,
        d_siteincharge: drawingData.d_siteincharge,
        material: drawingData.material,
        m_size: drawingData.m_size,
        m_thickness: drawingData.m_thickness,
        drawing_ckb1: drawingData.drawing_ckb1,
        drawing_ckb2: drawingData.drawing_ckb2,
        drawing_ckb3: drawingData.drawing_ckb3,
        drawing_ckb4: drawingData.drawing_ckb4,
        drawing_ckb5: drawingData.drawing_ckb5,
        drawing_ckb6: drawingData.drawing_ckb6,
        drawing_ckb7: drawingData.drawing_ckb7,
        drawing_ckb8: drawingData.drawing_ckb8,
        drawing_ckb9: drawingData.drawing_ckb9,
        drawing_ckb10: drawingData.drawing_ckb10,
        drawing_ckb11: drawingData.drawing_ckb11,
        drawing_ckb12: drawingData.drawing_ckb12,
        drawing_ckb13: drawingData.drawing_ckb13,
        drawing_ckb14: drawingData.drawing_ckb14,
        drawing_ckb15: drawingData.drawing_ckb15,
        drawing_ckb16: drawingData.drawing_ckb16,
        d_waste_material: drawingData.d_waste_material,
        drawing_re_estimate: drawingData.drawing_re_estimate,
        m_waste: drawingData.m_waste,
        drawing_remark: drawingData.drawing_remark,
        drawingmt: drawingData.drawingmt,
    });

    const handleSubmit = (event) => {
        dispatch(updateDrawing(id, state))
        navigate("/emp/drawinglist")
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

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    const handleCheckBox1 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb1: !prevState.drawing_ckb1,
            }
        })
    }
    const handleCheckBox2 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb2: !prevState.drawing_ckb2,
            }
        })
    }
    const handleCheckBox3 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb3: !prevState.drawing_ckb3,
            }
        })
    }
    const handleCheckBox4 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb4: !prevState.drawing_ckb4,
            }
        })
    }
    const handleCheckBox5 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb5: !prevState.drawing_ckb5,
            }
        })
    }

    const handleCheckBox6 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb6: !prevState.drawing_ckb6,
            }
        })
    }

    const handleCheckBox7 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb7: !prevState.drawing_ckb7,
            }
        })
    }
    const handleCheckBox8 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb8: !prevState.drawing_ckb8,
            }
        })
    }
    const handleCheckBox9 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb9: !prevState.drawing_ckb9,
            }
        })
    }
    const handleCheckBox10 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb10: !prevState.drawing_ckb10,
            }
        })
    }
    const handleCheckBox11 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb11: !prevState.drawing_ckb11,
            }
        })
    }
    const handleCheckBox12 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb12: !prevState.drawing_ckb12,
            }
        })
    }
    const handleCheckBox13 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb13: !prevState.drawing_ckb13,
            }
        })
    }
    const handleCheckBox14 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb14: !prevState.drawing_ckb14,
            }
        })
    }

    const handleCheckBox15 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb15: !prevState.drawing_ckb15,
            }
        })
    }
    const handleCheckBox16 = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                drawing_ckb16: !prevState.drawing_ckb16,
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
                    <Breadcrumb routeSegments={[{ name: "Drawing", path: "/drawing/drawing-list" }, { name: "New Drawing" }]} />
                </Box>

                <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                    <Icon >navigate_before</Icon> Back
                </Button>




                <Stack spacing={3}>
                    {/* Material Details................ */}

                    <SimpleCard title="Working Drawing">
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
                                <Form>

                                    <Box overflow="auto">

                                        <Box mt="10px">
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <StyledTextField
                                                        fullWidth
                                                        size="small"
                                                        name="d_sitename"
                                                        label="Site Name."
                                                        value={state.d_sitename || ""}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <StyledTextField
                                                        fullWidth
                                                        size="small"
                                                        name="d_siteincharge"
                                                        label="Site Incharge."
                                                        value={state.d_siteincharge || ""}
                                                        variant="outlined"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Box mt="10px">
                                            <Grid container spacing={3}>
                                                

                                                {/* <Grid item sm={6} xs={12}>

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

                                                </Grid> */}
                                            </Grid>
                                        </Box>

                                        <Divider sx={{ mt: 1, mb: 2 }} />

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
                                                        {state?.drawingmt.map((drawingmts, index) => (
                                                            <TableRow key={index}>
                                                                <TableCell align="center">
                                                                    <StyledTextField
                                                                        fullWidth
                                                                        size="small"
                                                                        name="material"
                                                                        onChange={handleChange}
                                                                        value={drawingmts?.material}
                                                                    >
                                                                        {/* {productData?.productList?.map((item) => (
                                                                            <MenuItem value={item?.name} key={item._id}>
                                                                                {item?.name}
                                                                            </MenuItem>
                                                                        ))} */}
                                                                    </StyledTextField>
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    <StyledTextField
                                                                        fullWidth
                                                                        size="small"
                                                                        name="m_size"
                                                                        onChange={handleChange}
                                                                        value={drawingmts?.m_size || ""}
                                                                        variant="outlined"
                                                                    />
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    <StyledTextField
                                                                        fullWidth
                                                                        size="small"
                                                                        name="m_thickness"
                                                                        onChange={handleChange}
                                                                        value={drawingmts?.m_thickness || ""}
                                                                        variant="outlined"
                                                                    />
                                                                </TableCell>
                                                                <TableCell align="center">
                                                                    <StyledTextField
                                                                        fullWidth
                                                                        size="small"
                                                                        name="m_waste"
                                                                        onChange={handleChange}
                                                                        value={drawingmts?.m_waste || ""}
                                                                        variant="outlined"
                                                                    />
                                                                </TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </StyledTable>
                                            </Box>
                                        </StyledCard>

                                        <Box>
                                            {/* <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                                                <TableHead>
                                                    <TableRow >
                                                        <TableCell style={{ paddingLeft: '15px' }} colSpan={3}>Material List</TableCell>
                                                        <TableCell style={{ paddingLeft: '15px' }} colSpan={2}>Size</TableCell>
                                                        <TableCell style={{ paddingLeft: '15px' }} colSpan={2}>Thickness </TableCell>
                                                        <TableCell style={{ paddingLeft: '15px' }} colSpan={2}>Wastage </TableCell>
                                                        <TableCell style={{ paddingLeft: '15px' }} colSpan={1}>Action </TableCell>

                                                    </TableRow>
                                                </TableHead>
                                            </Table> */}
                                            {/* 
                                            <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                                                <TableBody>
                                                    {drawingmt.map((drawingmtss, index) => (
                                                        <TableRow key={index} sx={{ position: "relative" }}>
                                                            <StyledCell colSpan={3} align="left">
                                                                <StyledTextField
                                                                    fullWidth
                                                                    select
                                                                    size="small"
                                                                    name="material"
                                                                    variant="outlined"
                                                                    label="Material"
                                                                    value={drawingmtss.material || ""}
                                                                    onChange={(e) => onChange(e, index)}
                                                                    sx={{ width: "95%", m: "10px" }}
                                                                >
                                                                    {productData?.productList?.map((item) => (
                                                                        <MenuItem value={item?.name} key={item._id}>
                                                                            {item?.name}
                                                                        </MenuItem>
                                                                    ))}
                                                                </StyledTextField>
                                                            </StyledCell>

                                                            <StyledCell colSpan={2} align="left">
                                                                <TextField
                                                                    size="small"
                                                                    name="m_size"
                                                                    label="Size"
                                                                    onChange={(e) => onChange(e, index)}
                                                                    value={drawingmtss.m_size || ""}
                                                                    multiline
                                                                    sx={{ width: '95%', m: "10px", mr: "10px" }}
                                                                />
                                                            </StyledCell>

                                                            <StyledCell colSpan={2} align="left">
                                                                <TextField
                                                                    size="small"
                                                                    name="m_thickness"
                                                                    label="Thickness"
                                                                    onChange={(e) => onChange(e, index)}
                                                                    value={drawingmtss.m_thickness || ""}
                                                                    multiline
                                                                    sx={{ width: '95%', m: "10px" }}
                                                                />
                                                            </StyledCell>

                                                            <StyledCell colSpan={2} align="left">
                                                                <TextField
                                                                    size="small"
                                                                    name="m_waste"
                                                                    label="Wastage %"
                                                                    onChange={(e) => onChange(e, index)}
                                                                    value={drawingmtss.m_waste || ""}
                                                                    multiline
                                                                    sx={{ width: '95%', m: "10px", }}
                                                                />
                                                            </StyledCell>

                                                            <StyledCell colSpan={1} align="center">
                                                                <IconButton size="small" onClick={() => removeDrawingmt(index)}>
                                                                    <Icon color="error" fontSize="small">
                                                                        clear
                                                                    </Icon>
                                                                </IconButton>
                                                            </StyledCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table> */}

                                            {/* <Button
                                                color="primary"
                                                variant="contained"
                                                sx={{ mt: "16px !important", ml: "13px" }}
                                                onClick={adddrawingmt}
                                            >
                                                + Add
                                            </Button> */}
                                        </Box>
                                    </Box>

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb1 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb1"
                                        onChange={handleCheckBox1}
                                        label={<Typography style={{ fontSize: '20px' }}>Set all plan According site measurements.</Typography>}
                                        sx={{ width: '100%', mt: "30px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb2 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb2"
                                        value={true}
                                        onChange={handleCheckBox2}
                                        label={<Typography style={{ fontSize: '20px' }}>Set all Sections According to site measurements.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb3 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb3"
                                        value={true}
                                        onChange={handleCheckBox3}
                                        label={<Typography style={{ fontSize: '20px' }}>Make typical drawing as specification list.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb4 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb4"
                                        value={true}
                                        onChange={handleCheckBox4}
                                        label={<Typography style={{ fontSize: '20px' }}>After that, make middle division at plans for panel width.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb5 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb5"
                                        value={true}
                                        onChange={handleCheckBox5}
                                        label={<Typography style={{ fontSize: '20px' }}>Then make section middle division as per optimizations.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb6 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb6"
                                        value={true}
                                        onChange={handleCheckBox6}
                                        label={<Typography style={{ fontSize: '20px' }}>Then make all elevation divisions.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb7 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb7"
                                        value={true}
                                        onChange={handleCheckBox7}
                                        label={<Typography style={{ fontSize: '20px' }}>Then cut the typical drawing after formate.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb8 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb8"
                                        value={true}
                                        onChange={handleCheckBox8}
                                        label={<Typography style={{ fontSize: '20px' }}>Send the drawing to senior consultant for calculations Bracket/fastener/Alu. Sections/MS
                                            structure etc.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb9 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb9"
                                        value={true}
                                        onChange={handleCheckBox9}
                                        label={<Typography style={{ fontSize: '20px' }}>Drawing Printout sets for site, office, Architect, client.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb10 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb10"
                                        value={true}
                                        onChange={handleCheckBox10}
                                        label={<Typography style={{ fontSize: '20px' }}>Make store/lockable area at site.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb11 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb11"
                                        value={true}
                                        onChange={handleCheckBox11}
                                        label={<Typography style={{ fontSize: '20px' }}>Tirpal / Mats / Safety equipments.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb12 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb12"
                                        value={true}
                                        onChange={handleCheckBox12}
                                        label={<Typography style={{ fontSize: '20px' }}>Insurance for man power.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb13 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb13"
                                        value={true}
                                        onChange={handleCheckBox13}
                                        label={<Typography style={{ fontSize: '20px' }}>Material order list as per approved make list with timeline as we want.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb14 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb14"
                                        value={true}
                                        onChange={handleCheckBox14}
                                        label={<Typography style={{ fontSize: '20px' }}>Powder/ Anodizing colour code approved.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb15 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb15"
                                        value={true}
                                        onChange={handleCheckBox15}
                                        label={<Typography style={{ fontSize: '20px' }}>Send Brackets ,fasteners list bolt.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />


                                    <Divider sx={{ mt: 3, mb: 2 }} />
                                    {/* <H3 fontWeight={500}>Remarks</H3> */}

                                    {/* <Box>
                                        <Grid container spacing={3}>
                                            <Grid item sm={6} xs={12}>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="drawing_remark"
                                                    label="Add Remarks if any."
                                                    onChange={handleChange}
                                                    value={state.drawing_remark || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box> */}

                                    <Box>
                                        <Grid container spacing={3}>
                                            <Grid item sm={6} xs={12}>
                                                <H3 fontWeight={500}>Remarks</H3>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="drawing_remark"
                                                    label="Add Remarks if any."
                                                    onChange={handleChange}
                                                    value={state.drawing_remark || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>

                                            <Grid item sm={6} xs={12}>
                                                <H3 fontWeight={500}>Re-estimate the Project cost</H3>
                                                <StyledTextField
                                                    fullWidth
                                                    size="small"
                                                    name="drawing_re_estimate"
                                                    label="Re-estimate the Project Cost."
                                                    onChange={handleChange}
                                                    value={state.drawing_re_estimate || ""}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <FormControlLabel
                                        control={<Checkbox checked={state?.drawing_ckb16 === true ? 'Checked' : ''} />}
                                        name="drawing_ckb16"
                                        value={true}
                                        onChange={handleCheckBox16}
                                        label={<Typography style={{ fontSize: '20px' }}>Re-estimate the project if it is increasing then inform the client by mail.</Typography>}
                                        sx={{ width: '100%', mt: "10px", }}
                                    />

                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                                        <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                                            Update Drawing
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
    drawing_ckb1: false,
    drawing_ckb2: false,
    drawing_ckb3: false,
    drawing_ckb4: false,
    drawing_ckb5: false,
    drawing_ckb6: false,
};

export default EditDrawing