// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import PickDate from "@mui/lab/DatePicker";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Box, Button, Card, Divider, Grid, MenuItem, styled, TextField } from "@mui/material";
// import { FlexBox } from "app/components/FlexBox";
import { H4 } from "app/components/Typography";
import { Formik } from "formik";
import React from "react";
import { useDispatch } from 'react-redux';
// import { calculateAmount } from "./QuotationsFormService";
// import QuotationtemTable from "./QuotationsItemTable";
import { updateQuotation } from 'app/redux/actions/QuotationAction';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InvoiceRoot = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

// const StyledCard = styled(Card)(({ theme }) => ({
//   padding: "16px",
//   background: theme.palette.background.default,
// }));

const StyledInput = styled(TextField)(() => ({
  minWidth: "188px !important",
  "& label": { fontSize: "14px" },
  "& label.MuiInputLabel-shrink": { marginTop: "0px" },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-input": {
      fontSize: "14px",
      padding: "10px 14px !important",
    },
  },
}));

// const DatePicker = styled(PickDate)(() => ({
//   margin: "8px !important",
//   "& label": { fontSize: "14px" },
//   "& .MuiOutlinedInput-input": {
//     fontSize: "14px",
//     padding: "10px 14px !important",
//   },
//   "& button": { padding: "6px" },
// }));

const QuotationFormView = () => {
  const location = useLocation()
  const quotationData = location.state
  const id = quotationData?._id;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [state, setState] = useState({
    customer_name: quotationData.customer_name,
    quotation_no: quotationData.quotation_no,
    order_group: quotationData.order_group,
    quotation_date: quotationData.quotation_date,
    sales_person: quotationData.sales_person,
  });

  const handleSubmit = (event) => {
    dispatch(updateQuotation(id, state))
    navigate("/quotation/quotation-list")
    // window.location.reload(false);
    toast.success('Update Quotation Successfully!', {
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



  // const calculateSubTotal = (itemList = []) => {
  //   let subTotal = 0;
  //   itemList.forEach((item) => {
  //     subTotal += calculateAmount(item);
  //   });

  //   return subTotal;
  // };

  // const calculateTotal = (values) => {
  //   let total = 0;
  //   total += calculateSubTotal(values.items);
  //   total += values.shippingCharge || 0;
  //   total += values[values.otherField] || 0;

  //   return total;
  // };

  // const handleSubmit = async (values, { isSubmitting }) => {
  //   console.log(values);
  // };

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

      <InvoiceRoot>
        <Card elevation={3}>
          <H4 p={2}>New Quotation</H4>

          <Divider sx={{ mb: 1 }} />

          <Formik onSubmit={handleSubmit} enableReinitialize={true}>
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
              <form style={{ padding: "16px" }} onSubmit={handleSubmit}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item md={2} sm={4} xs={12}>
                    Customer Name
                  </Grid>

                  <Grid item md={10} sm={8} xs={12}>
                    <StyledInput
                      label="customer_name"
                      size="small"
                      variant="outlined"
                      name="Customer Name"
                      value={values.customer_name}
                      onChange={handleChange}
                    >
                      {/* {customerList.map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))} */}
                    </StyledInput>
                  </Grid>

                  <Grid item md={2} sm={4} xs={12}>
                    Quotation
                  </Grid>

                  <Grid item md={10} sm={8} xs={12}>
                    <StyledInput
                      size="small"
                      name="quotation_no"
                      variant="outlined"
                      label="Quotation No"
                      onChange={handleChange}
                      value={values.quotation_no}
                    />
                  </Grid>

                  <Grid item md={2} sm={4} xs={12}>
                    Order Number
                  </Grid>

                  <Grid item md={10} sm={8} xs={12}>
                    <StyledInput
                      size="small"
                      name="order_group"
                      label="Order group"
                      variant="outlined"
                      value={values.order_group}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item md={2} sm={4} xs={12}>
                    Quotation Date
                  </Grid>

                  <Grid item md={10} sm={8} xs={12}>
                    <Box m={-1} display="flex" flexWrap={1}>
                      <StyledInput
                        name="quotation_date"
                        type="date"
                        size="small"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.quotation_date}
                      />

                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        value={values.invoiceDate}
                        inputFormat="MMMM dd, yyyy"
                        onChange={(date) => setFieldValue("dueDate", date)}
                        renderInput={(props) => (
                          <StyledInput
                            {...props}
                            label="Due Date"
                            variant="outlined"
                            sx={{ m: "8px !important" }}
                          />
                        )}
                      />
                    </LocalizationProvider> */}
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>

                  <Grid item md={2} sm={4} xs={12}>
                    Salesperson Name
                  </Grid>

                  <Grid item md={10} sm={8} xs={12}>
                    <StyledInput

                      size="small"
                      variant="outlined"
                      name="sales_person"
                      onChange={handleChange}
                      label="Salesperson Name"
                      value={values.sales_person}
                    >
                      {/* {customerList.map((item, ind) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))} */}
                    </StyledInput>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                </Grid>

                {/* <Box mb={4}>
                <QuotationtemTable
                  values={values}
                  setFieldValue={setFieldValue}
                  handleChange={handleChange}
                />
              </Box> */}

                {/* <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <TextField
                      rows={6}
                      fullWidth
                      multiline
                      name="notes"
                      size="small"
                      variant="outlined"
                      label="Custom Notes"
                      value={values.notes}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <StyledCard elevation={0}>
                      <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={6}>
                          Sub Total
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">{calculateSubTotal(values.items).toFixed(2)}</Box>
                        </Grid>

                        <Grid item xs={6}>
                          <FlexBox alignItems="center">
                            <Span sx={{ whiteSpace: "pre" }}>Shipping Charges</Span>

                            <StyledInput
                              size="small"
                              type="number"
                              variant="outlined"
                              name="shippingCharge"
                              onChange={handleChange}
                              sx={{ ml: "12px !important" }}
                              value={values.shippingCharge || ""}
                            />
                          </FlexBox>
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">{(values.shippingCharge || 0).toFixed(2)}</Box>
                        </Grid>

                        <Grid item xs={6}>
                          <FlexBox alignItems="center">
                            <StyledInput
                              size="small"
                              name="otherField"
                              variant="outlined"
                              onChange={handleChange}
                              value={values.otherField || ""}
                            />

                            <StyledInput
                              size="small"
                              type="number"
                              variant="outlined"
                              onChange={handleChange}
                              name={values.otherField}
                              sx={{ ml: "12px !important" }}
                              value={values[values.otherField] || ""}
                            />
                          </FlexBox>
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">{(values[values.otherField] || 0).toFixed(2)}</Box>
                        </Grid>

                        <Grid item xs={6}>
                          <H4 sx={{ m: 0 }}>Total</H4>
                        </Grid>

                        <Grid item xs={6}>
                          <Box textAlign="right">
                            <H4 sx={{ m: 0 }}>{calculateTotal(values).toFixed(2)}</H4>
                          </Box>
                        </Grid>
                      </Grid>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box> */}



                <Box mt={3}>
                  <Button color="primary" variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Card>
      </InvoiceRoot>
    </>
  );
};


// const customerList = [
//   "customer 1",
//   "customer 1",
//   "customer 3",
//   "customer 4",
// ];

export default QuotationFormView;
