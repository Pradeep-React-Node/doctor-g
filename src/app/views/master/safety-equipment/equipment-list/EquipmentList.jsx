import { Icon, Button, IconButton, TableCell, TableHead, TablePagination, TableRow, TableBody } from "@mui/material";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSafetyequipmentList, deleteSafetyequipment } from "app/redux/actions/SafetyequipmentAction";
import { Container, StyledTable } from "../../../Style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EquipmentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const safetyequipmentLists = useSelector(state => state.safetyequipment.safetyequipmentList)

  useEffect(() => {
    dispatch(getSafetyequipmentList());
  }, [dispatch])

  // const deleteSafetyequipments = async (id) => {
  //   await deleteSafetyequipment(id);
  //   toast.success('Delete Safety Equipment Successfully!', {
  //     position: "top-center",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  //   dispatch(getSafetyequipmentList());
  // }

  const deleteSafetyequipments = async (id) => {
    await deleteSafetyequipment(id);
    toast.success('Delete Safety Equipment Successfully!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    dispatch(getSafetyequipmentList());
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
          <Breadcrumb routeSegments={[{ name: "Safety Equipment", path: "/safety-equipment/equipment-list" }, { name: "Safety Equipment List" }]} />
        </div>

        <Button sx={{ mb: 2 }} variant="contained" color="primary" onClick={() => navigate("/safety-equipment/add-equipment")}>
          Add New Safety Equipment
        </Button>

        <SimpleCard title="All Safety EquipmentList">
          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell style={{ width: '7%' }} >S.No.</TableCell>
                  <TableCell style={{ width: '20%' }} align="center" >Name</TableCell>
                  <TableCell style={{ width: '14%' }} align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  safetyequipmentLists?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subscriber, index) => (
                      <TableRow key={index}>
                        <TableCell style={{ width: '9%', paddingLeft: "15px", }} >{index + 1}</TableCell>
                        <TableCell align="center">{subscriber.name}</TableCell>

                        <TableCell align="center">
                          <Link color="primary" variant="contained" to="/safety-equipment/edit-equipment" state={subscriber}>
                            <IconButton
                              aria-label="edit"
                              aria-haspopup="true"
                            >
                              <Icon color="primary">edit</Icon>
                            </IconButton>
                          </Link>
                          <IconButton
                            aria-label="delete"
                            aria-haspopup="true"
                            onClick={() => deleteSafetyequipments(subscriber?._id)}
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
              count={safetyequipmentLists?.length}
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
export default EquipmentList;
