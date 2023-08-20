import {
  Card,
  Grid,
  Box,
  FormControlLabel,
  TableBody,
  TableCell,
  TableHead,
  Checkbox,
  Typography,
  TableRow,
  Table,
  Icon,
  Button,
} from '@mui/material';
import { H2, H3, H4 } from 'app/components/Typography';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from 'app/components';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSurvey } from 'app/redux/actions/SurveyAction';
import { getSurveyList } from 'app/redux/actions/SurveyAction';
import { createNotification } from 'app/redux/actions/NotificationActions';
import moment from 'moment';
import { Form } from './FormStyle';
import {
  Container,
  StyledCard3,
  StyledCard,
  SurveyIMG2,
  SurveyIMG,
  Heading,
} from '../../Style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  padding: '-10px',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': {
    opacity: 0.6,
    fontSize: '44px',
    color: theme.palette.primary.main,
  },
}));

const SurveyCard = styled(Card)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}));

// const IMG = styled("img")(() => ({
//     marginBottom: 32,
//     maxWidth: "70%",
//     maxHeight: "70%",
// }));

const StyledTable = styled(Table)(() => ({
  width: '100%',
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const SurveyDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const surveyData = location.state;
  const id = surveyData?._id;

  const [user, setUser] = useState();

  console.log('====================================');
  console.log(surveyData);
  console.log('====================================');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState('/assets/images/sq-1.jpg');

  const StyledImg = styled('img')(({ url }) => ({
    width: 'auto',
    height: '200px',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: '4px',
  }));

  const [state, setState] = useState({
    approve_status: surveyData.approve_status,
    user_type_notifaction: surveyData.user_type_notifaction,
  });

  const handleSubmit = (value) => {
    dispatch(updateSurvey(id, state));
    dispatch(createNotification(value));
    navigate('/survey/survey-list');
    // window.location.reload(false);
    toast.success('Update Survey Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const handleCheckBox1 = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        approve_status: !prevState.approve_status,
      };
    });
  };

  useEffect(() => {
    dispatch(getSurveyList());
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        theme="dark"
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
        <Box>
          <Breadcrumb
            routeSegments={[
              { name: 'Survey List', path: '/survey/survey-list' },
              { name: 'View Survey' },
            ]}
          />
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(-1)}
          >
            <Icon>navigate_before</Icon> Back
          </Button>
        </Box>

        <StyledCard3 sx={{ mt: 2 }} elevation={2}>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <H2>Site Survey Detail</H2>
          </Box>

          <Box>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <StyledCard
                  sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
                  elevation={2}
                >
                  <ContentBox>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <H4>Name of site</H4>
                      <Heading>{surveyData?.ordergroup}</Heading>
                    </Box>
                  </ContentBox>
                </StyledCard>
              </Grid>

              <Grid item sm={6} xs={12}>
                <StyledCard
                  sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
                  elevation={2}
                >
                  <ContentBox>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <H4>Name of Site Incharge</H4>
                      <Heading>{surveyData?.site_incharge}</Heading>
                    </Box>
                  </ContentBox>
                </StyledCard>
              </Grid>
             
            </Grid>
          </Box>

          <Box sx={{ mt: 2 }}>
            <SurveyCard>
              <Grid container spacing={1}>
                <Grid item md={4} xs={12}>
                  <H3
                    style={{
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {' '}
                    Latest Architecture Drawing{' '}
                  </H3>
                </Grid>
                <Grid item md={8} xs={12}>
                  <H3
                    style={{
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {' '}
                    Description{' '}
                  </H3>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item md={4} xs={12}>
                  <Box
                    style={{
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <SurveyIMG
                      src={
                        'http://localhost:6002/uploads/' +
                        surveyData?.site_survey_images
                      }
                      alt="site"
                    />
                  </Box>
                </Grid>
                <Grid item md={8} xs={12}>
                  <Box
                    style={{
                      padding: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <p>{surveyData?.lad_add_commnet}</p>
                  </Box>
                </Grid>
              </Grid>

              <Box style={{ margin: '10px' }} width="100%" overflow="auto">
                <StyledTable>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Building Saul</TableCell>
                      <TableCell align="center">
                        Floor Finishing From Client
                      </TableCell>
                      <TableCell align="center">Celling Height </TableCell>
                      <TableCell align="center">Send Mail To Client </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        {surveyData?.building_saul}
                      </TableCell>
                      <TableCell align="center">
                        {surveyData?.floor_finishing_from_client}
                      </TableCell>
                      <TableCell align="center">
                        {surveyData?.celling_height}
                      </TableCell>
                      <TableCell align="center">
                        {surveyData?.mail_to_client}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </StyledTable>
              </Box>


            </SurveyCard>
          </Box>

          <SurveyCard sx={{ mt: 2 }} elevation={2}>
            <Box
              style={{
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'left',
                width: "100%"
              }}
            >
              <H3 style={{ marginLeft: "30px" }}>Elevation Images</H3>
            </Box>
            <Box style={{ display: 'flex' }}>
              {surveyData?.elevation_images.map((elevationImage, index) => (
                <Box style={{ margin: '20px' }}>
                  <SurveyIMG2
                    src={'http://localhost:6002/uploads/' + elevationImage}
                    alt="site"
                  />
                  <H3>
                    {' '}
                    {surveyData?.img_el_add_commnet.map((bb, index) => bb)}
                  </H3>
                </Box>
              ))}
            </Box>
          </SurveyCard>

          <SurveyCard sx={{ mt: 2 }} elevation={2}>
            <Box style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'left',
              width: "100%"
            }}>
              <H3 style={{ marginLeft: "30px" }}>Floor Finishing</H3>
            </Box>
            <Box width="100%" overflow="auto">
              <StyledTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Floor No</TableCell>
                    <TableCell align="center">Finishing Status</TableCell>
                    <TableCell align="center">Review </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {surveyData?.floorfinishings.map((floorfinishing, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        {floorfinishing?.f_floor_no}
                      </TableCell>
                      <TableCell align="center">
                        {floorfinishing?.f_finishing_status}
                      </TableCell>
                      <TableCell align="center">
                        {floorfinishing?.f_add_review}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </Box>
          </SurveyCard>

          <SurveyCard sx={{ mt: 2 }} elevation={2}>
            <Box style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'left',
              width: "100%"
            }}>
              <H3 style={{ marginLeft: "30px" }}>Height And Width Elevation Wise</H3>
            </Box>
            <Box width="100%" overflow="auto">
              <StyledTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Floor No</TableCell>
                    <TableCell align="center">Height</TableCell>
                    <TableCell align="center">Width </TableCell>
                    <TableCell align="center">Elevation </TableCell>
                    <TableCell align="center">Floor Heightidth </TableCell>
                    <TableCell align="center">Beam Height </TableCell>
                    <TableCell align="center">Slab Height </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {surveyData?.welevations.map((welevations, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        {welevations?.hw_floor_no}
                      </TableCell>
                      <TableCell align="center">
                        {welevations?.hw_height}
                      </TableCell>
                      <TableCell align="center">
                        {welevations?.hw_width}
                      </TableCell>
                      <TableCell align="center">
                        {welevations?.hw_elevation}
                      </TableCell>
                      <TableCell align="center">
                        {welevations?.hw_floor_height}
                      </TableCell>
                      <TableCell align="center">
                        {welevations?.hw_beam_height}
                      </TableCell>
                      <TableCell align="center">
                        {welevations?.hw_slab_height}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </Box>
          </SurveyCard>

          <SurveyCard sx={{ mt: 2 }} elevation={2}>
            <Box style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'left',
              width: "100%"
            }}>
              <H3 style={{ marginLeft: "30px" }}>Water Level</H3>
            </Box>
            <Box width="100%" overflow="auto">
              <StyledTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Floor No</TableCell>
                    <TableCell align="center">Water Level</TableCell>
                    <TableCell align="center">Beam Height </TableCell>
                    <TableCell align="center">Slab Height </TableCell>
                    <TableCell align="center">
                      Height And Width Elevation wise{' '}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {surveyData?.waterls.map((waterls, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">
                        {waterls?.w_floor_no}
                      </TableCell>
                      <TableCell align="center">
                        {waterls?.water_level}
                      </TableCell>
                      <TableCell align="center">
                        {waterls?.w_beam_height}
                      </TableCell>
                      <TableCell align="center">
                        {waterls?.w_slab_height}
                      </TableCell>
                      <TableCell align="center">
                        {waterls?.w_height_width}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </StyledTable>
            </Box>
          </SurveyCard>

          <Box>
            {user === 'Admin' ? (
              <Formik
                onSubmit={handleSubmit}
                enableReinitialize={true}
                initialValues={{
                  st_approve: 'Your New Site survey Approved By Admin',
                  site_incharge: surveyData?.site_incharge,
                  user_type_notifaction: "Employee",
                }}
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
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={
                            state?.approve_status === true ? 'Checked' : ''
                          }
                        />
                      }
                      name="approve_status"
                      value={true}
                      onChange={handleCheckBox1}
                      label={
                        <Typography style={{ fontSize: '20px' }}>
                          Approve Site Survey
                        </Typography>
                      }
                      sx={{ width: '100%', mt: '30px' }}
                    />

                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      color="primary"
                      variant="contained"
                      sx={{ mt: '0px !important', ml: 2, px: 6 }}
                    >
                      Update Status
                    </Button>
                  </Form>
                )}
              </Formik>
            ) : null}
          </Box>
        </StyledCard3>
      </Container>
    </>
  );
};

export default SurveyDetail;
