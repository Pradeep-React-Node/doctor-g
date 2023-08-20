import { Button, Icon, IconButton, Box, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, } from "@mui/material";
import { styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getQuotationList, deleteQuotation } from "app/redux/actions/QuotationAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: {
        margin: "16px",
    },
    "& .breadcrumb": {
        marginBottom: "30px",
        [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
}));

const StyledTable = styled(Table)(() => ({
    minWidth: 900,
    whiteSpace: "pre",
    "& thead": {
        "& tr": { "& th": { paddingLeft: 0, paddingRight: 0, fontSize: '1rem' } },
    },
    "& tbody": {
        "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
    },
}));
const QuotationtList = () => {
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

    const quotationData = useSelector(state => state.quotation?.quotationList)

    useEffect(() => {
        dispatch(getQuotationList());
    }, [dispatch])

    const deleteOrders = (id) => {
        dispatch(deleteQuotation(id));
        window.location.reload(false);
        toast.success('Delete Quotation Successfully!', {
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
    const quotationList = quotationData[0]
    console.log("quotation list", quotationList);

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
                <Box className="breadcrumb">
                    <Breadcrumb routeSegments={[{ name: "Quotation", path: "/quotation/quotation-list" }, { name: "Quotation List" }]} />
                </Box>
                <Box mb={2}>
                    <Button color="primary" variant="contained" type="submit" >
                        <Link to="/quotation/add-quotation">  Add New Quotation</Link>

                    </Button>
                </Box>
                <SimpleCard title="All Quotation">
                    <Box width="100%" overflow="auto">
                        <StyledTable>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: '5%' }} align="center">S.No.</TableCell>
                                    <TableCell align="center">Customar Name</TableCell>
                                    <TableCell align="center">Quotation No</TableCell>
                                    <TableCell align="center">Order Group</TableCell>
                                    <TableCell align="center">Sales Person</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    quotationList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((subscriber, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">{subscriber.customer_name}</TableCell>
                                                <TableCell align="center">{subscriber.quotation_no}</TableCell>
                                                <TableCell align="center">{subscriber.order_group}</TableCell>
                                                <TableCell align="center">{subscriber.sales_person}</TableCell>

                                                <TableCell align="center">
                                                    <Link color="primary" variant="contained" to="/orders/edit-order" state={subscriber}>
                                                        <IconButton
                                                            aria-label="edit"
                                                            aria-haspopup="true"
                                                        >
                                                            <Icon color="primary">edit</Icon>
                                                        </IconButton>
                                                    </Link>
                                                    <Link variant="contained" to="/orders/order-details" state={subscriber}>
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
                                                        onClick={() => deleteOrders(subscriber?._id)}
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
                            count={quotationList?.length}
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

export default QuotationtList;
