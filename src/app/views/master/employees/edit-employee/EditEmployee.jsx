import { Breadcrumb, SimpleCard } from 'app/components';
import { Stack } from "@mui/material";
import {
  Button,
  Box,
  Grid,
  Icon,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { updateEmployee } from "app/redux/actions/EmployeeActions";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, TextField } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditEmployee = () => {
  const location = useLocation()
  const employeeData = location.state
  const id = employeeData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: employeeData.name,
    email: employeeData.email,
    phone: employeeData.phone,
    employee_type: employeeData.employee_type,
    designation: employeeData.designation,
  });

  const handleSubmit = (event) => {
    dispatch(updateEmployee(id, state))
    navigate("/employee/employeeList-list")
    // window.location.reload(false);
    toast.success('Update Employee Successfully!', {
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

  const handleChange = (event) => {
    // event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div>
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
          <Breadcrumb routeSegments={[{ name: "Employee List", path: "/employee/employeeList-list" }, { name: "Edit Employee" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit Employee">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
              <Grid container spacing={6}>
                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="name"
                    id="standard-basic"
                    value={state.name}
                    onChange={handleChange}
                    label="Employee Name"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="employee_type"
                    label="Employee Type"
                    value={state.employee_type}
                    onChange={handleChange}
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
                    label="Email"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="phone"
                    id="standard-basic"
                    value={state.phone}
                    onChange={handleChange}
                    label="Phone No"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    name="designation"
                    id="standard-basic"
                    value={state.designation}
                    onChange={handleChange}
                    label="Designation"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Employee</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>

    </div>
  );
};

export default EditEmployee;
