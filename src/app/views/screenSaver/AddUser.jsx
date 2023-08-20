import React from 'react';
import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, MenuItem, TextField, Icon } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser, getUserList } from 'app/redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { addImage } from 'app/redux/actions/UploadImages';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const Form = styled('form')(() => ({
  paddingLeft: '16px',
  paddingRight: '16px',
}));

const StyledTextField = styled(TextField)(() => ({
  marginBottom: '16px',
}));



const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imageList1, setImageList1] = useState([]);

  const handleSubmit = async (values) => {

    const data = { 
      first_name: values.first_name,
      last_name: values.last_name,
      phone: values.phone,
      user_type: values.user_type,
      email: values.email,
      password: values.password,
      user_pic: imageList1.name,
    }

    const formData = new FormData();
    formData.append("site_survey_images", imageList1);

    await addUser(data);
    dispatch(addImage(formData))
    toast.success('User Added Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    dispatch(getUserList());
    navigate('/users/userlist');
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
              { name: 'Users', path: '/users/userlist' },
              { name: 'New User' },
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
          <SimpleCard title="Add New User">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validationSchema={productSchema}
              initialValues={{
                first_name: '',
                last_name: '',
                phone: '',
                user_type: '',
                email: '',
                password: '',
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
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        name="first_name"
                        label="First Name"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.first_name || ''}
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
                        value={values.last_name || ''}
                        error={Boolean(touched.last_name && errors.last_name)}
                        helperText={touched.last_name && errors.last_name}
                      />
                      <StyledTextField
                        select
                        fullWidth
                        size="small"
                        name="user_type"
                        label="User Type"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.user_type || ''}
                        error={Boolean(touched.user_type && errors.user_type)}
                        helperText={touched.user_type && errors.user_type}
                      >
                        {categoryList.sort().map((cat) => (
                          <MenuItem value={cat} key={cat}>
                            {cat}
                          </MenuItem>
                        ))}
                      </StyledTextField>

                      <StyledTextField
                        type="file"
                        multiple
                        id='file'
                        name='site_survey_images'
                        onChange={(e) => setImageList1(e.target.files[0])}
                      />
                    </Grid>

                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        size="small"
                        type="email"
                        name="email"
                        variant="outlined"
                        onBlur={handleBlur}
                        label="Email"
                        onChange={handleChange}
                        value={values.email || ''}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                      <StyledTextField
                        fullWidth
                        max="10"
                        name="phone"
                        type="tel"
                        label="Phone"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone || ''}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                      <StyledTextField
                        fullWidth
                        name="password"
                        size="small"
                        type="password"
                        label="Password"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password || ''}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                      />

                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mb: 2, px: 6 }}
                  >
                    Add User
                  </Button>
                </Form>
              )}
            </Formik>
          </SimpleCard>
        </Stack>
      </Container>
    </>
  );
};

const productSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  phone: Yup.string().max(10).min(10).required('A phone number is required'),
  user_type: Yup.string().required('Select User type '),
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});


const categoryList = ['Admin', 'Employee'];
export default AddUser;
