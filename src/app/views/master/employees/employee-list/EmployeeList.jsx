import { Button, Table, styled, Avatar, Icon, IconButton, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { H5 } from "app/components/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmployeeList, deleteEmployee } from "../../../../redux/actions/EmployeeActions";
import { FlexBox } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledTable = styled(Table)(() => ({
    minWidth: 1000,
    whiteSpace: "pre",
    "& thead": {
      "& tr": { "& th": { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
    },
    "& tbody": {
      "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
  }));
  
  const Container = styled("div")(({ theme }) => ({
    margin: "20px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
      marginBottom: "30px",
      [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
  }));

const EmployeeList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const employeeData = useSelector(state => state?.employees?.employee[0]?.Employee)

    useEffect(() => {
        dispatch(getEmployeeList());
    }, [dispatch])

    const deleteEmployees = (id) => {
        dispatch(deleteEmployee(id));
        window.location.reload(false);
        toast.success('Delete Employee Successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

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
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: "Employee", path: "/employee/employeeList-list" }, { name: "Employee" }]}
                />
            </div>

            <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/employee/add-employee")}>
                Add New Employee
            </Button>

            <SimpleCard title="All Employee">
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '7%' }} >S.No.</TableCell>
                                <TableCell style={{ width: '20%' }}align="center" >Employee Name</TableCell>
                                <TableCell align="center">Employee Type</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone No</TableCell>
                                <TableCell align="center">Designation</TableCell>
                                <TableCell style={{ width: '14%' }}align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                employeeData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((subscriber, index) => (
                                        <TableRow key={index}>
                                            <TableCell style={{ width: '9%', paddingLeft:"15px", }} >{index + 1}</TableCell>
                                            <TableCell align="center">
                                                <FlexBox>
                                                    <Avatar sx={{ width: 48, height: 48 }} src={subscriber?.imgUrl} />
                                                    <Box ml="12px">
                                                        <H5 sx={{ fontSize: "15px" }}>{subscriber?.name}</H5>
                                                    </Box>
                                                </FlexBox>
                                            </TableCell>
                                            <TableCell align="center">{subscriber.employee_type}</TableCell>
                                            <TableCell align="center">{subscriber.email}</TableCell>
                                            <TableCell align="center">{subscriber.phone}</TableCell>
                                            <TableCell align="center">{subscriber.designation}</TableCell>

                                            <TableCell align="center">
                                                <Link color="primary" variant="contained" to="/employee/edit-employee" state={subscriber}>
                                                    <IconButton
                                                        aria-label="edit"
                                                        aria-haspopup="true"
                                                    >
                                                        <Icon color="primary">edit</Icon>
                                                    </IconButton>
                                                </Link>
                                                <Link variant="contained" to="/employee/employee-detail" state={subscriber}>
                                                    <IconButton
                                                        aria-label="details"
                                                        aria-haspopup="true"
                                                    >
                                                        <Icon style={{ color: "primary" }} >trending_flat</Icon>
                                                    </IconButton>
                                                </Link>
                                                <IconButton
                                                    aria-label="delete"
                                                    aria-haspopup="true"
                                                    onClick={() => deleteEmployees(subscriber?._id)}
                                                >
                                                    <Icon color="error">close</Icon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                        </TableBody>
                    </StyledTable>

                    <TablePagination
                        sx={{ px: 2 }}
                        page={page}
                        component="div"
                        rowsPerPage={rowsPerPage}
                        count={employeeData?.length}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 25]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        nextIconButtonProps={{ "aria-label": "Next Page" }}
                        backIconButtonProps={{ "aria-label": "Previous Page" }}
                    />
                </Box>
            </SimpleCard>
        </Container>
        </>
    );
};

export default EmployeeList;
