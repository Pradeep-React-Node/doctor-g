import * as yup from "yup";
export const validationSchema = yup.object().shape({
  doctor_name: yup.string().required("Doctor Name is required"),
  doctor_department: yup.string().required("Department Name is required"),
});