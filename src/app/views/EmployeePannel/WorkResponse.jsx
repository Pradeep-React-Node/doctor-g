import React from 'react';
import { Stack, Icon, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, SimpleCard } from 'app/components';
import { useLocation } from 'react-router-dom'
import { Container, TextField } from '../Style';
import { Span } from "app/components/Typography";
import { useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";
import { updateOrder } from "app/redux/actions/OrderAction";

const WorkResponse = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const orderData = location.state
    console.log("edit props", orderData);

    const id = orderData?._id;
    const dispatch = useDispatch()


    // useEffect(() => {
    //   ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
    //     if (value !== state.password) return false;

    //     return true;
    //   });
    //   return () => ValidatorForm.removeValidationRule("isPasswordMatch");
    // }, [state.password]);

    const [state, setState] = useState({
        work_order_group: orderData.work_order_group,
        assesment: orderData.assesment,
        site_incharge: orderData.site_incharge,
        safety_equipments: orderData.safety_equipments,
        total_team_members: orderData.total_team_members,
        site_name: orderData.site_name,
        site_owner: orderData.site_owner

    });

    const handleSubmit = (event) => {
        dispatch(updateOrder(id, state))
        navigate("/orders/order-list")
        window.location.reload(false);
    };

    const handleChange = (event) => {
        // event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };
    return (
        <>
            <Container>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Work List", path: "/work/work-list" }, { name: "Work" }]} />
                </Box>

                <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                    <Icon >navigate_before</Icon> Back
                </Button>

                <Stack spacing={3}>
                    <SimpleCard title="Send Work Response">
                        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                            <Grid container spacing={6}>
                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
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

                                <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
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



                                    {/* <TextField
              select
              fullWidth
              size="small"
              variant="outlined"
              type="text"
              name="safety_equipments"
              value={safety_equipments || ""}
              label="Safety Equipments"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            >
              {categoryList.sort().map((cat) => (
                <MenuItem value={cat} key={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField> */}
                                    <TextField
                                        type="text"
                                        fullWidth
                                        size="small"
                                        name="safety_equipments"
                                        value={state.safety_equipments || ""}
                                        label="Safety Equipments"
                                        onChange={handleChange}
                                        validators={["required"]}
                                        errorMessages={["this field is required"]}
                                    />

                                    {/* <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            /> */}
                                </Grid>
                            </Grid>

                            <Button color="primary" variant="contained" type="submit">
                                <Icon>send</Icon>
                                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add Order</Span>
                            </Button>
                        </ValidatorForm>
                    </SimpleCard>
                </Stack>
            </Container>
        </>

    )
}

export default WorkResponse