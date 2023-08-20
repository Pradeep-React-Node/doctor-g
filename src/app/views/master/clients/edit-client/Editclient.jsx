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
import { updateClient } from "app/redux/actions/ClientAction";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, TextField } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditClient = () => {
  const location = useLocation()
  const clientData = location.state
  const id = clientData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [state, setState] = useState({
    first_name: clientData.first_name,
    last_name: clientData.last_name,
    email: clientData.email,
    phone: clientData.phone,
    group_name: clientData.group_name,
  });

  const handleSubmit = (event) => {
    dispatch(updateClient(id, state))
    navigate("/client/client-list")
    window.location.reload(false);
    toast.success('Update Client Successfully!', {
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
    event.persist();
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
          <Breadcrumb routeSegments={[{ name: "Client List", path: "/client/client-list" }, { name: "Edit Client" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit Client">
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
                    type="text"
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
                    // sx={{ mb: 4 }}
                    type="text"
                    fullWidth
                    size="small"
                    name="group_name"
                    label="group_name"
                    onChange={handleChange}
                    value={state.group_name}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Client</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>

    </div>
  );
};

export default EditClient;
