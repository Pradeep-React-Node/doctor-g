import { Card, Grid, Box, TableBody, TableCell, TableRow } from "@mui/material";
import { Button, Icon } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import { Container, StyledLoading, StyledTableBox } from "../../../Style";


const EmployeeDetail = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const employeeData = location?.state

    console.log("oder data throgh props", employeeData);
    return (


        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: "Employee List", path: "/employee/employeeList-list" }, { name: "View Employee" }]} />
            </Box>

            <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
        <Icon >navigate_before</Icon> Back
      </Button>
            <SimpleCard title={employeeData?.name}>
                <StyledLoading>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <Card sx={{ px: 4, py: 3 }} elevation={3}>
                                <Box align="center">
                                    <img src="/assets/images/logomain.jpeg" alt="" />
                                </Box>
                            </Card>
                        </Grid>


                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <Card sx={{ px: 4, py: 0 }} elevation={3}>
                                <Box>
                                    <StyledTableBox >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Created At </TableCell>
                                                <TableCell align="center">{moment(employeeData?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Employee Type </TableCell>
                                                <TableCell align="center">{employeeData?.employee_type}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Email </TableCell>
                                                <TableCell align="center">{employeeData?.email}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Phone </TableCell>
                                                <TableCell align="center">{employeeData?.phone} </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Designation </TableCell>
                                                <TableCell align="center">{employeeData?.designation} </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </StyledTableBox>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </StyledLoading>
            </SimpleCard>
        </Container>
    );
};

export default EmployeeDetail;
