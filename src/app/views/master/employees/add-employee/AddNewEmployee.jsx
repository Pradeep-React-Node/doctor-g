import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { Formik } from "formik";
import { validationSchema } from "./EmployeeValidationSchema";
import { Box, useTheme } from "@mui/system";
import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Icon, Stack } from "@mui/material";
import { addEmployee } from '../../../../redux/actions/EmployeeActions';
import { Container, Form, StyledTextField, DropZone } from './FormStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewEmployee = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const { palette } = useTheme();
  const textMuted = palette.text.secondary;
  const [state1, setState1] = useState()

  const handleSubmit = async (values) => {
    dispatch(addEmployee(values))
    setState1(values)
    navigate("/employee/employeeList-list")
    // alert("add Employee success")
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
  };
  console.log("addd emp", state1);
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
          <Breadcrumb routeSegments={[{ name: "Employees", path: "/client/client-list" }, { name: "New Employee" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Add New Employee">
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
                        label="Employee Name"
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
                        name="employee_type"
                        variant="outlined"
                        label="Employee Type"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.employee_type || ""}
                        error={Boolean(touched.employee_type && errors.employee_type)}
                        helperText={touched.employee_type && errors.employee_type}
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
                        type="number"
                        label="Phone No"
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
                        name="designation"
                        label="Designation"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.designation || ""}
                        error={Boolean(touched.designation && errors.designation)}
                        helperText={touched.designation && errors.designation}
                      />

                    </Grid>
                    <Grid item sm={6} xs={12}>

                      <DropZone {...getRootProps()}>
                        <input {...getInputProps()} />
                        <FlexBox alignItems="center" flexDirection="column">
                          <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                          {imageList.length ? (
                            <span>{imageList.length} images were selected</span>
                          ) : (
                            <span>Drop Your image Here</span>
                          )}
                        </FlexBox>
                      </DropZone>
                    </Grid>
                  </Grid>
                  <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, px: 6 }}>
                    Add Employee
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
  name: "",
  employee_type: "",
  email: "",
  phone: "",
  designation: "",
};
export default AddNewEmployee