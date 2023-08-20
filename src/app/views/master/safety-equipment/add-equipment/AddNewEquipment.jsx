import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useDropzone } from "react-dropzone";
import { Formik } from 'formik';
import { validationSchema } from './ValidationSchema';
import { Box } from '@mui/system';
// import { FlexBox } from "app/components/FlexBox";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Stack, Icon } from '@mui/material';
import { addSafetyequipment } from 'app/redux/actions/SafetyequipmentAction';
import { Container, Form, StyledTextField } from './FormStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewEquipment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state2, setState2]=useState();
  
  const handleSubmit = async (values) => {

    dispatch(addSafetyequipment(values));
    navigate('/safety-equipment/equipment-list');
    setState2(values);
    toast.success('Add Safetyequipment Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  console.log('addd emp', state2);


  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: 'Equipment', path: '/safety-equipment/equipment-list' },
              { name: 'New Equipment' },
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


        <Stack spacing={3}>
          <SimpleCard title="Add New Equipment">
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
                        multiline
                        size="small"
                        name="name"
                        variant="outlined"
                        label="Equipment Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name || ''}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mb: 2, px: 6 }}
                  >
                    Add Equipment
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
  id: "",
  name: "",
};
 
export default AddNewEquipment;
