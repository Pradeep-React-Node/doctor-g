import React from 'react';
import { Stack, Icon } from "@mui/material";
import { Box, styled, } from "@mui/system";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { addPaymnet } from 'app/redux/actions/PaymentAction';
import { useNavigate } from 'react-router-dom';
import { getOrderList } from "../../../../redux/actions/OrderAction";
import { Container, Form } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledTextField = styled(TextField)(() => ({
    marginBottom: "16px",
}));

const AddPayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        dispatch(addPaymnet(values))
        navigate("/payment/payment-list")
        // alert("add Payment success")
        toast.success('Add Payment Successfully!', {
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

    useEffect(() => {
        dispatch(getOrderList());
    }, [dispatch]);

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
                    <Breadcrumb routeSegments={[{ name: "Payments", path: "/payment/payment-list" }, { name: "New Payments" }]} />
                </Box>

                <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                    <Icon >navigate_before</Icon> Back
                </Button>

                <Stack spacing={3}>
                    <SimpleCard title="Add New Payments">
                        <Formik
                            onSubmit={handleSubmit}
                            enableReinitialize={true}
                            initialValues={initialValues}
                            validationSchema={paymentSchema}
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
                                <Form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item sm={6} xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                name="order_group"
                                                label="Order group"
                                                size="small"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.order_group || ""}
                                            />
                                            {/* {orderList.map((cat) => (
                                                <MenuItem value={cat} key={cat}>
                                                    {cat}
                                                </MenuItem>
                                            ))} */}

                                            <StyledTextField
                                                select
                                                fullWidth
                                                size="small"
                                                name="payment_type"
                                                label="Payment Type"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.payment_type || ""}
                                                error={Boolean(touched.payment_type && errors.payment_type)}
                                                helperText={touched.payment_type && errors.payment_type}
                                            >
                                                {categoryList.sort().map((cat) => (
                                                    <MenuItem value={cat} key={cat}>
                                                        {cat}
                                                    </MenuItem>
                                                ))}
                                            </StyledTextField>
                                        </Grid>

                                        <Grid item sm={6} xs={12}>
                                            <StyledTextField
                                                fullWidth
                                                size="small"
                                                name="amount"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                label="Amount"
                                                onChange={handleChange}
                                                value={values.amount || ""}
                                                error={Boolean(touched.amount && errors.amount)}
                                                helperText={touched.amount && errors.amount}
                                            />
                                            <StyledTextField
                                                fullWidth
                                                name="date"
                                                type="date"
                                                size="small"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.date || ""}
                                                error={Boolean(touched.date && errors.date)}
                                                helperText={touched.date && errors.date}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button type="submit" color="primary" variant="contained" sx={{ mb: 2, px: 6 }}>
                                        Add Payment
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

const paymentSchema = yup.object().shape({
    order_group: yup.string().required("First Name is required"),
    payment_type: yup.string().required("Last Name is required"),
    amount: yup.number().required("Phone is required"),
});

const initialValues = {
    order_group: "",
    payment_type: "",
    amount: "",
    date: "",
};

const categoryList = ["Online", "Cash", "Cheque"];
// const paymnetStatus = ["Done", "Painding", "Processing"];
export default AddPayment