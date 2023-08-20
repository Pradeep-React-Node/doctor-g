import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
// import { validationSchema } from "./ValidationSchema"
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, styled, Table, FormControlLabel, Checkbox, Typography, TableBody, TableCell, TableHead, IconButton, TableRow, } from "@mui/material";
import { updateSurvey } from 'app/redux/actions/SurveyAction';
import { Form, StyledTextField, DropZone } from './FormStyle';
import { getUserList } from "../../../redux/actions/userAction";
import { useLocation } from 'react-router-dom';
import { StyledCard4 } from "../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const EditSurveyForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const surveyData = location.state
  const id = surveyData?._id;


  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };


  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch])


  const [elevationImages, setElevationImages] = useState([
    { img_el_add_commnet: surveyData.img_el_add_commnet },
  ]);

  const addelevationImage = () => {
    let object = {
      img_el_add_commnet: surveyData.img_el_add_commnet,
    }

    setElevationImages([...elevationImages, object])
  }


  const [floorfinishings, setFloorfinishings] = useState([
    { f_floor_no: '', f_finishing_status: '', f_add_review: '' },
  ]);

  const addflFinishing = () => {
    let object = {
      f_floor_no: surveyData.f_floor_no,
      f_finishing_status: surveyData.f_finishing_status,
      f_add_review:surveyData.f_add_review
    }

    setFloorfinishings([...floorfinishings, object])
  };

  const [welevations, setWelevations] = useState([
    { hw_floor_no: "", hw_height: "", hw_width: "", hw_elevation: "", hw_floor_height: "", hw_beam_height: "", hw_slab_height: "" },
  ]);

  const addwelevation = () => {
    let object = {
      hw_floor_no: '',
      hw_height: '',
      hw_width: '',
      hw_elevation: '',
      hw_floor_height: '',
      hw_beam_height: '',
      hw_slab_height: ''
    }

    setWelevations([...welevations, object])
  };

  const [waterls, setWaterls] = useState([{ w_floor_no: "", water_level: "", w_beam_height: "", w_slab_height: "", w_height_width: "" },]);

  const addWaterL = () => {
    let object = {
      w_floor_no: '',
      water_level: '',
      w_beam_height: '',
      w_slab_height: '',
      w_height_width: ''
    }

    setWaterls([...waterls, object])
  };


  const onChange = (e, index) => {

    const updateElevationImage = elevationImages.map((elevationImage, i) => index === i
      ? Object.assign(elevationImage, { [e.target.name]: e.target.value })
      : surveyData.elevationImage
    );
    setElevationImages(updateElevationImage);


    const updatefloorFinishing = floorfinishings.map((floorfinishing, i) => index === i
      ? Object.assign(floorfinishing, { [e.target.name]: e.target.value })
      : floorfinishing
    );
    setFloorfinishings(updatefloorFinishing);

    const updatWaterls = waterls.map((waterl, i) => index === i
      ? Object.assign(waterl, { [e.target.name]: e.target.value })
      : waterl
    );
    setWaterls(updatWaterls);

    const updatwidthElevation = welevations.map((widthelevation, i) => index === i
      ? Object.assign(widthelevation, { [e.target.name]: e.target.value })
      : widthelevation
    );
    setWelevations(updatwidthElevation);
  }


  const removeelevationImage = (index) => {
    const filteredElevationImage = [...elevationImages];
    filteredElevationImage.splice(index, 1);
    setElevationImages(filteredElevationImage);
  }

  const removefloorFinishing = (index) => {
    const filteredFloorFinishing = [...floorfinishings];
    filteredFloorFinishing.splice(index, 1);
    setFloorfinishings(filteredFloorFinishing);
  };

  const removeWelevation = (index) => {
    const filteredWGelevation = [...welevations];
    filteredWGelevation.splice(index, 1);
    setWelevations(filteredWGelevation);
  };

  const removeWaterl = (index) => {
    const filteredWaterl = [...waterls];
    filteredWaterl.splice(index, 1);
    setWaterls(filteredWaterl);
  };

  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });


  const handleSubmitAll = (e) => {
    e.preventDefault();
    console.log(elevationImages, floorfinishings, welevations, waterls)
  }

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);


  
  const [state, setState] = useState({
    site_incharge: surveyData.site_incharge,
    ordergroup: surveyData.ordergroup,
    building_saul: surveyData.building_saul,
    floor_finishing_from_client: surveyData.floor_finishing_from_client,
    mail_to_client: surveyData.mail_to_client,
    celling_height: surveyData.celling_height,
    lad_add_commnet: surveyData.lad_add_commnet,
    approve_status: surveyData.approve_status,
    img_el_add_commnet: surveyData.img_el_add_commnet,
    // approve_status: surveyData.approve_status,
  });

  const handleSubmit = (event) => {
    dispatch(updateSurvey(id, state))
    navigate("/emp/survey")
    window.location.reload(false);
    toast.success('Update Survey Successfully!', {
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


  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <>
      {/* Add New Survey................ */}
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
      <Stack spacing={3}>
        <Formik
          onSubmit={handleSubmit}
          enableReinitialize={true}
        // initialValues={{
        //   approve_status: false,
        // }}
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
              <SimpleCard title="Add New Survey">
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledTextField
                      fullWidth
                      name="ordergroup"
                      label="Order Group"
                      size="small"
                      variant="outlined"
                      value={state.ordergroup || ""}
                    >
                    </StyledTextField>
                    <StyledTextField
                      fullWidth
                      size="small"
                      name="site_incharge"
                      variant="outlined"
                      label="Site Incharge"
                      value={state.site_incharge || ""}
                    >
                    </StyledTextField>

                    <StyledTextField
                      fullWidth
                      size="small"
                      name="celling_height"
                      label="celling_height"
                      variant="outlined"
                      value={state.celling_height || ""}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>

                    <StyledTextField
                      fullWidth
                      size="small"
                      name="building_saul"
                      label="building_saul"
                      variant="outlined"
                      value={state.building_saul || ""}
                      onChange={handleChange}
                    />

                    <StyledTextField
                      fullWidth
                      size="small"
                      name="floor_finishing_from_client"
                      label="floor_finishing_from_client"
                      variant="outlined"
                      value={state.floor_finishing_from_client || ""}
                      onChange={handleChange}
                    />

                    <StyledTextField
                      fullWidth
                      size="small"
                      name="mail_to_client"
                      label="mail_to_client"
                      variant="outlined"
                      value={state.mail_to_client || ""}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </SimpleCard>


              {/* Latest Architecture Drawing................ */}

              <SimpleCard title="Latest Architecture Drawing">
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>

                    <DropZone sx={{ height: "40px" }} {...getRootProps()}>
                      <input {...getInputProps()} />
                      <FlexBox alignItems="center" >
                        <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                        {imageList.length ? (
                          <span>{imageList.length} images were selected</span>
                        ) : (
                          <span>Drop Architecture Drawings Here</span>
                        )}
                      </FlexBox>
                    </DropZone>

                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      size="small"
                      name="lad_add_commnet"
                      label="Add Your Commnets"
                      value={state.lad_add_commnet || ""}
                      onChange={handleChange}
                      multiline
                      rows={1}
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                </Grid>


              </SimpleCard>

              {/* Elevation images................ */}

              <SimpleCard title="Elevation images">


                <Box overflow="auto">
                  <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={6}>Elevation images</TableCell>
                        <TableCell colSpan={5}>Add Your Commnets </TableCell>
                        <StyledCell colSpan={1} align="center" />
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {elevationImages.map((elevationImage, index) => (
                        <TableRow key={index} sx={{ position: "relative" }}>

                          <StyledCell colSpan={6} align="left">
                            <DropZone sx={{ mt: "16px", height: "40px" }} {...getRootProps()}>
                              <input {...getInputProps()} />
                              <FlexBox alignItems="center" >
                                <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                                {imageList.length ? (
                                  <span>{imageList.length} images were selected</span>
                                ) : (
                                  <span>Drop Elevation images Here</span>
                                )}
                              </FlexBox>
                            </DropZone>
                          </StyledCell>

                          <StyledCell colSpan={5} align="left">
                            <TextField
                              size="small"
                              name="img_el_add_commnet"
                              label="Add Your Commnets"
                              onChange={(e) => onChange(e, index)}
                              value={elevationImage.img_el_add_commnet}
                              multiline
                              sx={{ ml: 2, width: '100%' }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={1} align="center">
                            <IconButton size="small" onClick={() => removeelevationImage(index)}>
                              <Icon color="error" fontSize="small">
                                clear
                              </Icon>
                            </IconButton>
                          </StyledCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ mt: "16px !important" }}
                    onClick={addelevationImage}
                  >
                    + Add
                  </Button>

                </Box>


              </SimpleCard>

              {/* Floor Finishing................ */}

              <SimpleCard title="Floor Finishing">

                <Box overflow="auto">
                  <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={3}>Floor No</TableCell>
                        <TableCell colSpan={3}>Finishing Status</TableCell>
                        <TableCell colSpan={5}>Add Your Review </TableCell>
                        <StyledCell colSpan={1} align="center" />
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {floorfinishings.map((floorfinishing, index) => (
                        <TableRow key={index} sx={{ position: "relative" }}>
                          <StyledCell colSpan={3} align="left">
                            <TextField
                              size="small"
                              name="f_floor_no"
                              label="Floor No"
                              onChange={(e) => onChange(e, index)}
                              value={floorfinishing.f_floor_no}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={3} align="left">
                            <TextField
                              size="small"
                              name="f_finishing_status"
                              label="Finishing Status"
                              onChange={(e) => onChange(e, index)}
                              value={floorfinishing.f_finishing_status}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={5} align="left">
                            <TextField
                              size="small"
                              name="f_add_review"
                              label="Add Your Review"
                              onChange={(e) => onChange(e, index)}
                              value={floorfinishing.f_add_review}
                              multiline
                              sx={{ width: '100%', m: "10px" }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={1} align="center">
                            <IconButton size="small" onClick={() => removefloorFinishing(index)}>
                              <Icon color="error" fontSize="small">
                                clear
                              </Icon>
                            </IconButton>
                          </StyledCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ mt: "16px !important" }}
                    onClick={addflFinishing}
                  >
                    + Add
                  </Button>
                </Box>


              </SimpleCard>


              {/* Height And Width Elevation wise................ */}

              <SimpleCard title="Height And Width Elevation wise">


                <Box overflow="auto">
                  <Table sx={{ whiteSpace: "pre", minWidth: 850 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2}>Floor No</TableCell>
                        <TableCell colSpan={2}>Height</TableCell>
                        <TableCell colSpan={2}>Width</TableCell>
                        <TableCell colSpan={2}>Elevation</TableCell>
                        <TableCell colSpan={2}>Floor Height</TableCell>
                        <TableCell colSpan={2}>Beam Height </TableCell>
                        <TableCell colSpan={2}>Slab Height </TableCell>
                        <StyledCell colSpan={1} align="center" />
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {welevations.map((widthelevation, index) => (
                        <TableRow key={index} sx={{ position: "relative" }}>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_floor_no"
                              label="Floor No"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_floor_no}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_height"
                              label="Height"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_height}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_width"
                              label="Width"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_width}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_elevation"
                              label="Elevation"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_elevation}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_floor_height"
                              label="Floor Height"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_floor_height}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_beam_height"
                              label="Beam Height"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_beam_height}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="hw_slab_height"
                              label="Slab Height"
                              onChange={(e) => onChange(e, index)}
                              value={widthelevation.hw_slab_height}
                              multiline
                              sx={{ width: '100%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={1} align="center">
                            <IconButton size="small" onClick={() => removeWelevation(index)}>
                              <Icon color="error" fontSize="small">
                                clear
                              </Icon>
                            </IconButton>
                          </StyledCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ mt: "16px !important" }}
                    onClick={addwelevation}
                  >
                    + Add
                  </Button>
                </Box>


              </SimpleCard>

              {/* Water Level................ */}

              <SimpleCard title="Water Lavel">

                <Box overflow="auto">
                  <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={2}>Floor No</TableCell>
                        <TableCell colSpan={2}>Water Level</TableCell>
                        <TableCell colSpan={2}>Beam Height</TableCell>
                        <TableCell colSpan={2}>Slab Height</TableCell>
                        <TableCell colSpan={3}>Height And Width Elevation wise</TableCell>
                        <StyledCell colSpan={1} align="center" />
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {waterls.map((waterl, index) => (
                        <TableRow key={index} sx={{ position: "relative" }}>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="w_floor_no"
                              label="Floor No"
                              onChange={(e) => onChange(e, index)}
                              value={waterl.w_floor_no}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="water_level"
                              label="Water Level"
                              onChange={(e) => onChange(e, index)}
                              value={waterl.water_level}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>

                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="w_beam_height"
                              label="Beam Height"
                              onChange={(e) => onChange(e, index)}
                              value={waterl.w_beam_height}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={2} align="left">
                            <TextField
                              size="small"
                              name="w_slab_height"
                              label="Slab Height"
                              onChange={(e) => onChange(e, index)}
                              value={waterl.w_slab_height}
                              multiline
                              sx={{ width: '95%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={3} align="left">
                            <TextField
                              size="small"
                              name="w_height_width"
                              label="Height And Width Elevation wise"
                              onChange={(e) => onChange(e, index)}
                              value={waterl.w_height_width}
                              multiline
                              sx={{ width: '100%', m: "10px", }}
                            />
                          </StyledCell>
                          <StyledCell colSpan={1} align="center">
                            <IconButton size="small" onClick={() => removeWaterl(index)} >
                              <Icon color="error" fontSize="small">
                                clear
                              </Icon>
                            </IconButton>
                          </StyledCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ mt: "16px !important" }}
                    onClick={addWaterL}
                  >
                    + Add
                  </Button>
                </Box>
              </SimpleCard>

              <StyledCard4>
                <FormControlLabel
                  control={<Checkbox />}
                  name="approve_status"
                  value={state.approve_status}
                  onChange={handleChange}
                  label={<Typography style={{ fontSize: '20px' }}>Approve Site Survey</Typography>}
                  sx={{ width: '100%', mt: "30px", }}
                />
              </StyledCard4>



              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ alignContent: "center", mt: "0px !important", mr: "10px" }}
                  onClick={handleSubmitAll}
                >
                  Save
                </Button>
                <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                  Update Survey
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Stack>
    </>
  )
}


export default EditSurveyForm