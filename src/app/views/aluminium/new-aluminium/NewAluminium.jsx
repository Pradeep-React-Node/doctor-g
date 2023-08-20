import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Box, useTheme } from "@mui/system";
import { Formik } from "formik";
import { FlexBox } from "app/components/FlexBox";
import { H3 } from "app/components/Typography";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Icon, Stack, FormControlLabel, Checkbox, Divider, Typography, MenuItem } from "@mui/material";
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { addAluminium } from 'app/redux/actions/AluminiumAction';
import { getAluminiumList } from "../../../redux/actions/AluminiumAction";
import { StyledCard4 } from "../../Style";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNotification } from "app/redux/actions/NotificationActions";


const AddAluminium = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState()


  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });


  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user.user.first_name + " " + user.user.last_name);
  }, []);

  const orderData = useSelector(state => state?.orders.workList);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  const handleSubmit = async (values) => {

    const formData = new FormData();
    formData.append("a_site_name",values.a_site_name);
    formData.append("a_site_incharge",values.a_site_incharge);
    formData.append("aluminium_ckb1",values.aluminium_ckb1);
    formData.append("aluminium_ckb2",values.aluminium_ckb2);
    formData.append("aluminium_ckb3",values.aluminium_ckb3);
    formData.append("aluminium_ckb4",values.aluminium_ckb4);
    formData.append("aluminium_ckb5",values.aluminium_ckb5);
    formData.append("aluminium_ckb6",values.aluminium_ckb6);
    formData.append("aluminium_ckb7",values.aluminium_ckb7);
    formData.append("aluminium_ckb8",values.aluminium_ckb8);
    formData.append("remark",values.remark);
    formData.append("a_approve_status",values.a_approve_status);
    formData.append("aluminium_pic",imageList[0]);

    dispatch(addAluminium(formData))
    dispatch(getAluminiumList());
    dispatch(createNotification(values))
    navigate("/emp/aluminumlist")
    // window.location.reload(true);
    toast.success('Add Aluminium Successfully!', {
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

  // const {
  //   a_site_name,
  //   a_site_incharge,
  //   count_aluminium,
  //   check_coating,
  //   take_receiving_challan,
  //   scaffolding,
  //   make_part_frame,
  //   check_fabrication,
  //   scrap_management,
  //   plaster_depth,
  //   remark,
  //   take_all_photos
  // } = state;



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
          <Breadcrumb routeSegments={[{ name: "Aluminum", path: "/emp/aluminumlist" }, { name: "New Aluminum" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>




        <Stack spacing={3}>
          {/* Material Details................ */}

          <SimpleCard title="Add Aluminum">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={{
                a_site_name: "",
                a_site_incharge: user,
                aluminium_ckb1: false,
                aluminium_ckb2: false,
                aluminium_ckb3: false,
                aluminium_ckb4: false,
                aluminium_ckb5: false,
                aluminium_ckb6: false,
                aluminium_ckb7: false,
                aluminium_ckb8: false,
                remark: "",
                take_all_photos: "",
                a_approve_status: false,
                aluiminium_notification: "New Aluminium Submited for approvel ",
                user_type_notifaction:"Admin",
                site_incharge: user,
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

                  <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                      <StyledTextField
                        type="text"
                        fullWidth
                        select
                        size="small"
                        name="a_site_name"
                        value={values.a_site_name}
                        onChange={handleChange}
                        label="Site Name"
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                      >
                        {orderData?.map((item) => (
                          <MenuItem value={item?.work_order_group} key={item._id}>
                            {item?.work_order_group}
                          </MenuItem>
                        ))}
                      </StyledTextField>
                      {/* <StyledTextField
                        fullWidth
                        size="small"
                        name="aluminium_deadline_sm"
                        label="Aluminium Deadline"
                        variant="outlined"
                        value={values.aluminium_deadline_sm || ""}
                        onChange={handleChange}
                      /> */}
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="a_site_incharge"
                        value={values.a_site_incharge || ""}
                        onChange={handleChange}
                        label="Site Incharge"
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ mt: 1, mb: 1 }} />


                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb1"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Count all aluminium at Coating Plant and quality also.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb2"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check the coating quality at the plant.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb3"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Take receiving on challan from client side.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb4"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Scaffolding/cradle.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb5"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Make part frame for all height and get approved if possible.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb6"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check the fabrication Quality.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb7"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Scrap management.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="aluminium_ckb8"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Plaster depth not more than 30mm.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <Divider sx={{ mt: 3, mb: 2 }} />

                  <H3 sx={{ mb: 2 }} fontWeight={500}>Take all photos and upload / Remark </H3>
                  <Box>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>

                        <DropZone sx={{ height: "40px" }} {...getRootProps()}>
                          <input enctype="multipart/form-data" {...getInputProps()} />
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
                        <StyledTextField
                          size="small"
                          name="remark"
                          label="Add Your Remark."
                          onChange={handleChange}
                          value={values.remark || ""}
                          multiline
                          rows={1}
                          sx={{ width: '100%' }}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <StyledCard4>
                    <FormControlLabel
                      control={<Checkbox />}
                      name="approve_status"
                      value={values.a_approve_status}
                      onChange={handleChange}
                      label={<Typography style={{ fontSize: '20px' }}>Approve Site Survey</Typography>}
                      sx={{ width: '100%', mt: "30px", }}
                    />
                  </StyledCard4>

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

export default AddAluminium