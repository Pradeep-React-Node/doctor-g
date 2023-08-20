import { Breadcrumb, SimpleCard } from 'app/components';
import { Stack } from "@mui/material";
import { useDropzone } from "react-dropzone";
import {
  Button,
  Box,
  Grid,
  Icon,
  styled,
} from "@mui/material";
import { Formik } from "formik";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FlexBox } from "app/components/FlexBox";
import { DropZone, Form, StyledTextField } from './FormStyle';
import { updateUser } from "app/redux/actions/userAction";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from "@mui/system";
import { addImage } from 'app/redux/actions/UploadImages';



const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProfileUpdate = () => {
  const location = useLocation()
  const userData = location.state
  const id = userData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [imageList1, setImageList1] = useState([]);
  const [pic, setPic] = useState(imageList1.name);

  const picture = imageList1.name

  const [state, setState] = useState({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    user_type: userData.user_type,
    phone: userData.phone,
    user_pic: userData.user_pic,
    dob:userData.dob,
    address:userData.address,
    designation: userData.designation
  });


  console.log("rrrrr", picture)


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {

    const formData = new FormData();
    formData.append("site_survey_images", imageList1);


    dispatch(updateUser(id, state))
    dispatch(addImage(formData))
    window.location.reload(false);
    toast.success('Update User Successfully!', {
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
          <Breadcrumb routeSegments={[{ name: "Update Profile" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Update Profile">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
              }) => (
                <Form >
                  {/* <ValidatorForm onSubmit={handleSubmit} onError={() => null}> */}
                  <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="first_name"
                        id="standard-basic"
                        value={state.first_name}
                        onChange={handleChange}
                        label="First Name"
                        disabled
                      />
                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="last_name"
                        id="standard-basic"
                        value={state.last_name}
                        onChange={handleChange}
                        label="Last Name"
                        disabled
                      />
                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="email"
                        id="standard-basic"
                        value={state.email}
                        onChange={handleChange}
                        label="Email"
                        disabled
                      />
                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="phone"
                        label="Phone Number"
                        value={state.phone}
                        onChange={handleChange}
                      />

                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="dob"
                        label="Date Of Birth"
                        value={state.dob}
                        onChange={handleChange}
                      />
                       <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="designation"
                        label="Designation"
                        value={state.designation}
                        onChange={handleChange}
                      />

                      <StyledTextField
                        type="text"
                        fullWidth
                        size="small"
                        name="address"
                        label="Address"
                        value={state.address}
                        onChange={handleChange}
                      />

                      <StyledTextField
                        // sx={{ mb: 4 }}
                        type="text"
                        fullWidth
                        size="small"
                        name="user_type"
                        label="User Type"
                        onChange={handleChange}
                        value={state.user_type}
                        disabled
                      />
                    </Grid>
                  </Grid>

                  <Button onClick={handleSubmit} color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Profile</Span>
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

export default ProfileUpdate;
