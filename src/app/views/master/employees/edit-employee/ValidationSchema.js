import * as yup from "yup";
export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  employee_type: yup.string().required("Employee Type Required"),
  email: yup.string().email().required("Email is required"),
  phone: yup.number().required("Phone Number is required"),
  designation: yup.string().required("Designation is required"),
});