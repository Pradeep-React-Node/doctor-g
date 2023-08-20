import * as React from 'react';
import { Button, Grid, MenuItem, Divider } from '@mui/material';

import Select from 'react-select';
import { Span } from 'app/components/Typography';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { addOrder } from 'app/redux/actions/OrderAction';
import { createNotification } from 'app/redux/actions/NotificationActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserList } from '../../../redux/actions/userAction';
import { getSafetyequipmentList } from '../../../redux/actions/SafetyequipmentAction';
import { TextField, DateText, TextField3 } from '../../Style';
import { H3 } from 'app/components/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewOrderForm = () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employeeList = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const empName = employeeList?.user?.map((item) => item.user_type === 'admin');
  const safetyequipmentLists = useSelector(
    (state) => state.safetyequipment.safetyequipmentList
  );

  console.log('sefty', state);
  useEffect(() => {
    dispatch(getSafetyequipmentList());
  }, [dispatch]);

  console.log('employee', empName);
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);

  const handleSubmit = (values) => {
    values.safety_equipments = state.safety_equipments;
    postData(values);
  };

  const postData = (values) => {
    dispatch(addOrder(values));
    dispatch(createNotification(values));
    navigate('/orders/order-list');
    console.log('submit DATA', values);
    toast.success('Add Order Successfully!', {
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

  // const handleChange = (event) => {
  //   // event.persist();
  //   setState({ ...state, [event.target.name]: event.target.value });
  // };
  const handleSelect = (e) => {
    setState({
      ...state,
      safety_equipments: Array.isArray(e) ? e.map((x) => x.value) : [],
    });
  };

  const options = safetyequipmentLists.map((a) => {
    return { value: a.name, label: a.name };
  });

  console.log('option data', options);

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
      <Formik
        onSubmit={handleSubmit}
        enableReinitialize={true}
        initialValues={{
          work_order_group: '',
          assesment: '',
          site_incharge: '',
          total_team_members: '',
          site_name: '',
          site_owner: '',
          deadline: '',
          drawing_deadline: '',
          aluminium_deadline: '',
          glassAcphplfixing_deadline: '',
          handover_deadline: '',
          site_survey_deadline: '',
          deadline_resone:"",
          newwork_notification:
            'new work assigned for you please check your work list',
            user_type_notifaction: "Employee",

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
          <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  fullWidth
                  size="small"
                  name="work_order_group"
                  id="standard-basic"
                  value={values.work_order_group || ''}
                  onChange={handleChange}
                  label="Work Group"
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextField
                  type="text"
                  fullWidth
                  size="small"
                  name="site_owner"
                  id="standard-basic"
                  value={values.site_owner || ''}
                  onChange={handleChange}
                  label="Site Owner"
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextField
                  type="text-area"
                  fullWidth
                  size="small"
                  rows={2}
                  name="assesment"
                  label="Assesment"
                  onChange={handleChange}
                  value={values.assesment || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextField
                  select
                  type="text"
                  fullWidth
                  size="small"
                  name="site_incharge"
                  label="Site Incharge"
                  value={values.site_incharge || ''}
                  onChange={handleChange}
                  validators={['required']}
                  errorMessages={['this field is required']}
                >
                  {employeeList?.user?.map((item) => (
                    <MenuItem
                      value={item?.first_name + ' ' + item.last_name}
                      key={item._id}
                    >
                      {item?.first_name + ' ' + item?.last_name}
                    </MenuItem>
                  ))}
                </TextField>
                <DateText>Select Safety Equipment</DateText>
                <Select
                  isMulti
                  options={options}
                  onChange={handleSelect}
                ></Select>
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <TextField
                  type="text"
                  fullWidth
                  size="small"
                  name="site_name"
                  id="standard-basic"
                  value={values.site_name || ''}
                  onChange={handleChange}
                  label="Site Name"
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <TextField
                  type="number"
                  fullWidth
                  size="small"
                  name="total_team_members"
                  label="Total Team Members"
                  onChange={handleChange}
                  value={values.total_team_members || ''}
                />

                <DateText>Project Deadline</DateText>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  rows={2}
                  name="deadline"
                  onChange={handleChange}
                  value={values.deadline || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
            </Grid>

            <Divider sx={{ mt: 3, mb: 2 }} />
            <H3 fontWeight={500}>All Work Deadlines</H3>
            <Grid container spacing={6}>
              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <DateText>Site Survey Deadline</DateText>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  rows={2}
                  name="site_survey_deadline"
                  onChange={handleChange}
                  value={values.site_survey_deadline || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />

                <DateText>Drawing Deadline</DateText>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  rows={2}
                  name="drawing_deadline"
                  onChange={handleChange}
                  value={values.drawing_deadline || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <DateText>Aluminium Delevery Deadline</DateText>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  rows={2}
                  name="aluminium_deadline"
                  onChange={handleChange}
                  value={values.aluminium_deadline || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>

              <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                <DateText>Glass/Acp/Hpl/Fixing Deadline</DateText>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  rows={2}
                  name="glassAcphplfixing_deadline"
                  onChange={handleChange}
                  value={values.glassAcphplfixing_deadline || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
                <DateText>Handover Deadline</DateText>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  rows={2}
                  name="handover_deadline"
                  onChange={handleChange}
                  value={values.handover_deadline || ''}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
            </Grid>

            <Button color="primary" variant="contained" type="submit">
              <Span sx={{ pl: 2, textTransform: 'capitalize' }}>
                Add New Works
              </Span>
            </Button>
          </ValidatorForm>
        )}
      </Formik>
    </div>
  );
};

export default NewOrderForm;
