import {
  Button,
  Grid,
  Icon,
  Divider,
  Chip,
} from "@mui/material";
import { H3 } from "app/components/Typography";
import { Span } from "app/components/Typography";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { updateOrder } from "app/redux/actions/OrderAction";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import moment from 'moment';
import { TextField, DateText } from "../../Style";


const EditOrderForm = (props) => {
  const id = props?.orderData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // useEffect(() => {
  //   ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
  //     if (value !== state.password) return false;

  //     return true;
  //   });
  //   return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  // }, [state.password]);

  const [statee, setStatee] = useState([]);
  const handleSelect = (e) => {
    setStatee({ ...statee, safety_equipments: (Array.isArray(e) ? e.map(x => x.value) : []) })

  }



  const [state, setState] = useState({
    work_order_group: props.orderData.work_order_group,
    assesment: props.orderData.assesment,
    site_incharge: props.orderData.site_incharge,
    safety_equipments: props.orderData.safety_equipments,
    total_team_members: props.orderData.total_team_members,
    site_name: props.orderData.site_name,
    site_owner: props.orderData.site_owner,
    deadline: props.orderData.deadline,
    drawing_deadline: props.orderData.drawing_deadline,
    aluminium_deadline: props.orderData.aluminium_deadline,
    glassAcphplfixing_deadline: props.orderData.glassAcphplfixing_deadline,
    handover_deadline: props.orderData.handover_deadline,
    site_survey_deadline: props.orderData.site_survey_deadline,
    deadline_resone: props.orderData.deadline_resone,
    safety_equipments: props.orderData.safety_equipments,
  });

  const handleSubmit = (event) => {
    dispatch(updateOrder(id, state))
    navigate("/orders/order-list")
    toast.success('Update Order Successfully!', {
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
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 0 }}>
            <TextField
              type="text"
              fullWidth
              size="small"
              name="work_order_group"
              id="standard-basic"
              value={state.work_order_group}
              onChange={handleChange}
              label="Work Group"
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="site_name"
              id="standard-basic"
              value={state.site_name || ""}
              onChange={handleChange}
              label="Site Name"
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="site_owner"
              id="standard-basic"
              value={state.site_owner || ""}
              onChange={handleChange}
              label="Site Owner"
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="site_incharge"
              label="Site Incharge"
              value={state.site_incharge || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} >
            <TextField
              type="text-area"
              fullWidth
              size="small"
              rows={2}
              name="assesment"
              label="Assesment"
              onChange={handleChange}
              value={state.assesment || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              // sx={{ mb: 4 }}
              type="number"
              fullWidth
              size="small"
              name="total_team_members"
              label="Total Team Members"
              onChange={handleChange}
              value={state.total_team_members || ""}
              errorMessages={["this field is required"]}
              validators={["required", "minStringLength:1", "maxStringLength: 16"]}
            />

            <h4>Deadline Date</h4>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <p>Current Date - {moment(state?.deadline).format('Do MMM YYYY')}</p>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} >
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  name="deadline"
                  // label="Deadline"
                  value={state?.deadline}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>



            {/* <Select 
            isMulti 
            value={state?.safety_equipments.map(
              (floorfinishing, index) => (
                <span style={{ marginRight: '5px' }} key={index}>
                  <Chip label={floorfinishing.name} color="primary" />
                </span>
              )
            )}
            onChange={handleSelect}>

            </Select> */}

          </Grid>
        </Grid>

        <Divider sx={{ mt: 3, mb: 2 }} />

        <H3 fontWeight={500}>All Work Deadlines</H3>
        <Grid container spacing={6}>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <DateText>Site Survey Deadline</DateText>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <p>Current Date - {moment(state?.site_survey_deadline).format('Do MMM YYYY')}</p>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} >
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  name="site_survey_deadline"
                  // label="Deadline"
                  value={state?.site_survey_deadline}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>

            <DateText>Drawing Deadline</DateText>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <p>Current Date - {moment(state?.drawing_deadline).format('Do MMM YYYY')}</p>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} >
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  name="drawing_deadline"
                  value={state?.drawing_deadline}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>

            <DateText>Aluminium Delevery Deadline</DateText>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <p>Current Date - {moment(state?.aluminium_deadline).format('Do MMM YYYY')}</p>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} >
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  name="aluminium_deadline"
                  value={state?.aluminium_deadline}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <DateText>Glass/Acp/Hpl/Fixing Deadline</DateText>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <p>Current Date - {moment(state?.glassAcphplfixing_deadline).format('Do MMM YYYY')}</p>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} >
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  name="glassAcphplfixing_deadline"
                  value={state?.glassAcphplfixing_deadline}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>

            <DateText>Handover Deadline</DateText>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <p>Current Date - {moment(state?.handover_deadline).format('Do MMM YYYY')}</p>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} >
                <TextField
                  fullWidth
                  type="date"
                  size="small"
                  name="handover_deadline"
                  value={state?.handover_deadline}
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Update Works</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default EditOrderForm;
