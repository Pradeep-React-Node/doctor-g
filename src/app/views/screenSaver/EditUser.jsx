import { Breadcrumb, SimpleCard } from 'app/components';
import { Stack } from "@mui/material";
import {
  Button,
  Box,
  Grid,
  Icon,
  styled,
  MenuItem,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from "app/redux/actions/userAction";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const EditUser = () => {
  const location = useLocation()
  const userData = location.state
  const id = userData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // useEffect(() => {
  //   ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
  //     if (value !== state.password) return false;

  //     return true;
  //   });
  //   return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  // }, [state.password]);


  const userDataa = useSelector(state => state?.user);

  const [state, setState] = useState({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    phone: userData.phone,
    user_type: userData.user_type,
    designation: userData.designation,
  });

  const handleSubmit = (event) => {
    dispatch(updateUser(id, state))
    navigate("/users/userlist")
    toast.success('Update User Successfully!', {
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

  const handleChange = (event) => {
    // event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
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
          <Breadcrumb routeSegments={[{ name: "User List", path: "/users/userlist" }, { name: "Edit User" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit User">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="first_name"
                    id="standard-basic"
                    value={state.first_name}
                    onChange={handleChange}
                    label="First Name"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="last_name"
                    id="standard-basic"
                    value={state.last_name}
                    onChange={handleChange}
                    label="Last Name"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="email"
                    id="standard-basic"
                    value={state.email}
                    onChange={handleChange}
                    label="Emial"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="number"
                    fullWidth
                    size="small"
                    name="phone"
                    label="Phone Number"
                    value={state.phone}
                    onChange={handleChange}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />

                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="designation"
                    label="Designation"
                    value={state.designation}
                    onChange={handleChange}
                  />
                  <TextField

                    select
                    size="small"
                    name="user_type"
                    label="User Type"
                    onChange={handleChange}
                    value={state.user_type}
                    errorMessages={["this field is required"]}
                    validators={["required"]}
                  >
                    {userDataa.user?.map((item) => (
                      <MenuItem value={item?.user_type} key={item._id}>
                        {item?.user_type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update User</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>

    </div>
  );
};

export default EditUser;
