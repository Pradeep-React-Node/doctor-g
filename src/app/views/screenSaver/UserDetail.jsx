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


const UserDetail = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const userData = location.state

    console.log("oder data throgh props", userData);
    return (


        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "User List", path: "/users/userlist" }, { name: "View User" }]} />
            </Box>

            <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
                <Icon >navigate_before</Icon> Back
            </Button>
            <SimpleCard title={userData?.first_name + " " + userData?.last_name}>
                <StyledLoading>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                        <Card sx={{ px: 4, py: 3 }} elevation={3}>
                                <Box align="center">
                                    {userData?.user_pic === "" ? <img src="http://localhost:6002/uploads/thumb.PNG" alt="" /> : <img src={"http://localhost:6002/uploads/" + userData?.user_pic} alt="" />}
                                </Box>
                            </Card>
                        </Grid>


                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Card sx={{ px: 4, py: 0 }} elevation={3}>
                                <Box>
                                    <StyledTable >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Name </TableCell>
                                                <TableCell align="center">{userData?.first_name} {userData?.last_name}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Email </TableCell>
                                                <TableCell align="center">{userData?.email}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Phone </TableCell>
                                                <TableCell align="center">{userData?.phone} </TableCell>
                                            </TableRow>
                                            
                                            <TableRow>
                                                <TableCell>User Type </TableCell>
                                                <TableCell align="center">{userData?.user_type} </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Date Of Birth </TableCell>
                                                <TableCell align="center">{userData?.dob}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>designation</TableCell>
                                                <TableCell align="center">{userData?.designation}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Address </TableCell>
                                                <TableCell align="center">{userData?.address}</TableCell>
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

export default UserDetail;
