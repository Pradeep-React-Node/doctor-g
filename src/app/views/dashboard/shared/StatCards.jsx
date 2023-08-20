import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import { useEffect, useState } from "react";
import { getOrderList } from "../../../redux/actions/OrderAction";
import { getHandoverList } from "app/redux/actions/HandoverAction";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getOrderListByEmp } from "../../../redux/actions/OrderAction"
import { getHandoverListByEmp, deleteHandover } from "app/redux/actions/HandoverAction";

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: "white" },
  '& .icon': { fontSize: '44px', color: "white" },
}));

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: "white",
}));

const StatCards = () => {
  const dispatch = useDispatch();
  const cardList = [
    { name: 'New Leads', amount: 3050, icon: 'group' },
    { name: 'This week Sales', amount: '$80,500', icon: 'attach_money' },
    { name: 'Inventory Status', amount: '8.5% Stock Surplus', icon: 'store' },
    { name: 'Orders to deliver', amount: '305 Orders', icon: 'shopping_cart' },
  ];

  const orderData = useSelector(state => state?.orders.workList);
  const orderDatas = useSelector((state) => state?.orders);

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);

  const handoverLists = useSelector(state => state.handover.handoverList)
  const handoverData = useSelector(state => state?.handover.empHandoverList);

  useEffect(() => {
    dispatch(getHandoverList());
  }, [dispatch])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        dispatch(getHandoverListByEmp(user.user.first_name + " " + user.user.last_name));
    }
}, [dispatch]);


  const [user, setUser] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user.user.user_type);
    }
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  return (

    <>
      {user === "Employee" ?
        <>
          <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={6}>
              <StyledCard elevation={6} sx={{ background: `linear-gradient(87deg,#f5365c 0,#f56036 100%)!important`, }}>
                <ContentBox>
                  <Icon className="icon">business</Icon>
                  <Box ml="12px">
                    <Small>All Work Order</Small>
                    <Heading>{orderData?.length} Work</Heading>
                  </Box>
                </ContentBox>

                <Tooltip title="View Details" placement="top">
                  <Link variant="contained" to="/emp/work">
                    <IconButton
                      aria-label="details"
                      aria-haspopup="true"
                    >
                      <Icon style={{ color: "primary" }} >arrow_right_alt</Icon>
                    </IconButton>
                  </Link>
                </Tooltip>
              </StyledCard>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledCard elevation={6} sx={{ background: `linear-gradient(87deg,#11cdef 0,#1171ef 100%)!important`, }}>
                <ContentBox>
                  <Icon className="icon">business</Icon>
                  <Box ml="12px">
                    <Small>Handover Projects</Small>
                    <Heading>{handoverData?.length} Project </Heading>
                  </Box>
                </ContentBox>

                <Tooltip title="View Details" placement="top">
                  <Link variant="contained" to="/emp/handoverlist">
                    <IconButton
                      aria-label="details"
                      aria-haspopup="true"
                    >
                      <Icon style={{ color: "primary" }} >arrow_right_alt</Icon>
                    </IconButton>
                  </Link>
                </Tooltip>
              </StyledCard>
            </Grid>
          </Grid>
        </>
        :
        <Grid container spacing={3} sx={{ mb: '24px' }}>
          <Grid item xs={12} md={6}>
            <StyledCard elevation={6} sx={{ background: `linear-gradient(87deg,#f5365c 0,#f56036 100%)!important`, }}>
              <ContentBox>
                <Icon className="icon">business</Icon>
                <Box ml="12px">
                  <Small>All Work Order</Small>
                  <Heading>{orderDatas?.orderList.length} Work</Heading>
                </Box>
              </ContentBox>

              <Tooltip title="View Details" placement="top">
                <Link variant="contained" to="/orders/order-list">
                  <IconButton
                    aria-label="details"
                    aria-haspopup="true"
                  >
                    <Icon style={{ color: "primary" }} >arrow_right_alt</Icon>
                  </IconButton>
                </Link>
              </Tooltip>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard elevation={6} sx={{ background: `linear-gradient(87deg,#11cdef 0,#1171ef 100%)!important`, }}>
              <ContentBox>
                <Icon className="icon">business</Icon>
                <Box ml="12px">
                  <Small>Handover Projects</Small>
                  <Heading>{handoverLists?.length} Project </Heading>
                </Box>
              </ContentBox>

              <Tooltip title="View Details" placement="top">
                <Link variant="contained" to="/handover/handover-list">
                  <IconButton
                    aria-label="details"
                    aria-haspopup="true"
                  >
                    <Icon style={{ color: "primary" }} >arrow_right_alt</Icon>
                  </IconButton>
                </Link>
              </Tooltip>
            </StyledCard>
          </Grid>
        </Grid>
      }
    </>

  );
};

export default StatCards;
