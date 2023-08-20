import React from 'react';
import { Stack } from "@mui/material";
import { Box  } from "@mui/system";
import NewAluminiumFrom from './NewAluminiumFrom';
import { Breadcrumb, SimpleCard } from 'app/components';
import { useNavigate } from "react-router-dom";
import { Button, Icon } from "@mui/material";
import { Container } from '../../Style';


const AluminiumForm = () => {
    const navigate = useNavigate();
    return (
      <>
      <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Aluminium List", path: "/aluminium/aluminium-list" }, { name: "Add New Aluminium" }]} />
      </Box>
      <Button sx={{ mb: 2, pl:1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
        <Icon >navigate_before</Icon> Back
      </Button>
      <Stack spacing={3}>
        <SimpleCard title="Add New Aluminium">
          <NewAluminiumFrom />
        </SimpleCard>
      </Stack>
    </Container>
      </>
        
    )
}

export default AluminiumForm
