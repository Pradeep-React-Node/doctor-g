import { Formik } from "formik";
import { validationSchema } from "./ValidationSchema"
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, Stack, Icon } from "@mui/material";
import { Container, Form, StyledTextField, } from './FormStyle';
import { useState } from "react";
// import { FlexBox } from "app/components/FlexBox";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updatePayment } from "app/redux/actions/PaymentAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPayment = () => {
  const location = useLocation()
  const paymentData = location.state
  const id = paymentData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [state, setState] = useState({
    order_group: paymentData.order_group,
    payment_type: paymentData.payment_type,
    amount: paymentData.amount,
    date: paymentData.date,
  });

  const handleSubmit = (event) => {
    dispatch(updatePayment(id, state))
    navigate("/payment/payment-list")
    // window.location.reload(false);
    toast.success('Update Payment Successfully!', {
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

  // const { palette } = useTheme();
  // const textMuted = palette.text.secondary;

  // const ContentBox = styled(FlexBox)(() => ({
  //   marginBottom: "16px",
  //   flexDirection: "column",
  //   alignItems: "flex-start",
  // }));

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
          <Breadcrumb routeSegments={[{ name: "Payments", path: "/payment/payment-list" }, { name: "Edit Payment" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>
        <Stack spacing={3}>
          <SimpleCard title="Edit Payment">
            <Formik
              // onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
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
                <Form onSubmit={handleSubmit} onError={() => null}>
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <StyledTextField
                        fullWidth
                        name="order_group"
                        label="Payment ID"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={state.order_group}
                      />
                      <StyledTextField
                        fullWidth
                        multiline
                        size="small"
                        name="Payment Type"
                        variant="outlined"
                        label="Payment Type"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={state.payment_type}
                      />
                      <StyledTextField
                        fullWidth
                        multiline
                        size="small"
                        name="amount"
                        variant="outlined"
                        label="Amount"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={state.amount}
                      />

                      <StyledTextField
                        fullWidth
                        size="small"
                        name="date"
                        label="Date"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={state.date}
                      />
                    </Grid>
                  </Grid>
                  <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, px: 6 }}>
                    Update Payment
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

};

// const menuItemList = [
//   "Paid",
//   "Unpaid",
// ];
export default EditPayment
