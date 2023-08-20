import { Divider, Tab, Tabs, Button, Icon } from "@mui/material";
import { Breadcrumb } from "app/components";
import React, { useState } from "react";
import ClientDetails from "./ClientDetails";
import ClientInvoice from "./ClientInvoice";
import { useNavigate } from 'react-router-dom';
import { Container } from "../../../Style";


const ClientViewer = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Client List", path: "/client/client-list" }, { name: "View Client" }]}
        />
      </div>

      <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
        <Icon >navigate_before</Icon> Back
      </Button>
      <Tabs
        sx={{ mt: 2 }}
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabList.map((item, ind) => (
          <Tab key={ind} value={ind} label={item} sx={{ textTransform: "capitalize" }} />
        ))}
      </Tabs>
      <Divider sx={{ mb: "24px" }} />

      {tabIndex === 0 && <ClientDetails />}
      {tabIndex === 1 && <ClientInvoice />}
    </Container>
  );
};

const tabList = ["Details", "Invoices"];

export default ClientViewer;
