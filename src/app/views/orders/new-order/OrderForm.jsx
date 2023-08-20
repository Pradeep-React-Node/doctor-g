import React from 'react';
import { Stack, Icon, Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import NewOrderFrom from './NewOrderFrom';
import { Breadcrumb, SimpleCard } from 'app/components';

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
      marginBottom: "30px",
      [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
  }));

const OrderForm = () => {
  const navigate = useNavigate()
    return (
      <>
      <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Works", path: "/orders/order-list" }, { name: "Add New Works" }]} />
      </Box>

      <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                <Icon >navigate_before</Icon> Back
            </Button>

      <Stack spacing={3}>
        <SimpleCard title="Add New Works">
          <NewOrderFrom />
        </SimpleCard>
      </Stack>
    </Container>
      </>
        
    )
}

export default OrderForm
