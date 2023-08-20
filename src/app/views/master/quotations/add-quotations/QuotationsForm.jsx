import { Box, Button, Card, Divider, Grid, Icon, IconButton, styled, TextField, Table, TableBody, TableCell, TableHead, TableRow, } from "@mui/material";
import { FlexBox } from "app/components/FlexBox";
import { H4, Span } from "app/components/Typography";
import { Formik } from "formik";
import { Breadcrumb } from "app/components";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateAmount } from "./QuotationsFormService";
import { addQuotation } from 'app/redux/actions/QuotationAction';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "16px",
  background: theme.palette.background.default,
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px",
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const StyledInput = styled(TextField)((Span) => ({
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

const QuotationForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productitemLevel = { title: "", quantity: "", discount: "", price: "", };
  const [productitems, setProductitems] = useState([productitemLevel]);
  const addProductitemL = () => {
    setProductitems([...productitems, productitemLevel]);
  };

  const calculateSubTotal = (itemList = []) => {
    let subTotal = 0;
    itemList.forEach((item) => {
      subTotal += calculateAmount(item);
    });

    return subTotal;
  };

  const calculateTotal = (values) => {
    let total = 0;
    total += calculateSubTotal(values.items);
    total += values.shippingCharge || 0;
    total += values[values.otherField] || 0;

    return total;
  };

  const handleSubmit = async (values) => {
    dispatch(addQuotation(values))
    navigate("/quotation/quotation-list")
    toast.success('Add Quotation Successfully!', {
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

  const onChange = (e, index) => {
    const updateproductitem = productitems.map((productitem, i) => index === i
      ? Object.assign(productitem, { [e.target.name]: e.target.value })
      : productitem
    );
    setProductitems(updateproductitem);

  }


  const removeProductitems = (index) => {
    const filteredProductitems = [...productitems];
    filteredProductitems.splice(index, 1);
    setProductitems(filteredProductitems);
  };

  return (
    <>
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
          <Breadcrumb routeSegments={[{ name: "Quotation", path: "/quotation/quotation-list" }, { name: "Quotation List" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Card elevation={3}>
          <H4 p={2}>New Quotation</H4>

          <Divider sx={{ mb: 1 }} />

          <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
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
              <form style={{ padding: "16px" }} onSubmit={handleSubmit}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item md={2} sm={4} xs={12}>
                    Customer Name
                  </Grid>

                  <Grid item md={10} sm={8} xs={12}>
                    <StyledInput
                      label="Customer Name"
                      size="small"
                      variant="outlined"
                      name="customer_name"
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

                <Box mb={4}>
                  <Box overflow="auto">
                    <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                      <TableHead>
                        <TableRow>
                          <TableCell colSpan={7}>Item Details</TableCell>
                          <TableCell colSpan={2}>Quantity </TableCell>
                          <TableCell colSpan={2}>Rate</TableCell>
                          <TableCell colSpan={2}>discount</TableCell>
                          <TableCell colSpan={2} align="center">
                            Amount
                          </TableCell>
                          <StyledCell colSpan={1} align="center" />
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {productitems.map((item, index) => (
                          <TableRow key={index} sx={{ position: "relative" }}>
                            <StyledCell colSpan={7} align="left">
                              <TextField
                                size="small"
                                sx={{ width: "100%" }}
                                options={productitems}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                  <TextField {...params} variant="outlined" fullWidth />
                                )}
                                onChange={(_, newValue) => {
                                  handleChange({
                                    target: { name: `items[${index}]`, value: newValue },
                                  });
                                }}

                              />
                            </StyledCell>

                            <StyledCell colSpan={2} align="left">
                              <TextField
                                size="small"
                                type="number"
                                variant="outlined"
                                value={item.quantity || ""}
                                name="quantity"
                                label="Quantity"
                                onChange={(e) => onChange(e, index)}
                                rows={1}
                                sx={{ width: '100%' }}
                              />
                            </StyledCell>

                            <StyledCell colSpan={2} align="left">
                              <TextField
                                size="small"
                                type="number"
                                variant="outlined"
                                label="Price"
                                onChange={(e) => onChange(e, index)}
                                value={item.price || ""}
                                name="price"
                              />
                            </StyledCell>
                            <StyledCell colSpan={2} align="left">
                              <TextField
                                fullWidth
                                size="small"
                                type="number"
                                variant="outlined"
                                label="Discount"
                                onChange={(e) => onChange(e, index)}
                                value={item.discount || ""}
                                name={`items[${index}].discount`}
                              />
                            </StyledCell>

                            <StyledCell colSpan={2} align="center">
                              {calculateAmount(item).toFixed(2)}
                            </StyledCell>

                            <StyledCell colSpan={1} align="center">
                              <IconButton size="small" onClick={() => removeProductitems(index)}>
                                <Icon color="error" fontSize="small">
                                  clear
                                </Icon>
                              </IconButton>
                            </StyledCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ mt: "16px !important" }}
                      onClick={addProductitemL}
                    >
                      + Add New Item
                    </Button>
                  </Box>
                </Box>

                <Box mb={4}>
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
                </Box>



                <Box mt={3}>
                  <Button color="primary" variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Card>

      </Container>
    </>
  );
};


const customerList = [
  "customer 1",
  "customer 1",
  "customer 3",
  "customer 4",
];

const initialValues = {
  customerType: "",
  otherField: "Adjustment",
};

export default QuotationForm;
