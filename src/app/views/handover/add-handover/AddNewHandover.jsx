import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, Divider, Typography, Checkbox, FormControlLabel, MenuItem } from "@mui/material";
import { addHandover, getHandoverList } from 'app/redux/actions/HandoverAction';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { createNotification } from "app/redux/actions/NotificationActions";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction";
import { H3 } from "app/components/Typography";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddNewHandover = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [imageList, setImageList] = useState([]);
  console.log('img', imageList)
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);


  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("doctor_name", values.doctor_name);
    formData.append("doctor_department", values.doctor_department);
    formData.append("doctor_image", imageList[0]);

    dispatch(addHandover(formData))
    navigate("/handover/handover-list")
    toast.success('Add Handover Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(getHandoverList())
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
          <Breadcrumb routeSegments={[{ name: "Doctor", path: "/handover/handover-list" }, { name: "New Doctor" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>




        <Stack spacing={3}>
          {/* Material Details................ */}

          <SimpleCard title="Add Doctor">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={{
                doctor_name: "",
                doctor_department: "",
                // site_survey_images:"",
                // handover_notification: "New Handover submited for Approval",
                // user_type_notifaction:"Admin",
                // status: false,
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
                <Form >

                  <Box mt="10px">
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          size="small"
                          name="doctor_name"
                          label="Doctor Name"
                          onChange={handleChange}
                          value={values.doctor_name || ""}
                          multiline
                          rows={1}
                          sx={{ width: '100%' }}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          size="small"
                          name="doctor_department"
                          label="Doctor Department."
                          onChange={handleChange}
                          value={values.doctor_department || ""}
                          multiline
                          rows={1}
                          sx={{ width: '100%' }}
                        />
                      </Grid>

                    </Grid>

                  </Box>

                  <Divider sx={{ mt: 3, mb: 2 }} />
                  <Box>
                    <Grid container spacing={3}>
                      <Grid item sm={12} xs={12}>

                        <DropZone sx={{ height: "40px" }} {...getRootProps()}>
                          <input {...getInputProps()} />
                          <FlexBox alignItems="center" >
                            <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                            {imageList.length ? (
                              <span>{imageList.length} images were selected</span>
                            ) : (
                              <span>Upload Doctor photos Here</span>
                            )}
                          </FlexBox>
                        </DropZone>

                      </Grid>
                    </Grid>
                  </Box>

                  <Divider sx={{ mt: 3, mb: 2 }} />

                  <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                    <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                      Submit
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </SimpleCard>
        </Stack>
        {/* <ToastContainer /> */}
      </Container>
    </>
  )
}



export default AddNewHandover;