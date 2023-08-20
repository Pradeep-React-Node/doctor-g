import Button from '@mui/material/Button';
import { Box, Icon, styled } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { H3 } from "app/components/Typography";
import { getOrderListByEmp } from "../../../redux/actions/OrderAction"
import moment from 'moment';
import { StylPopUp } from "../../Style"
import { AluiminiumUpdatePop, DeadlineUpdatePop, DrawingUpdatePop, GlassUpdatePop, HandoverUpdatePop, SurveyUpdatePop } from '../../EmployeePannel/DeadlineUpdatePopUp';
import { Key } from '@mui/icons-material';

const PopIcon = styled('div')(() => ({
  backgroundColor: "#f5dadf",
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));


const EmpDeadlinePopup = () => {
  const dispatch = useDispatch()
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);


  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpen5(false);
    setOpen6(false);
  }

  const orderData = useSelector(state => state?.orders.workList);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(getOrderListByEmp(user.user.first_name + " " + user.user.last_name));
    }
  }, [dispatch]);

  const current = new Date();
  const formattedDate = moment(current).format('DD-MM-YYYY');

  


  useEffect(() => {
    orderData.map((subscriber, i) => {
      <>
        {(moment(subscriber?.deadline).format("DD-MM-YYYY")) < formattedDate ? setOpen6(true) : null}
        {(moment(subscriber?.site_survey_deadline).format("DD-MM-YYYY")) < formattedDate ? setOpen1(true) : null}
        {(moment(subscriber?.drawing_deadline).format("DD-MM-YYYY")) < formattedDate ? setOpen2(true) : null}
        {(moment(subscriber?.aluminium_deadline).format("DD-MM-YYYY")) < formattedDate ? setOpen3(true) : null}
        {(moment(subscriber?.glassAcphplfixing_deadline).format("DD-MM-YYYY")) < formattedDate ? setOpen4(true) : null}
        {(moment(subscriber?.handover_deadline).format("DD-MM-YYYY")) < formattedDate ? setOpen5(true) : null}
      </>

    })
  })


  return (
    <>
      {
        orderData.map((subscriber, index) => (
          <>
            

            <Dialog open={open6} onClose={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <DialogTitle> You Miss Your Deadline</DialogTitle>
                <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
                <DialogContent sx={{ width: "400px" }}>
                  <DialogContentText>
                    <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
                  </DialogContentText>
                  <DeadlineUpdatePop orderData={subscriber} />
                </DialogContent>

              </Box>
            </Dialog>

            <Dialog open={open1} onClose={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <DialogTitle> You Miss your Site Survey Deadline</DialogTitle>
                <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
                <DialogContent sx={{ width: "400px" }}>
                  <DialogContentText>
                    <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
                  </DialogContentText>
                  <SurveyUpdatePop orderData={subscriber} />
                </DialogContent>

              </Box>
            </Dialog>

            <Dialog open={open2} onClose={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <DialogTitle> You Miss your Drawing Deadline</DialogTitle>
                <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
                <DialogContent sx={{ width: "400px" }}>
                  <DialogContentText>
                    <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
                  </DialogContentText>
                  <DrawingUpdatePop orderData={subscriber} />
                </DialogContent>

              </Box>
            </Dialog>

            <Dialog open={open3} onClose={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <DialogTitle> You Miss your Aluiminium Deadline</DialogTitle>
                <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
                <DialogContent sx={{ width: "400px" }}>
                  <DialogContentText>
                    <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
                  </DialogContentText>
                  <AluiminiumUpdatePop orderData={subscriber} />
                </DialogContent>

              </Box>
            </Dialog>

            <Dialog open={open4} onClose={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <DialogTitle> You Miss your Glass Deadline</DialogTitle>
                <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
                <DialogContent sx={{ width: "400px" }}>
                  <DialogContentText>
                    <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
                  </DialogContentText>
                  <GlassUpdatePop orderData={subscriber} />
                </DialogContent>

              </Box>
            </Dialog>

            <Dialog open={open5} onClose={handleClose}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                <DialogTitle> You Miss your Handover Deadline</DialogTitle>
                <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
                <DialogContent sx={{ width: "400px" }}>
                  <DialogContentText>
                    <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
                  </DialogContentText>
                  <HandoverUpdatePop orderData={subscriber} />
                </DialogContent>

              </Box>
            </Dialog>

          </>
        ))}




















      {/* 
      <Dialog open={open} disableBackdropClick={true} disableEscapeKeyDown={true}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
          <DialogTitle> You Miss your Deadline</DialogTitle>
          <PopIcon><Icon style={{ fontSize: "60px", color: "#ef2e47" }}>warning</Icon></PopIcon>
          <DialogContent sx={{ width: "400px" }}>
            <DialogContentText>
              <H3 style={{ textAlign: 'center' }}>Alert :- You miss Your Deadline Date pls give a reason and update the deadline date.</H3>
            </DialogContentText>

          </DialogContent>


          {user === "Employee" ?
            <>
              <Formik
                onSubmit={handleSubmit}
                enableReinitialize={true}
              // initialValues={initialValues}
              //   validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setSubmitting,
                  setFieldValue,
                }) => (
                  <Form onSubmit={handleSubmit} onError={() => null}>
                    <H3>Update Deadline date</H3>
                    <StyledTextField
                      fullWidth
                      type="date"
                      size="small"
                      name="deadline"
                      onChange={handleChange}
                      value={state?.deadline}
                    />

                    <StyledTextField
                      fullWidth
                      type="text"
                      size="small"
                      label="Type Your Remark Here"
                      name="assesment"
                      onChange={handleChange}
                      value={state.assesment || ""}
                    />

                    <DialogActions>
                      <Button onClick={handleSubmit}>Update Now</Button>
                    </DialogActions>
                  </Form>
                )}
              </Formik>
            </>
            : null}


        </Box>
      </Dialog> */}
    </>

  );
};

export default EmpDeadlinePopup;
