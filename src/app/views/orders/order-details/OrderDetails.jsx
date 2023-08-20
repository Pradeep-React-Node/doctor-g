import { styled, Grid, Box, Icon, Button, Divider, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'app/components';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Heading,
  StyledCard,
  SpanTaxt,
  StyledCard2,
} from '../../Style';
import { H2, H4, H5, H3 } from 'app/components/Typography';
import moment from 'moment';

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

const Analytics = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state;
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  console.log('====================================');
  console.log(orderData);
  console.log('====================================');

  return (
    <>
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[
              { name: 'Works', path: '/orders/order-list' },
              { name: 'View Works' },
            ]}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          <Icon>navigate_before</Icon> Back
        </Button>

        {/* {user === "employee" ?
                    <Button variant="contained" color="primary" style={{ display: "flex", float: "right" }}><Icon >navigate_before</Icon>
                        <Link color="primary" variant="contained" to="/survey/new-survey" state={orderData}>
                            Send Site Survey
                        </Link>
                    </Button>
                    : null} */}

        <Box sx={{ mt: 2 }}>
          <H2> Order Group : {orderData?.work_order_group} </H2>
        </Box>

        <Box>
          <Grid container spacing={2}>
            <Grid item sm={8} xs={12}>
              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">location_city</Icon>
                        <Box ml="12px">
                          <H4>Site Name</H4>
                          <Heading>{orderData?.site_name}</Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">engineeringOu</Icon>
                        <Box ml="12px">
                          <H4>Site Incharge</H4>
                          <Heading>{orderData?.site_incharge}</Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">construction</Icon>
                        <Box ml="12px">
                          <H4>Safety Equipments</H4>
                          {orderData?.safety_equipments.map(
                            (floorfinishing, index) => (
                              <span style={{ marginRight: '5px' }} key={index}>
                                <Chip label={floorfinishing} color="primary" />
                              </span>
                            )
                          )}
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">keyOutlined</Icon>
                        <Box ml="12px">
                          <H4>Site Owner</H4>
                          <Heading>{orderData?.site_owner}</Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>

                <Grid></Grid>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>Project Deadline</H4>
                          <Heading>
                            {moment(orderData?.deadline).format('MMM Do YY')}
                          </Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">group</Icon>
                        <Box ml="12px">
                          <H4>Total Team Members</H4>
                          <Heading>{orderData?.total_team_members}</Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>

                <Grid></Grid>
              </Box>
              <Divider sx={{ mt: 3, mb: 2 }} />
              <Box>
                <H3 fontWeight={500}>All Work Deadlines</H3>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>Site Survey Deadline</H4>
                          <Heading>
                            {moment(orderData?.site_survey_deadline).format(
                              'MMM Do YY'
                            )}
                          </Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>Drawing Deadline</H4>
                          <Heading>
                            {moment(orderData?.drawing_deadline).format(
                              'MMM Do YY'
                            )}
                          </Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>Aluminium Deadline</H4>
                          <Heading>
                            {moment(orderData?.aluminium_deadline).format(
                              'MMM Do YY'
                            )}
                          </Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>GlassAcpHplFixing Deadline</H4>
                          <Heading>
                            {moment(
                              orderData?.glassAcphplfixing_deadline
                            ).format('MMM Do YY')}
                          </Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={6} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>Handover Deadline</H4>
                          <Heading>
                            {moment(orderData?.handover_deadline).format(
                              'MMM Do YY'
                            )}
                          </Heading>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container spacing={3}>
                  <Grid item sm={12} xs={12}>
                    <StyledCard sx={{ mt: 2 }} elevation={2}>
                      <ContentBox>
                        <Icon className="icon">event_available</Icon>
                        <Box ml="12px">
                          <H4>Checked By</H4>
                          <SpanTaxt>
                            <Heading>Mr. Parveen </Heading>{' '}
                            <H5 sx={{ mt: 1, ml: 2 }}>Director</H5>
                          </SpanTaxt>
                        </Box>
                      </ContentBox>
                    </StyledCard>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item sm={4} xs={12} sx={{ mb: 2 }}>
              <StyledCard2
                sx={{ mt: 2, px: 2, py: 2, height: '30%' }}
                elevation={3}
              >
                <ContentBox>
                  <Icon className="icon">assignmentOutlined</Icon>
                  <Box ml="12px">
                    <H3>Assessment</H3>
                    <H4>{orderData?.assesment}</H4>
                  </Box>
                </ContentBox>
              </StyledCard2>

              <StyledCard2
                sx={{ mt: 2, px: 2, py: 2, height: '30%' }}
                elevation={3}
              >
                <ContentBox>
                  <Icon className="icon">assignmentOutlined</Icon>
                  <Box ml="12px">
                    <H4>Deadline Miss Reason</H4>
                    <Heading>{orderData?.deadline_resone}</Heading>
                  </Box>
                </ContentBox>
              </StyledCard2>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Analytics;
