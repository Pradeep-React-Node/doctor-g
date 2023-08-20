import * as yup from "yup";
export const validationSchema = yup.object().shape({
  name: yup.string().required("First Name is required"),
  brand: yup.string().required("First Name is required"),
  color: yup.string().required("First Name is required"),
  size: yup.string().required("First Name is required"),
  price: yup.string().required("First Name is required"),
  delivery_time: yup.string().required("First Name is required"),
  wastage_percentage: yup.string().required("First Name is required"),
  grade: yup.string().required("First Name is required"),
  insurance: yup.string().required("First Name is required"),
  remark: yup.string().required("First Name is required"),
});