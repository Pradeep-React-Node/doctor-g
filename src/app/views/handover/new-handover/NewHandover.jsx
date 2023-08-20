import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik, FieldArray } from "formik";
// import { validationSchema } from "./ValidationSchema"
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, styled, Divider, Table, Typography, TableBody, MenuItem, Checkbox, FormControlLabel, TableCell, TableHead, IconButton, TableRow, } from "@mui/material";
import { addSurvey } from 'app/redux/actions/SurveyAction';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { H3 } from "app/components/Typography";


const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const NewHandover = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const [elevationImages, setElevationImages] = useState([
    { img_el_add_commnet: '' },
  ]);

  const addelevationImage = () => {
    let object = {
      img_el_add_commnet: ''
    }

    setElevationImages([...elevationImages, object])
  }


  const [floorfinishings, setFloorfinishings] = useState([
    { f_floor_no: '', f_finishing_status: '', f_add_review: '' },
  ]);

  // Add Button
  const addflFinishing = () => {
    let object = {
      f_floor_no: '',
      f_finishing_status: '',
      f_add_review: ''
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
      : elevationImage
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

  const [state, setState] = useState([]);
  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  const handleChange = (event) => {
    // event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(elevationImages, floorfinishings, welevations, waterls)
  }


  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  const handleAllSubmit = async (values) => {
    dispatch(addSurvey(state))
    navigate("/survey/new-survey")
    window.location.reload(true);
    alert("add Survey success")
    console.log("value of survey form", values, imageList[0]);
  };

  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Handover", path: "/handover/handover-list" }, { name: "New Handover" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>




        <Stack spacing={3}>
          {/* Material Details................ */}

          <SimpleCard title="Working Handover">
            <Form onSubmit={handleSubmit}>
              {/* <Box overflow="auto">
                <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={3}>Material List</TableCell>
                      <TableCell colSpan={3}>Size</TableCell>
                      <TableCell colSpan={5}>Thickness </TableCell>
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
                            label="Material List"
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
                            label="Size"
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
                            label="Thickness"
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
                </Table> */}

              {/* <Button
                  color="primary"
                  variant="contained"
                  sx={{ mt: "16px !important" }}
                  onClick={addflFinishing}
                >
                  + Add
                </Button> */}
              {/* </Box> */}

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Get your scrap back with verification.</Typography>}
                sx={{ width: '100%', mt: "10px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Check all joint of silicone before removal of scaffolding.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Water test.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Cleaning Sticker/protection tape removal etc.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Measurement before removal of scaffolding.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Return challan & scaffolding if scaffolding is our side.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Scaffolding labour, bill and measurement check.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />

              <FormControlLabel
                control={<Checkbox />}
                label={<Typography style={{ fontSize: '16px' }}>Check Contractor's safety equipments bags/tools if any.</Typography>}
                sx={{ width: '100%', mt: "6px", }}
              />


              {/* <SimpleCard title="Take all photos after cleaning and upload "> */}
              <Divider sx={{ mt: 3, mb: 2 }} />
              <H3 fontWeight={500}>Take all photos after cleaning and upload</H3>
                <Box overflow="auto">
                  <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                    {/* <TableHead>
                      <TableRow> */}
                        {/* <TableCell colSpan={6}>Take all photos after cleaning and upload</TableCell> */}
                        {/* <TableCell colSpan={5}>Add Your Commnets </TableCell> */}
                        {/* <StyledCell colSpan={1} align="center" /> */}
                      {/* </TableRow>
                    </TableHead> */}

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
                                  <span>Drop Cleaning images Here</span>
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
              {/* </SimpleCard> */}


              <Divider sx={{ mt: 3, mb: 2 }} />
              <H3 fontWeight={500}>Completion</H3>
              <Box overflow="auto" title="Material Details">
                <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={5}>Client certificate</TableCell>
                      {/* <TableCell colSpan={5}>Wastage</TableCell> */}
                      <StyledCell colSpan={1} align="center" />
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {floorfinishings.map((floorfinishing, index) => (
                      <TableRow key={index} sx={{ position: "relative" }}>
                        <StyledCell colSpan={5} align="left">
                          <TextField
                            size="small"
                            name="f_floor_no"
                            label="Client certificate"
                            onChange={(e) => onChange(e, index)}
                            value={floorfinishing.f_floor_no}
                            multiline
                            sx={{ width: '100%', m: "10px", }}
                          />
                        </StyledCell>

                        {/* <StyledCell colSpan={5} align="left">
                          <TextField
                            size="small"
                            name="f_finishing_status"
                            label="Wastage %"
                            onChange={(e) => onChange(e, index)}
                            value={floorfinishing.f_finishing_status}
                            multiline
                            sx={{ width: '95%', m: "10px", }}
                          />
                        </StyledCell> */}



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

              <Divider sx={{ mt: 3, mb: 2 }} />
              <H3 fontWeight={500}>Comment</H3>

              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledTextField
                      fullWidth
                      size="small"
                      name="email"
                      label="Add Comment if any."
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Form>
          </SimpleCard>

          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
            <Button
              color="primary"
              variant="contained"
              sx={{ alignContent: "center", mt: "0px !important", mr: "10px" }}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={handleAllSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
              Submit
            </Button>
          </Box>

        </Stack>

      </Container>
    </>
  )
}
// const customerList = [
//   "Stage-1",
//   "Stage-2",
//   "Stage-3",
//   "Stage-4",
//   "Stage-5",
//   "Stage-6",
//   "Stage-7",

// ];


// const initialValues = {
//   building_saul: "",
//   ordergroup: "",
//   floor_finishing_from_client: "",
//   mail_to_client: "",
//   celling_height: "",
//   lad_add_commnet: ""
// };

export default NewHandover;