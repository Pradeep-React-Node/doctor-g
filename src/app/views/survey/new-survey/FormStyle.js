import {styled} from "@mui/system";
import { FlexAlignCenter} from "app/components/FlexBox";
import { convertHexToRGB } from "app/utils/utils";
import {TextField} from "@mui/material";
export const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
      marginBottom: "30px",
      [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
  }));
  
  export const Form = styled("form")(() => ({
    paddingLeft: "16px",
    paddingRight: "16px",
  }));
  
  export  const StyledTextField = styled(TextField)(() => ({
    marginBottom: "16px",
  }));
  
  export const DropZone = styled(FlexAlignCenter)(({ isDragActive, theme }) => ({
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

 export const StyledInput = styled(TextField)(() => ({
    minWidth: "188px !important",
    "& label": { fontSize: "14px" },
    "& label.MuiInputLabel-shrink": { marginTop: "0px" },
    "& .MuiOutlinedInput-root": {
      "& .MuiOutlinedInput-input": {
        fontSize: "14px",
        padding: "10px 14px !important",
      },
    },
  }));