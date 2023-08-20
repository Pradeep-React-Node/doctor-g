// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Grid,
  styled,
  Icon,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { FlexAlignCenter, FlexBox } from "app/components/FlexBox";
import { addAluminium } from "app/redux/actions/AluminiumAction";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from "react-dropzone";
import { convertHexToRGB } from "app/utils/utils";
import { useTheme } from "@mui/system";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const DropZone = styled(FlexAlignCenter)(({ isDragActive, theme }) => ({
  height: 160,
  width: "100%",
  cursor: "pointer",
  borderRadius: "4px",
  marginBottom: "16px",
  transition: "all 350ms ease-in-out",
  border: `2px dashed rgba(${convertHexToRGB(theme.palette.text.primary)}, 0.3)`,
  "&:hover": {
    background: `rgb(${convertHexToRGB(theme.palette.text.primary)}, 0.2) !important`,
  },
  background: isDragActive ? "rgb(0, 0, 0, 0.15)" : "rgb(0, 0, 0, 0.01)",
}));

const NewAluminiumForm = () => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { palette } = useTheme();
const textMuted = palette.text.secondary;

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    dispatch(addAluminium(state))
    navigate("/aluminium/aluminium-list")
    console.log("Submit Data", state);
    toast.success('Add Aluminium Successfully!', {
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

  const handleChange = (event) => {
    // event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };


  const handleSelect = (e) => {
    setState({ ...state, safety_equipments: (Array.isArray(e) ? e.map(x => x.value) : []) })

  }

  console.log("Selcet Data", state);
  const {
    count_aluminium,
    check_coating,
    take_receiving_challan,
    scaffolding,
    make_part_frame,
    check_fabrication,
    scrap_management,
    plaster_depth,
    remark,
    take_all_photos
  } = state;

  const [imageList, setImageList] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
  });

  useEffect(() => {
    setImageList(acceptedFiles);
  }, [acceptedFiles]);

  const options = [
    { value: 'had', label: 'had' },
    { value: 'glubs', label: 'glubs' },
    { value: 'shoes', label: 'shoes' }
  ]
  return (
    <div>
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
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              fullWidth
              size="small"
              name="count_aluminium"
              id="standard-basic"
              value={count_aluminium || ""}
              onChange={handleChange}
              label="Count Aluminium"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="check_coating"
              id="standard-basic"
              value={check_coating || ""}
              onChange={handleChange}
              label="Check Coating"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="take_receiving_challan"
              id="standard-basic"
              value={take_receiving_challan || ""}
              onChange={handleChange}
              label="Take Receiving Challan"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="scaffolding"
              label="Scaffolding"
              value={scaffolding || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextField
              type="text"
              fullWidth
              size="small"
              name="remark"
              id="standard-basic"
              value={remark || ""}
              onChange={handleChange}
              label="Remark"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              fullWidth
              size="small"
              name="make_part_frame"
              id="standard-basic"
              value={make_part_frame || ""}
              onChange={handleChange}
              label="Make Part Frame"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            
            <TextField
              type="text"
              fullWidth
              size="small"
              name="scrap_management"
              label="Scrap Management"
              value={scrap_management || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

            <TextField
              type="text"
              fullWidth
              size="small"
              name="check_fabrication"
              id="standard-basic"
              value={check_fabrication || ""}
              onChange={handleChange}
              label="Check Fabrication"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

            <TextField
              type="text"
              fullWidth
              size="small"
              name="plaster_depth"
              id="standard-basic"
              value={plaster_depth || ""}
              onChange={handleChange}
              label="Plaster Depth"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />

            <DropZone {...getRootProps()}>
              <input {...getInputProps()} />
              <FlexBox alignItems="center" flexDirection="column">
                <Icon sx={{ color: textMuted, fontSize: "48px" }}>publish</Icon>
                {imageList.length ? (
                  <span>{imageList.length} images were selected</span>
                ) : (
                  <span>Drop Your Product images Here</span>
                )}
              </FlexBox>
            </DropZone>

            <TextField
              type="text"
              fullWidth
              size="small"
              name="take_all_photos"
              id="standard-basic"
              value={take_all_photos || ""}
              onChange={handleChange}
              label="Take All Photos"
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Span sx={{ pl: 2, textTransform: "capitalize" }}>Add Aluminium</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default NewAluminiumForm;
