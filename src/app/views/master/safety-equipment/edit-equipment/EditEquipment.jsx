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
import { updateSafetyequipment } from "app/redux/actions/SafetyequipmentAction";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Container, TextField } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditEquipment = () => {
  const location = useLocation()
  const safetyequipmentData = location.state
  const id = safetyequipmentData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // useEffect(() => {
  //   ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
  //     if (value !== state.password) return false;

  //     return true;
  //   });
  //   return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  // }, [state.password]);

  const [state, setState] = useState({
    id: safetyequipmentData.id,
    name: safetyequipmentData.name,
  });

  const handleSubmit = (event) => {
    dispatch(updateSafetyequipment(id, state))
    navigate("/safety-equipment/equipment-list")
    // window.location.reload(false);
    toast.success('Update Safetyequipment Successfully!', {
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
          <Breadcrumb routeSegments={[{ name: "Equipment List", path: "/safety-equipment/equipment-list" }, { name: "Edit Equipment" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit Equipment">
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
                    label="Equipment Name"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
              </Grid>

              <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Equipment</Span>
              </Button>
            </ValidatorForm>
          </SimpleCard>
        </Stack>
      </Container>

    </div>
  );
};

export default EditEquipment;
