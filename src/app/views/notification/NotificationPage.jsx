import { IconButton, Icon, TableBody, TableCell, TableHead, TablePagination, TableRow, } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb } from "app/components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotification, deleteNotification } from "app/redux/actions/NotificationActions";
import { Container, StyledTable, NStyledCard } from "../Style";
import { H2 } from "app/components/Typography";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NotificationPage = () => {
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

    const notificationLists = useSelector(state => state.notifications.notificationList)

    useEffect(() => {
        dispatch(getNotification());
    }, [dispatch])

    // const deleteNotifications = (id) => {
    //     dispatch(deleteNotification(id));
    //     dispatch(getNotification());
    // }

    const deleteNotifications = async (id) => {
        await deleteNotification(id);
        toast.success('Delete Notification Successfully!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch(getNotification());
    }


    return (
        <Container>

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
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: "Notification", path: "/handover/handover-list" }, { name: "Notification List" }]}
                />
            </div>

            {/* <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/handover/add-handover")}>
                Add New Handover
            </Button> */}
            <H2>All Notification History</H2>
            <Box sx={{ mt: 2 }}>
                <NStyledCard>
                    <StyledTable>
                        <TableHead sx={{ backgroundColor: "#d0e6fe" }}>
                            <TableRow>
                                <TableCell style={{ width: '7%' }} align="center">S.No.</TableCell>
                                <TableCell style={{ width: '20%' }} align="center">Date</TableCell>
                                <TableCell style={{ width: '63%' }} align="left">Notification</TableCell>
                                <TableCell style={{ width: '10%' }} align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                notificationLists?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((subscriber, index) => (
                                        <TableRow key={index}>
                                            <TableCell style={{ width: '7%' }} align="center">{index + 1}</TableCell>
                                            <TableCell style={{ width: '20%' }} align="center">{moment(subscriber.createdAt).format("Do MMM YY")}</TableCell>
                                            <TableCell style={{ width: '63%' }} align="left">
                                                {subscriber.newwork_notification}
                                                {subscriber.drawing_notification}
                                                {subscriber.sitesurvey_notification}
                                                {subscriber.aluiminium_notification}
                                                {subscriber.glass_notification}
                                                {subscriber.handover_notification}
                                                {subscriber.d_approve}
                                                {subscriber.st_approve}
                                                {subscriber.al_approve}
                                                {subscriber.gl_approve}
                                                {subscriber.hd_approve}
                                            </TableCell>
                                            <TableCell style={{ width: '10%' }} align="center">
                                                <IconButton
                                                    aria-label="delete"
                                                    aria-haspopup="true"
                                                    onClick={() => deleteNotifications(subscriber?._id)}
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
                        count={notificationLists?.length}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 25]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        nextIconButtonProps={{ "aria-label": "Next Page" }}
                        backIconButtonProps={{ "aria-label": "Previous Page" }}
                    />
                </NStyledCard>
            </Box>
        </Container>
    );
};


export default NotificationPage;
