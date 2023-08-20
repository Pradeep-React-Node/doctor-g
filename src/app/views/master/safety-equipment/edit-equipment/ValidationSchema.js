import * as yup from "yup";
export const validationSchema = yup.object().shape({
    id: yup.string().required("First Name is required"),
    name: yup.string().required("First Name is required"),
  });