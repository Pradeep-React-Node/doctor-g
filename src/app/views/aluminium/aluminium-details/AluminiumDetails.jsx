import { Grid, styled, Box } from '@mui/material';
import { Fragment } from 'react';
import { Breadcrumb } from "app/components";
import ViewAluminium from './ViewAluminium'
import { useLocation } from 'react-router-dom'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const Analytics = () => {
    const location = useLocation()
    const aluminiumData = location.state

    console.log("props aluminium details", aluminiumData);
    return (
        <>
            <Container>
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Aluminium", path: "/aluminium/aluminium-list" }, { name: "View Aluminium" }]} />
                </Box>
            </Container>

            <Fragment>
                <ContentBox className="analytics">
                    <Grid container spacing={12}>
                        <Grid item lg={9} md={9} sm={9} xs={9}>
                            {/* <Card sx={{ px: 3, py: 2, mb: 3 }}> */}
                                <Title>View Aluminium Details</Title>
                                <ViewAluminium aluminiumData={aluminiumData} />
                            {/* </Card> */}
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xs={3}>
                            {/* <Card sx={{ px: 3, py: 2, mb: 3 }}> */}
                                <h3>Assessment -</h3>
                                <p>{aluminiumData?.assesment}</p>
                            {/* </Card> */}
                        </Grid>
                    </Grid>
                    <br/>
                    <h4>Checked By:-</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", marginRight: "100px", marginLeft: "100px" }}><h4> Design Department </h4>
                        <h4> Account Manager </h4>
                        <h4>Mr. Parveen </h4>
                        <h4>Director </h4>
                    </div>
                </ContentBox>
            </Fragment>
        </>

    );
};

export default Analytics;
