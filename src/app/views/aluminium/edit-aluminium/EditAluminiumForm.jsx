// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Grid,
  Icon,
  styled,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { updateAluminium } from "app/redux/actions/AluminiumAction";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const EditAluminiumForm = (props) => {
  const id = props?.aluminiumData?._id;
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
    a_site_name: props.aluminiumData.a_site_name,
    a_site_incharge: props.aluminiumData.a_site_incharge,
    aluminium_ckb1: props.aluminiumData.aluminium_ckb1,
    aluminium_ckb2: props.aluminiumData.aluminium_ckb2,
    aluminium_ckb3: props.aluminiumData.aluminium_ckb3,
    aluminium_ckb4: props.aluminiumData.aluminium_ckb4,
    aluminium_ckb5: props.aluminiumData.aluminium_ckb5,
    aluminium_ckb6: props.aluminiumData.aluminium_ckb6,
    aluminium_ckb7: props.aluminiumData.aluminium_ckb7,
    aluminium_ckb8: props.aluminiumData.aluminium_ckb8,
    remark: props.aluminiumData.remark,
  });



  const handleSubmit = (event) => {
    dispatch(updateAluminium(id, state))
    navigate("/emp/aluminumlist")
    // window.location.reload(false);
    toast.success('Update Handover Successfully!', {
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

  const handleCheckBox1 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb1: !prevState.aluminium_ckb1,
      }
    })
  }
  const handleCheckBox2 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb2: !prevState.aluminium_ckb2,
      }
    })
  }
  const handleCheckBox3 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb3: !prevState.aluminium_ckb3,
      }
    })
  }
  const handleCheckBox4 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb4: !prevState.aluminium_ckb4,
      }
    })
  }
  const handleCheckBox5 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb5: !prevState.aluminium_ckb5,
      }
    })
  }

  const handleCheckBox6 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb6: !prevState.aluminium_ckb6,
      }
    })
  }
  const handleCheckBox7 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb7: !prevState.aluminium_ckb7,
      }
    })
  }

  const handleCheckBox8 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        aluminium_ckb8: !prevState.aluminium_ckb8,
      }
    })
  }

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
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              fullWidth
              size="small"
              name="a_site_name"
              value={state.a_site_name}
              onChange={handleChange}
              label="Site Name"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

            {/* <TextField
              fullWidth
              size="small"
              name="aluminium_deadline_sm"
              label="Aluminium Deadline"
              variant="outlined"
              value={state.aluminium_deadline_sm}
              onChange={handleChange}
            /> */}

            <TextField
              type="text"
              fullWidth
              size="small"
              name="remark"
              label="Remark"
              value={state.remark || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              fullWidth
              size="small"
              name="a_site_incharge"
              value={state.a_site_incharge}
              onChange={handleChange}
              label="Site Incharge"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />


          </Grid>
        </Grid>

        <Divider sx={{ mt: 1, mb: 1 }} />


        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb1 === true ? 'Checked' : ''} />}
          name="aluminium_ckb1"
          onChange={handleCheckBox1}
          label={<Typography style={{ fontSize: '20px' }}>Count all aluminium at Coating Plant and quality also.</Typography>}
          sx={{ width: '100%', }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb2 === true ? 'Checked' : ''} />}
          name="aluminium_ckb2"
          onChange={handleCheckBox2}
          label={<Typography style={{ fontSize: '20px' }}>Check the coating quality at the plant.</Typography>}
          sx={{ width: '100%', }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb3 === true ? 'Checked' : ''} />}
          name="aluminium_ckb3"
          onChange={handleCheckBox3}
          label={<Typography style={{ fontSize: '20px' }}>Take receiving on challan from client side.</Typography>}
          sx={{ width: '100%', }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb4 === true ? 'Checked' : ''} />}
          name="aluminium_ckb4"
          onChange={handleCheckBox4}
          label={<Typography style={{ fontSize: '20px' }}>Scaffolding/cradle.</Typography>}
          sx={{ width: '100%', }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb5 === true ? 'Checked' : ''} />}
          name="aluminium_ckb5"
          onChange={handleCheckBox5}
          label={<Typography style={{ fontSize: '20px' }}>Make part frame for all height and get approved if possible.</Typography>}
          sx={{ width: '100%', }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb6 === true ? 'Checked' : ''} />}
          name="aluminium_ckb6"
          onChange={handleCheckBox6}
          label={<Typography style={{ fontSize: '20px' }}>Check the fabrication Quality.</Typography>}
          sx={{ width: '100%' }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb7 === true ? 'Checked' : ''} />}
          name="aluminium_ckb7"
          onChange={handleCheckBox7}
          label={<Typography style={{ fontSize: '20px' }}>Scrap management.</Typography>}
          sx={{ width: '100%', }}
        />

        <FormControlLabel
          control={<Checkbox checked={state?.aluminium_ckb8 === true ? 'Checked' : ''} />}
          name="aluminium_ckb8"
          onChange={handleCheckBox8}
          label={<Typography style={{ fontSize: '20px' }}>Plaster depth not more than 30mm</Typography>}
          sx={{ width: '100%', }}
        />

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Aluminium</Span>
        </Button>
      </ValidatorForm>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default EditAluminiumForm;
