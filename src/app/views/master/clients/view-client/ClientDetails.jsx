import { Fade, Grid } from "@mui/material";
import React from "react";
import CustomerBillings from "./ClientBillings";
import CustomerEmailSender from "./ClientOrderDetails";
import CustomerInfo from "./ClientInfo";

const ClientDetails = () => {
  return (
    <Fade in timeout={300}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <CustomerInfo />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <CustomerBillings />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <CustomerEmailSender />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default ClientDetails;
