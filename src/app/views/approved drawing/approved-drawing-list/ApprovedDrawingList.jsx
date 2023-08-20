import { Icon, Chip, IconButton, TableBody, TableCell, TableHead, TablePagination, TableRow, } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDrawingList } from "app/redux/actions/DrawingAction";
import { Container, StyledTable } from "../../Style";


const ApprovedDrawingList = () => {
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

    const drawingData = useSelector(state => state.drawings.drawingList)


    useEffect(() => {
        dispatch(getDrawingList());
    }, [dispatch])


    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: "Approved Drawings", path: "/drawing/drawing-list" }, { name: "Approved Drawings List" }]}
                />
            </div>

            <SimpleCard title="All Approved Drawings">
                <Box width="100%" overflow="auto">
                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '7%' }} align="center">S.No.</TableCell>
                                <TableCell align="center" >Site Name</TableCell>
                                <TableCell align="center" >Site Incharge</TableCell>
                                <TableCell align="center" >Material</TableCell>
                                <TableCell align="center">Size</TableCell>
                                <TableCell align="center">Thickness</TableCell>
                                <TableCell align="center" >Status</TableCell>
                                <TableCell style={{ width: '14%' }}align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                drawingData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((subscriber, index,) => (
                                        <TableRow key={index}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell align="center">{subscriber.d_sitename}</TableCell>
                                            <TableCell align="center">{subscriber.d_siteincharge}</TableCell>
                                            <TableCell align="center">{subscriber.material}</TableCell>
                                            <TableCell align="center">{subscriber.m_size}</TableCell>
                                            <TableCell align="center">{subscriber.m_thickness}</TableCell>
                                            <TableCell align="center">
                                            {subscriber?.approve_status === true ? <Chip label="Aprroved" color="primary" /> : <Chip label="UnAprroved" color="error" />}
                                            </TableCell>

                                            <TableCell align="center">
                                                <Link variant="contained" to="/drawing/view-drawing" state={subscriber}>
                                                    <IconButton
                                                        aria-label="details"
                                                        aria-haspopup="true"
                                                    >
                                                        <Icon style={{ color: "primary" }} >trending_flat</Icon>
                                                    </IconButton>
                                                </Link>
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
                        count={drawingData?.length}
                        onPageChange={handleChangePage}
                        rowsPerPageOptions={[5, 10, 25]}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        nextIconButtonProps={{ "aria-label": "Next Page" }}
                        backIconButtonProps={{ "aria-label": "Previous Page" }}
                    />
                </Box>
            </SimpleCard>
        </Container>
    );
};

export default ApprovedDrawingList;
