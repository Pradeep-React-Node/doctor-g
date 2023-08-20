import { Button, Avatar, Icon, IconButton, TableBody, TableCell, TableHead, TablePagination, TableRow, } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { H5 } from "app/components/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getClientList, deleteClient } from "app/redux/actions/ClientAction";
import { FlexBox, Container, StyledTable } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ClientList = () => {
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

    const clientList = useSelector(state => state.clients.clientList)

    console.log("hello word", clientList);

    useEffect(() => {
        dispatch(getClientList());
    }, [dispatch])

    const deleteClients = (id) => {
        dispatch(deleteClient(id));
        window.location.reload(false);
        toast.success('Delete Client Successfully!', {
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
                    routeSegments={[{ name: "Client", path: "/client/client-list" }, { name: "Client List" }]}
                />
            </div>

            <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/client/add-client")}>
                Add New Client
            </Button>

            <SimpleCard title="All Clients">
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '7%' }} align="center">S.No.</TableCell>
                                <TableCell style={{ width: '25%' }}align="center" >Client Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Phone No</TableCell>
                                <TableCell align="center">Group Name</TableCell>
                                <TableCell style={{ width: '14%' }}align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                clientList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((subscriber, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell align="center">
                                                <FlexBox>
                                                    <Avatar sx={{ width: 48, height: 48 }} src={subscriber?.imgUrl} />
                                                    <Box ml="12px">
                                                        <H5 sx={{ fontSize: "15px" }}>{subscriber?.first_name} {subscriber?.last_name}</H5>
                                                    </Box>
                                                </FlexBox>
                                            </TableCell>
                                            <TableCell align="center">{subscriber.email}</TableCell>
                                            <TableCell align="center">{subscriber.phone}</TableCell>
                                            <TableCell align="center">{subscriber.group_name}</TableCell>

                                            <TableCell align="center">
                                                <Link color="primary" variant="contained" to="/client/edit-client" state={subscriber}>
                                                    <IconButton
                                                        aria-label="edit"
                                                        aria-haspopup="true"
                                                    >
                                                        <Icon color="primary">edit</Icon>
                                                    </IconButton>
                                                </Link>
                                                <Link variant="contained" to="/client/view-client" state={subscriber}>
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
                                                    onClick={() => deleteClients(subscriber?._id)}
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
                        count={clientList?.length}
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

export default ClientList;
