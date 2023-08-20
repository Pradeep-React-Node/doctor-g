// import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { validationSchema } from "./ValidationSchema"
import { SimpleCard } from 'app/components';
import { Grid } from "@mui/material";
import { addProduct } from '../../../redux/actions/ProductAction';
import { Form, StyledTextField } from './FormStyle';
import { H4 } from "app/components/Typography";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProductProperties = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (values) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("brand", values.brand);
        formData.append("color", values.color);
        formData.append("size", values.size);
        formData.append("price", values.price);
        formData.append("delivery_time", values.delivery_time);
        formData.append("wastage_percentage", values.wastage_percentage);
        formData.append("grade", values.grade);
        formData.append("insurance", values.insurance);
        formData.append("remark", values.remark);

        dispatch(addProduct(formData))
        navigate("/products/productlist")
        console.log("value of Product form", formData);
        toast.success('Add Product Successfully!', {
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
            <Grid spacing={3} sx={{ mt: "20px" }}>
                <SimpleCard>
                    <H4 sx={{ ml: 2, mt: 1 }}>Product Properties</H4>
                    <Formik
                        onSubmit={handleSubmit}
                        enableReinitialize={true}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
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
                                <Grid item md={6} xs={12}>
                                    <StyledTextField
                                        fullWidth
                                        name="name"
                                        label="Name"
                                        size="small"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name || ""}
                                        error={Boolean(touched.name && errors.name)}
                                        helperText={touched.name && errors.name}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        multiline
                                        size="small"
                                        name="brand"
                                        variant="outlined"
                                        label="Brand"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.brand || ""}
                                        error={Boolean(touched.brand && errors.brand)}
                                        helperText={touched.brand && errors.brand}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="color"
                                        label="Color"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.color || ""}
                                        error={Boolean(touched.color && errors.color)}
                                        helperText={touched.color && errors.color}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="size"
                                        label="Size"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.size || ""}
                                        error={Boolean(touched.size && errors.size)}
                                        helperText={touched.sizer && errors.size}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="price"
                                        label="Price"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.price || ""}
                                        error={Boolean(touched.price && errors.price)}
                                        helperText={touched.price && errors.price}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        type="date"
                                        size="small"
                                        name="delivery_time"
                                        label="Delivery Date"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.delivery_time || ""}
                                        error={Boolean(touched.delivery_time && errors.delivery_time)}
                                        helperText={touched.delivery_time && errors.delivery_time}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="wastage_percentage"
                                        label="Wastage Percentage"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.wastage_percentage || ""}
                                        error={Boolean(touched.wastage_percentage && errors.wastage_percentage)}
                                        helperText={touched.wastage_percentage && errors.wastage_percentage}
                                    />
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <StyledTextField
                                        fullWidth
                                        name="name"
                                        label="Name"
                                        size="small"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name || ""}
                                        error={Boolean(touched.name && errors.name)}
                                        helperText={touched.name && errors.name}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        multiline
                                        size="small"
                                        name="brand"
                                        variant="outlined"
                                        label="Brand"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.brand || ""}
                                        error={Boolean(touched.brand && errors.brand)}
                                        helperText={touched.brand && errors.brand}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="color"
                                        label="Color"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.color || ""}
                                        error={Boolean(touched.color && errors.color)}
                                        helperText={touched.color && errors.color}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="size"
                                        label="Size"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.size || ""}
                                        error={Boolean(touched.size && errors.size)}
                                        helperText={touched.sizer && errors.size}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="price"
                                        label="Price"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.price || ""}
                                        error={Boolean(touched.price && errors.price)}
                                        helperText={touched.price && errors.price}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="delivery_time"
                                        label="Delivery Time"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.delivery_time || ""}
                                        error={Boolean(touched.delivery_time && errors.delivery_time)}
                                        helperText={touched.delivery_time && errors.delivery_time}
                                    />
                                    <StyledTextField
                                        fullWidth
                                        size="small"
                                        name="wastage_percentage"
                                        label="Wastage Percentage"
                                        variant="outlined"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.wastage_percentage || ""}
                                        error={Boolean(touched.wastage_percentage && errors.wastage_percentage)}
                                        helperText={touched.wastage_percentage && errors.wastage_percentage}
                                    />
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </SimpleCard>
            </Grid>
        </>
    )
}
const initialValues = {
    name: "",
    brand: "",
    color: "",
    size: "",
    price: "",
    delivery_time: "",
    wastage_percentage: "",
    grade: "",
    insurance: "",
    remark: "",
};
export default AddProductProperties