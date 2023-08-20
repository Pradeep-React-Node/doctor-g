// import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { validationSchema } from "./ClientValidationSchema"
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Stack, Icon } from "@mui/material";
import { addClient } from 'app/redux/actions/ClientAction';
import { Container, Form, StyledTextField } from './FormStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewClient = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    console.log("client data", values);
    dispatch(addClient(values))
    navigate("/client/client-list")
    // alert("add Product success")
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
          <Breadcrumb routeSegments={[{ name: "Client List", path: "/client/client-list" }, { name: "Add Client" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Add New Client">
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
                      {/* <StyledTextField
                        fullWidth
                        name="id"
                        label="Id"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.id || ""}
                        error={Boolean(touched.id && errors.id)}
                        helperText={touched.id && errors.id}
                      /> */}
                      <StyledTextField
                        fullWidth
                        name="first_name"
                        label="First Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.first_name || ""}
                        error={Boolean(touched.first_name && errors.first_name)}
                        helperText={touched.first_name && errors.first_name}
                      />
                      <StyledTextField
                        fullWidth
                        multiline
                        size="small"
                        name="last_name"
                        variant="outlined"
                        label="Last Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.last_name || ""}
                        error={Boolean(touched.last_name && errors.last_name)}
                        helperText={touched.last_name && errors.last_name}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="email"
                        label="Email"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email || ""}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="phone"
                        label="Phone No."
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone || ""}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                      <StyledTextField
                        fullWidth
                        size="small"
                        name="group_name"
                        label="Group Name"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.group_name || ""}
                        error={Boolean(touched.group_name && errors.group_name)}
                        helperText={touched.group_name && errors.group_name}
                      />
                    </Grid>
                  </Grid>
                  <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, px: 6 }}>
                    Add Client
                  </Button>
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
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  group_name: "",
};
export default AddNewClient