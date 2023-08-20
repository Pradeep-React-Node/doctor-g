import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { validationSchema } from "./ValidationSchema"
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Icon, Stack } from "@mui/material";
import { addProduct } from 'app/redux/actions/ProductAction';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AddProductProperties  from 'app/views/product/addproducts/AddProductProperties';

const AddProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [imageList, setImageList] = useState([]);
  const [state, setState] = useState("");
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  console.log("image list from product", imageList?.map((x) => x?.name));

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("brand", values.brand);
    formData.append("color", values.color);
    formData.append("size", values.size);
    formData.append("price", values.price);
    formData.append("delivery_time", values.delivery_time);
    formData.append("wastage_percentage", values.wastage_percentage);
    formData.append("grade", values.grade);
    formData.append("insurance", values.insurance);
    formData.append("remark", values.remark);
    formData.append("product_pic", imageList[0]);

    dispatch(addProduct(formData))
    navigate("/products/productlist")
    toast.success('Add Product Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // const formDataObj = {};
    // formData.forEach((value, key) => (formDataObj[key] = value));
    // console.log("formdata",formDataObj);

    const formDataObj1 = Object.fromEntries(formData.entries());
    setState(formDataObj1);

  };


  console.log("state", state);
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
          <Breadcrumb routeSegments={[{ name: "Material List", path: "/products/productlist" }, { name: "Add Material" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Add New Material">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
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
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        name="name"
                        label="Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name || ""}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                      />
                      <StyledTextField
                        fullWidth
                        multiline
                        size="small"
                        name="brand"
                        variant="outlined"
                        label="Brand"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.brand || ""}
                        error={Boolean(touched.brand && errors.brand)}
                        helperText={touched.brand && errors.brand}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="color"
                        label="Color"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.color || ""}
                        error={Boolean(touched.color && errors.color)}
                        helperText={touched.color && errors.color}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="size"
                        label="Size"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.size || ""}
                        error={Boolean(touched.size && errors.size)}
                        helperText={touched.sizer && errors.size}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="price"
                        label="Price"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.price || ""}
                        error={Boolean(touched.price && errors.price)}
                        helperText={touched.price && errors.price}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="delivery_time"
                        label="Delivery Date"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.delivery_time || ""}
                        error={Boolean(touched.delivery_time && errors.delivery_time)}
                        helperText={touched.delivery_time && errors.delivery_time}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="wastage_percentage"
                        label="Wastage Percentage"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.wastage_percentage || ""}
                        error={Boolean(touched.wastage_percentage && errors.wastage_percentage)}
                        helperText={touched.wastage_percentage && errors.wastage_percentage}
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
                        onChange={handleChange}
                        value={values.grade || ""}
                        error={Boolean(touched.grade && errors.grade)}
                        helperText={touched.grade && errors.grade}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="insurance"
                        label="Insurance"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.insurance || ""}
                        error={Boolean(touched.insurance && errors.insurance)}
                        helperText={touched.insurance && errors.insurance}
                      />
                      <StyledTextField
                        fullWidth
                        name="remark"
                        label="Remark"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.remark || ""}
                        error={Boolean(touched.remark && errors.remark)}
                        helperText={touched.remark && errors.remark}
                      />
                      <DropZone {...getRootProps()}>
                        <input {...getInputProps()} />
                        <FlexBox alignItems="center" flexDirection="column">
                          <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                          {imageList.length ? (
                            <span>{imageList.length} images were selected</span>
                          ) : (
                            <span>Drop Your Product images Here</span>
                          )}
                        </FlexBox>
                      </DropZone>
                    </Grid>
                  </Grid>
                  <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, px: 6 }}>
                    Add Material
                  </Button>
                </Form>
              )}
            </Formik>
          </SimpleCard>
        </Stack>
        {/* <AddProductProperties /> */}
      </Container>
    </>
  )
}
const initialValues = {
  name: "",
  brand: "",
  color: "",
  size: "",
  price: "",
  delivery_time: "",
  wastage_percentage: "",
  grade: "",
  insurance: "",
  remark: "",
};
export default AddProducts