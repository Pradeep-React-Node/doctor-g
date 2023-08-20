import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
// import { validationSchema } from "./ValidationSchema"
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from "app/components";
import {
  Button,
  Grid,
  TextField,
  Icon,
  Stack,
  styled,
  Table,
  FormControlLabel,
  Checkbox,
  Typography,
  TableBody,
  MenuItem,
  TableCell,
  TableHead,
  IconButton,
  TableRow,
  TextareaAutosize,
} from "@mui/material";
import { addSurvey, getSurveyList } from "app/redux/actions/SurveyAction";
import { addImage, addEvolutionImage } from "app/redux/actions/UploadImages";
import { addImage2 } from "app/redux/actions/UploadImages2";
import { Container, Form, StyledTextField, DropZone } from "./FormStyle";
import { getUserList } from "../../../redux/actions/userAction";
import { StyledCard4 } from "../../Style";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createNotification } from "app/redux/actions/NotificationActions";
import {
  getHandoverList,
} from "app/redux/actions/HandoverAction";
const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const AddSurvey = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handoverLists = useSelector((state) => state.handover.handoverList);
  useEffect(() => {
    dispatch(getHandoverList());
  }, [dispatch]);

  console.log(handoverLists, "+++++++++++++++++")
  ///////DropDown////////
  const options = handoverLists.map(handover => ({
    value: handover.doctor_name,
    label: handover.doctor_name
  }));
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  ///////EndDropDown////////

  const [imageList2, setImageList2] = useState("");

  const elevationimage = imageList2;

  // Water Lavel===================

  const [waterls, setWaterls] = useState([
    {
      start: "",
      end: "",
      doctor_name: "",
    },
  ]);

  const addWaterL = () => {
    let object3 = {
      start: "",
      end: "",
      doctor_name: "",
    };

    setWaterls([...waterls, object3]);
  };

  const onChange = (e, index) => {


    const updatWaterls = waterls.map((waterl, i) =>
      index === i
        ? Object.assign(waterl, { [e.target.name]: e.target.value })
        : waterl
    );
    setWaterls(updatWaterls);


  };
  const removeWaterl = (index) => {
    const filteredWaterl = [...waterls];
    filteredWaterl.splice(index, 1);
    setWaterls(filteredWaterl);
  };

  // const handleSubmitAll = (e) => {
  //   e.preventDefault();
  //   console.log(waterls, floorfinishings, welevations);
  // };

  const [imageList1, setImageList1] = useState([]);

  console.log(imageList1);

  useEffect(() => {
    const formData = new FormData();
    formData.append("elevation_survey_images", imageList2);
    dispatch(addEvolutionImage(formData));
  }, [imageList2]);

  const handleSubmit = async (values) => {
    const data = {
      slots: waterls,
      // site_survey_images: imageList1.name,
      date: values.date
    };

    console.log("data", data);
    dispatch(addSurvey(data));
    dispatch(getSurveyList());
    navigate("/survey/survey-list");
    // window.location.reload(true);
    toast.success("Add Room Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const firstImageUpload = () => {
    const formData = new FormData();
    formData.append("site_survey_images", imageList1);
    dispatch(addImage(formData));
  };


  return (
    <>
      <ToastContainer
        position="top-center"
        theme="colored"
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
          <Breadcrumb
            routeSegments={[
              { name: "Room", path: "/Survey/survey-list" },
              { name: "New Room" },
            ]}
          />
        </Box>

        <Button
          sx={{ mb: 2, pl: 1 }}
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          <Icon>navigate_before</Icon> Back
        </Button>

        {/* Add New Survey................ */}

        <Stack spacing={3}>
          <Formik
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
            enableReinitialize={true}
            initialValues={{
              date: "",
              slots: [
                {
                  start: "",
                  end: "",
                  doctor_name: "",
                },
              ],

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

                {/* Water Level................ */}
                <Stack style={{ marginBottom: "20px" }}>
                  <SimpleCard title="Add Room">
                    <Box overflow="auto">
                      <Grid container spacing={2}>

                        <Grid item xs={6}>
                          <Typography variant="body1">Select Date</Typography>
                          <StyledTextField
                            fullWidth
                            name="date"
                            label="Date"
                            type="date"
                            size="small"
                            variant="outlined"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.date || ""}
                          />
                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                      </Grid>


                      <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                        <TableHead>
                          <TableRow>
                            {/* <TableCell colSpan={2}>Date</TableCell> */}
                            <TableCell colSpan={4}>Start</TableCell>
                            <TableCell colSpan={4}>End</TableCell>
                            <TableCell colSpan={4}>Doctor</TableCell>
                            {/* <TableCell colSpan={3}>Screen Saver</TableCell> */}
                            <StyledCell colSpan={2} align="center" />
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {waterls.map((waterl, index) => (
                            <TableRow key={index} sx={{ position: "relative" }}>
                              <StyledCell colSpan={4} align="left">
                                <TextField
                                  size="small"
                                  name="start"
                                  label="Start"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.start}
                                  multiline
                                  sx={{ width: "90%", m: "4px" }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={4} align="left">
                                <TextField
                                  size="small"
                                  name="end"
                                  label="End"
                                  onChange={(e) => onChange(e, index)}
                                  value={waterl.end}
                                  multiline
                                  sx={{ width: "90%", m: "4px" }}
                                />
                              </StyledCell>

                              <StyledCell colSpan={4} align="left">
                                <TextField
                                  select
                                  size="small"
                                  name="doctor_name"
                                  label="Choose Doctor"
                                  value={waterl.selectedOption}
                                  onChange={(e) => onChange(e, index)}
                                  variant="outlined"
                                  sx={{ width: "180%", m: "4px" }}
                                >
                                  {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </StyledCell>

                              <StyledCell colSpan={10} align="center">
                                <IconButton size="small" onClick={() => removeWaterl(index)}>
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
                </Stack>

                <StyledCard4>
                  <FormControlLabel
                    control={<Checkbox />}
                    name="approve_status"
                    value={values.approve_status}
                    onChange={handleChange}
                    label={
                      <Typography style={{ fontSize: "20px" }}>
                        Approve Site Survey
                      </Typography>
                    }
                    sx={{ width: "100%", mt: "30px" }}
                  />
                </StyledCard4>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* <Button
                    color="primary"
                    variant="contained"
                    sx={{
                      alignContent: 'center',
                      mt: '0px !important',
                      mr: '10px',
                    }}
                    onClick={handleSubmitAll}
                  >
                    Save
                  </Button> */}
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mt: "0px !important", ml: 2, px: 6 }}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Stack>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddSurvey;
