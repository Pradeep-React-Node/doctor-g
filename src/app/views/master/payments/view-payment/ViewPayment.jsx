import { Card, styled, Grid, Box, TableBody, TableCell, Table, TableRow, Icon, Button } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import moment from "moment";

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const StyledLoading = styled('div')(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
    },
}));

const StyledTable = styled(Table)(() => ({
    width: '100%',
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
}));


const ViewPayment = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const paymnetData = location?.state

    console.log("oder data throgh props", paymnetData);
    return (


        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "Payment List", path: "/payment/payment-list" }, { name: "View Payment" }]} />
            </Box>

            <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                <Icon >navigate_before</Icon> Back
            </Button>
            <SimpleCard >
                <StyledLoading>
                    <Grid container spacing={2}>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Card sx={{ px: 4, py: 0 }} elevation={3}>
                                <Box>
                                    <StyledTable >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Created At </TableCell>
                                                <TableCell align="center">{moment(paymnetData?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Payment ID </TableCell>
                                                <TableCell align="center">{paymnetData?._id}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Order Group  </TableCell>
                                                <TableCell align="center">{paymnetData?.order_group}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Payment Type </TableCell>
                                                <TableCell align="center">{paymnetData?.payment_type} </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Amount </TableCell>
                                                <TableCell align="center">{paymnetData?.amount} </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </StyledTable>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </StyledLoading>
            </SimpleCard>
        </Container>
    );
};

export default ViewPayment;
