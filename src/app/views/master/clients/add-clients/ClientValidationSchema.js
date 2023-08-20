import * as yup from "yup";
export const validationSchema = yup.object().shape({
    // id: yup.string().required("Id is required"),
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    phone: yup.number().required("Phone is required"),
    group_name: yup.string().required("Group Name is required"),
  });