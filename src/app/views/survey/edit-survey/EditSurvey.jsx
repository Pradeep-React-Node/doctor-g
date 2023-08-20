import React from 'react';
import { Stack, Button, Icon } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from 'app/components';
import { useNavigate } from 'react-router-dom';
import EditSurveyForm from './EditSurveyForm';

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const EditSurvey = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Survey List", path: "/emp/survey" }, { name: "Edit Survey" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          <SimpleCard title="Edit Survey">
            <EditSurveyForm />
          </SimpleCard>
        </Stack>
      </Container>
    </>

  )
}

export default EditSurvey
