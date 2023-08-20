import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, Divider, Typography, Checkbox, MenuItem, FormControlLabel } from "@mui/material";
import { addGlassacphplfixing } from 'app/redux/actions/GlassAcpHplFixingAction';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { H3 } from "app/components/Typography";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction";
import { getGlassacphplfixingList } from "app/redux/actions/GlassAcpHplFixingAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createNotification } from "app/redux/actions/NotificationActions";


const AddNewGlassAcpHplFixing = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState()

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

  const [imageList, setImageList] = useState([]);
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
    formData.append("g_sitename",values.g_sitename);
    formData.append("g_siteincharge",values.g_siteincharge);
    formData.append("glassacphplfixing_ckb1",values.glassacphplfixing_ckb1);
    formData.append("glassacphplfixing_ckb2",values.glassacphplfixing_ckb2);
    formData.append("glassacphplfixing_ckb3",values.glassacphplfixing_ckb3);
    formData.append("glassacphplfixing_ckb4",values.glassacphplfixing_ckb4);
    formData.append("glassacphplfixing_ckb5",values.glassacphplfixing_ckb5);
    formData.append("glassacphplfixing_ckb6",values.glassacphplfixing_ckb6);
    formData.append("glassacphplfixing_ckb7",values.glassacphplfixing_ckb7);
    formData.append("add_glassacphplfixing_remark",values.add_glassacphplfixing_remark);
    formData.append("g_approve_status",values.g_approve_status);
    formData.append("glassacp_pic",imageList[0]);

    dispatch(addGlassacphplfixing(formData))
    dispatch(getGlassacphplfixingList());
    dispatch(createNotification(values))
    navigate("/emp/glassacplist")
    toast.success('Add GlassAcpHplFixingSuccessfully!', {
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
              initialValues={{
                g_sitename: "",
                g_siteincharge: user,
                glassacphplfixing_ckb1: false,
                glassacphplfixing_ckb2: false,
                glassacphplfixing_ckb3: false,
                glassacphplfixing_ckb4: false,
                glassacphplfixing_ckb5: false,
                glassacphplfixing_ckb6: false,
                glassacphplfixing_ckb7: false,
                add_glassacphplfixing_remark: "",
                g_approve_status: false,
                glass_notification: "New Glass / ACP submited for Approval",
                user_type_notifaction:"Admin",
                status: false,
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

                        <StyledTextField
                          fullWidth
                          select
                          size="small"
                          name="g_sitename"
                          label="Enter Site Name."
                          onChange={handleChange}
                          value={values.g_sitename || ""}
                          variant="outlined"
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
                          name="glassacphplfixing_deadline_sm"
                          label="Glass acp hpl fixing Deadline"
                          variant="outlined"
                          value={values.glassacphplfixing_deadline_sm || ""}
                          onChange={handleChange}
                        /> */}
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <StyledTextField
                          fullWidth
                          size="small"
                          name="g_siteincharge"
                          variant="outlined"
                          label="Employee Name"
                          value={values.g_siteincharge || ""}
                          onChange={handleChange}
                        >
                        </StyledTextField>
                      </Grid>
                    </Grid>
                  </Box>

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb1"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check all glass qty, quality and receiving on challan.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb2"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check colour /code of glass /ACP/HPL.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb3"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check Thickness, dent, scratches, chipping, shade variation etc.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb4"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Ensure other labour can't damage the glasses or Acp/HPL/Alu. Parts or profile.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb5"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check the received wastage from glass processor.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb6"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Check the fixing and silicone quality of a part fixing then after satisfaction of site manager to go ahead for further process.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="glassacphplfixing_ckb7"
                    value={true}
                    onChange={handleChange}
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
                          label="Add Your Remark."
                          onChange={handleChange}
                          value={values.add_glassacphplfixing_remark || ""}
                          multiline
                          rows={1}
                          sx={{ width: '100%' }}
                        />
                      </Grid>
                    </Grid>
                  </Box>


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

      </Container>
      <ToastContainer />
    </>
  )
}


export default AddNewGlassAcpHplFixing;