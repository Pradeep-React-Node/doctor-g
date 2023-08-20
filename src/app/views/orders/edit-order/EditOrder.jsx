import React from 'react';
import { Stack,Icon, Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import EditOrderForm from './EditOrderForm';
import { Breadcrumb, SimpleCard } from 'app/components';
import { useLocation } from 'react-router-dom'
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const EditOrder = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const orderData = location.state
  console.log("edit props", orderData);
  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Work List", path: "/orders/order-list" }, { name: "Edit Works" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit Works">
            <EditOrderForm orderData={orderData} />
          </SimpleCard>
        </Stack>
      </Container>
    </>

  )
}

export default EditOrder
