import React from 'react';
import { Stack, Button, Icon } from "@mui/material";
import { Box, styled } from "@mui/system";
import EditAluminiumForm from './EditAluminiumForm';
import { useNavigate } from 'react-router-dom';
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

const EditAluminium = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const  aluminiumData  = location.state
  console.log("edit props", aluminiumData);
    return (
      <>
      <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Aluminium List", path: "/aluminium/aluminium-list" }, { name: "Edit Aluminium" }]} />
      </Box>

      <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

      <Stack spacing={3}>
        <SimpleCard title="Edit Aluminium">
          <EditAluminiumForm aluminiumData={aluminiumData}/>
        </SimpleCard>
      </Stack>
    </Container>
      </>
        
    )
}

export default EditAluminium
