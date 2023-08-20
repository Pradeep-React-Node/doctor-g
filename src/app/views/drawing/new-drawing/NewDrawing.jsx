import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/system";
import { Formik } from "formik";
import { Breadcrumb, SimpleCard } from 'app/components';
import { Button, Grid, TextField, Icon, Stack, styled, Divider, Table, Typography, TableBody, MenuItem, Checkbox, FormControlLabel, TableCell, TableHead, IconButton, TableRow, } from "@mui/material";
import { Container, Form, StyledTextField } from './FormStyle';
import { H3 } from "app/components/Typography";
import { addImage } from 'app/redux/actions/UploadImages';
import { addDrawing, getDrawingList } from 'app/redux/actions/DrawingAction';
import { getProductList } from "../../../redux/actions/ProductAction";
import { StyledCard4 } from "../../Style";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction"
import { createNotification } from "app/redux/actions/NotificationActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StyledCell = styled(TableCell)(() => ({ padding: 0 }));

const AddDrawing = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user.user.first_name + " " + user.user.last_name);
  }, []);

  const orderData = useSelector(state => state?.orders.workList);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  const productData = useSelector(state => state?.products);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const [drawingmt, setDrawingmt] = useState([
    { material: "", m_size: "", m_thickness: "", m_waste: "", },
  ]);

  const adddrawingmt = () => {
    let object2 = {
      material: "",
      m_size: "",
      m_thickness: "",
      m_waste: "",
    };

    setDrawingmt([...drawingmt, object2])
  };

  const onChange = (e, index) => {

    const updatwidthDrawingmt = drawingmt.map((drawingmt, i) => index === i
      ? Object.assign(drawingmt, { [e.target.name]: e.target.value })
      : drawingmt
    );
    setDrawingmt(updatwidthDrawingmt);

  }

  const removeDrawingmt = (index) => {
    const filteredDrawingmt = [...drawingmt];
    filteredDrawingmt.splice(index, 1);
    setDrawingmt(filteredDrawingmt);
  };


  const [imageList1, setImageList1] = useState([]);

  const handleSubmit = async (values) => {

    const data = {
      drawingmt: drawingmt,
      d_sitename: values.d_sitename,
      d_siteincharge: values.d_siteincharge,
      drawing_ckb1: values.drawing_ckb1,
      drawing_ckb2: values.drawing_ckb2,
      drawing_ckb3: values.drawing_ckb3,
      drawing_ckb4: values.drawing_ckb4,
      drawing_ckb5: values.drawing_ckb5,
      drawing_ckb6: values.drawing_ckb6,
      drawing_ckb7: values.drawing_ckb7,
      drawing_ckb8: values.drawing_ckb8,
      drawing_ckb9: values.drawing_ckb9,
      drawing_ckb10: values.drawing_ckb10,
      drawing_ckb11: values.drawing_ckb11,
      drawing_ckb12: values.drawing_ckb12,
      drawing_ckb13: values.drawing_ckb13,
      drawing_ckb14: values.drawing_ckb14,
      drawing_ckb15: values.drawing_ckb15,
      drawing_ckb16: values.drawing_ckb16,
      drawing_remark: values.drawing_remark,
      drawing_re_estimate: values.drawing_re_estimate,
      approve_status: values.approve_status,
      drawing_notification: values.drawing_notification,
      n_site_incharge: values.n_site_incharge,
      status: values.status,
      user_type_notifaction: values.user_type_notifaction,
      drawing_pic: imageList1.name,
    }

    const formData = new FormData();
    formData.append("site_survey_images", imageList1);

    dispatch(addDrawing(data))
    dispatch(addImage(formData))
    dispatch(getDrawingList());
    dispatch(createNotification(values))
    navigate("/emp/drawinglist")
    // window.location.reload(true);
    toast.success('Add Drawing Successfully!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };



  return (
    <>
      <ToastContainer
        position="top-center"
        theme="colored"
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
          <Breadcrumb routeSegments={[{ name: "Drawing", path: "/drawing/drawing-list" }, { name: "New Drawing" }]} />
        </Box>

        <Button sx={{ mb: 2, pl: 1 }} variant="contained" color="primary" onClick={() => navigate(-1)}>
          <Icon >navigate_before</Icon> Back
        </Button>

        <Stack spacing={3}>
          {/* Material Details................ */}

          <SimpleCard title="Working Drawing">
            <Formik
              onSubmit={handleSubmit}
              enableReinitialize={true}
              initialValues={{
                d_sitename: "",
                d_siteincharge: user,
                drawingmt: "",
                drawing_ckb1: false,
                drawing_ckb2: false,
                drawing_ckb3: false,
                drawing_ckb4: false,
                drawing_ckb5: false,
                drawing_ckb6: false,
                drawing_ckb7: false,
                drawing_ckb8: false,
                drawing_ckb9: false,
                drawing_ckb10: false,
                drawing_ckb11: false,
                drawing_ckb12: false,
                drawing_ckb13: false,
                drawing_ckb14: false,
                drawing_ckb15: false,
                drawing_remark: "",
                drawing_re_estimate: "",
                approve_status: false,
                drawing_notification: "New Drawing submited for Approval",
                user_type_notifaction: "Admin",
                n_site_incharge: user,
                status: false,
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
              }) => (
                <Form>

                  <Box overflow="auto">

                    <Box mt="10px">
                      <Grid container spacing={3}>
                        <Grid item sm={6} xs={12}>

                          <StyledTextField
                            fullWidth
                            select
                            size="small"
                            name="d_sitename"
                            label="Enter Site Name."
                            onChange={handleChange}
                            value={values.d_sitename || ""}
                            variant="outlined"
                          >
                            {orderData?.map((item) => (
                              <MenuItem value={item?.work_order_group} key={item._id}>
                                {item?.work_order_group}
                              </MenuItem>
                            ))}
                          </StyledTextField>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <StyledTextField
                            fullWidth
                            size="small"
                            name="d_siteincharge"
                            variant="outlined"
                            label="Employee Name"
                            value={values.d_siteincharge || ""}
                          >
                          </StyledTextField>
                        </Grid>
                      </Grid>
                    </Box>
                    <Box mt="10px">
                      <Grid container spacing={3}>
                        {/* <Grid item sm={6} xs={12}>
                          <StyledTextField
                            fullWidth
                            size="small"
                            name="drawing_deadline_sm"
                            label="Drawing Deadline"
                            variant="outlined"
                            value={values.drawing_deadline_sm || ""}
                            onChange={handleChange}
                          />
                        </Grid> */}

                        <Grid item sm={6} xs={12}>
                          <StyledTextField
                            type="file"
                            multiple
                            id='file'
                            name='site_survey_images'
                            onChange={(e) => setImageList1(e.target.files[0])}
                          />

                        </Grid>
                      </Grid>
                    </Box>

                    <Divider sx={{ mt: 1, mb: 2 }} />


                  </Box>

                  <Box>
                    <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                      <TableHead>
                        <TableRow >
                          <TableCell style={{ paddingLeft: '15px' }} colSpan={3}>Material List</TableCell>
                          <TableCell style={{ paddingLeft: '15px' }} colSpan={2}>Size</TableCell>
                          <TableCell style={{ paddingLeft: '15px' }} colSpan={2}>Thickness </TableCell>
                          <TableCell style={{ paddingLeft: '15px' }} colSpan={2}>Wastage </TableCell>
                          <TableCell style={{ paddingLeft: '15px' }} colSpan={1}>Action </TableCell>

                        </TableRow>
                      </TableHead>
                    </Table>


                    <Table sx={{ whiteSpace: "pre", minWidth: 750 }}>
                      <TableBody>
                        {drawingmt.map((drawingmtss, index) => (
                          <TableRow key={index} sx={{ position: "relative" }}>
                            <StyledCell colSpan={3} align="left">
                              <StyledTextField
                                fullWidth
                                select
                                size="small"
                                name="material"
                                variant="outlined"
                                label="Material"
                                value={drawingmtss.material || ""}
                                onChange={(e) => onChange(e, index)}
                                sx={{ width: "95%", m: "10px" }}
                              >
                                {productData?.productList?.map((item) => (
                                  <MenuItem value={item?.name} key={item._id}>
                                    {item?.name}
                                  </MenuItem>
                                ))}
                              </StyledTextField>
                            </StyledCell>

                            <StyledCell colSpan={2} align="left">
                              <TextField
                                size="small"
                                name="m_size"
                                label="Size"
                                onChange={(e) => onChange(e, index)}
                                value={drawingmtss.m_size || ""}
                                multiline
                                sx={{ width: '95%', m: "10px", mr: "10px" }}
                              />
                            </StyledCell>

                            <StyledCell colSpan={2} align="left">
                              <TextField
                                size="small"
                                name="m_thickness"
                                label="Thickness"
                                onChange={(e) => onChange(e, index)}
                                value={drawingmtss.m_thickness || ""}
                                multiline
                                sx={{ width: '95%', m: "10px" }}
                              />
                            </StyledCell>

                            <StyledCell colSpan={2} align="left">
                              <TextField
                                size="small"
                                name="m_waste"
                                label="Wastage %"
                                onChange={(e) => onChange(e, index)}
                                value={drawingmtss.m_waste || ""}
                                multiline
                                sx={{ width: '95%', m: "10px", }}
                              />
                            </StyledCell>

                            <StyledCell colSpan={1} align="center">
                              <IconButton size="small" onClick={() => removeDrawingmt(index)}>
                                <Icon color="error" fontSize="small">
                                  clear
                                </Icon>
                              </IconButton>
                            </StyledCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ mt: "16px !important", ml: "13px" }}
                      onClick={adddrawingmt}
                    >
                      + Add
                    </Button>
                  </Box>

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb1"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Set all plan According site measurements.</Typography>}
                    sx={{ width: '100%', mt: "30px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb2"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Set all Sections According to site measurements.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb3"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Make typical drawing as specification list.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb4"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>After that, make middle division at plans for panel width.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb5"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Then make section middle division as per optimizations.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb6"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Then make all elevation divisions.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb7"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Then cut the typical drawing after formate.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb8"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Send the drawing to senior consultant for calculations Bracket/fastener/Alu. Sections/MS
                      structure etc.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb9"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Drawing Printout sets for site, office, Architect, client.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb10"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Make store/lockable area at site.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb11"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Tirpal / Mats / Safety equipments.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb12"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Insurance for man power.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb13"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Material order list as per approved make list with timeline as we want.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb14"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Powder/ Anodizing colour code approved.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb15"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Send Brackets ,fasteners list bolt.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <Divider sx={{ mt: 3, mb: 2 }} />

                  <Box>
                    <Grid container spacing={3}>
                      <Grid item sm={6} xs={12}>
                        <H3 fontWeight={500}>Remarks</H3>
                        <StyledTextField
                          fullWidth
                          size="small"
                          name="drawing_remark"
                          label="Add Remarks if any."
                          onChange={handleChange}
                          value={values.drawing_remark || ""}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item sm={6} xs={12}>
                        <H3 fontWeight={500}>Re-estimate the Project cost</H3>
                        <StyledTextField
                          fullWidth
                          size="small"
                          name="drawing_re_estimate"
                          label="Re-estimate the Project Cost."
                          onChange={handleChange}
                          value={values.drawing_re_estimate || ""}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <FormControlLabel
                    control={<Checkbox />}
                    name="drawing_ckb16"
                    value={true}
                    onChange={handleChange}
                    label={<Typography style={{ fontSize: '20px' }}>Re-estimate the project if it is increasing then inform the client by mail.</Typography>}
                    sx={{ width: '100%', mt: "10px", }}
                  />

                  <StyledCard4>
                    <FormControlLabel
                      control={<Checkbox />}
                      name="approve_status"
                      value={values.approve_status}
                      onChange={handleChange}
                      label={<Typography style={{ fontSize: '20px' }}>Approve Site Survey</Typography>}
                      sx={{ width: '100%', mt: "30px", }}
                    />
                  </StyledCard4>

                  <Divider sx={{ mt: 3, mb: 2 }} />

                  <Box sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                    <Button onClick={handleSubmit} type="submit" color="primary" variant="contained" sx={{ mt: "0px !important", ml: 2, px: 6 }}>
                      Submit
                    </Button>
                  </Box>

                </Form>
              )}
            </Formik>
          </SimpleCard>

        </Stack>

      </Container>
    </>
  )
}

export default AddDrawing