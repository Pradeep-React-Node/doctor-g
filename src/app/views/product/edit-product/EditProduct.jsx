import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { Span } from "app/components/Typography";
// import { validationSchema } from "./ValidationSchema"
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Icon, Stack } from "@mui/material";
import { updateProduct } from 'app/redux/actions/ProductAction';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
  const location = useLocation()
  const productData = location.state
  const id = productData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  const [state, setState] = useState({
    name: productData.name,
    brand: productData.brand,
    color: productData.color,
    size: productData.size,
    price: productData.price,
    delivery_time: productData.delivery_time,
    grade: productData.grade,
    remark: productData.remark,
    insurance: productData.insurance,
    wastage_percentage: productData.wastage_percentage,
    // product_pic:productData.imageList[0],
  });

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  const handleSubmit = async (event) => {
    dispatch(updateProduct(id, state))
    navigate("/products/productlist")
    toast.success('Update Product Successfully!', {
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


  const handleChanges = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };


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
          <Breadcrumb routeSegments={[{ name: "Material List", path: "/products/productlist" }, { name: "Edit Material" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit Material">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
            // initialValues={initialValues}
            // validationSchema={validationSchema}
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
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        name="name"
                        label="Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.name}
                      />
                      <StyledTextField
                        fullWidth
                        multiline
                        size="small"
                        name="brand"
                        variant="outlined"
                        label="Brand"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.brand || ""}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="color"
                        label="Color"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.color || ""}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="size"
                        label="Size"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.size || ""}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="price"
                        label="Price"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.price || ""}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="delivery_time"
                        label="Delivery Date"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.delivery_time || ""}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="wastage_percentage"
                        label="Wastage Percentage"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.wastage_percentage || ""}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="grade"
                        label="Grade"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.grade || ""}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="insurance"
                        label="Insurance"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.insurance || ""}
                      />
                      <StyledTextField
                        fullWidth
                        name="remark"
                        label="Remark"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChanges}
                        value={state.remark || ""}
                      />
                      {/* <DropZone {...getRootProps()}>
                        <input {...getInputProps()} />
                        <FlexBox alignItems="center" flexDirection="column">
                          <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                          {imageList.length ? (
                            <span>{imageList.length} images were selected</span>
                          ) : (
                            <span>Drop Your Product images Here</span>
                          )}
                        </FlexBox>
                      </DropZone> */}
                    </Grid>
                  </Grid>
                  <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                    <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                      <Icon>send</Icon>
                      <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Material</Span>
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

export default EditProduct