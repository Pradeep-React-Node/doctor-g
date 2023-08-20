import { Button, Icon, IconButton, TableBody, TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPaymnetList, deletePayment } from "app/redux/actions/PaymentAction";
import moment from "moment";
import { Container, StyledTable } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const PaymentList = () => {
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


    const paymentList = useSelector(state => state.payments.paymentList)

    useEffect(() => {
        dispatch(getPaymnetList());
    }, [dispatch])


    const deletePayments = (id) => {
        dispatch(deletePayment(id));
        console.log("delted id", id);
        // window.location.reload(false);
        toast.success('Delete Payment Successfully!', {
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
                        routeSegments={[{ name: "Payments", path: "" }, { name: "Payment List" }]}
                    />
                </div>

                <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/payment/add-payment")}>
                    Add New Payment
                </Button>

                <SimpleCard title="All Payment">
                    <Box width="100%" overflow="auto">
                        <StyledTable>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '7%' }} >S.No.</TableCell>
                                    <TableCell style={{ width: '20%' }} align="center" >Order  Group</TableCell>
                                    <TableCell align="center">Payment Type</TableCell>
                                    <TableCell align="center">Amount</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell style={{ width: '14%' }} align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    paymentList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((subscriber, index) => (
                                            <TableRow key={index}>
                                                <TableCell style={{ width: '9%', paddingLeft: "15px", }} >{index + 1}</TableCell>
                                                <TableCell align="center">{subscriber.order_group}</TableCell>
                                                <TableCell align="center">{subscriber.payment_type}</TableCell>
                                                <TableCell align="center">{subscriber.amount}</TableCell>
                                                <TableCell align="center">{moment(subscriber?.date).format('MMMM Do YYYY')}</TableCell>

                                                <TableCell align="center">
                                                    <Link color="primary" variant="contained" to="/payment/edit-payment" state={subscriber}>
                                                        <IconButton
                                                            aria-label="edit"
                                                            aria-haspopup="true"
                                                        >
                                                            <Icon color="primary">edit</Icon>
                                                        </IconButton>
                                                    </Link>
                                                    <Link variant="contained" to="/payment/view-payment" state={subscriber}>
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
                                                        onClick={() => deletePayments(subscriber?._id)}
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
                            count={paymentList?.length}
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

export default PaymentList;
