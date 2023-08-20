import * as yup from "yup";
export const validationSchema = yup.object().shape({
    survey_id: yup.string().required("First Name is required"),
  
    order_group: yup.string().required("First Name is required"),
    measurement_done: yup.string().required("First Name is required"),
    elevation_photos_with_comment: yup.string().required("First Name is required"),
    floor_finish_level_from_client_side: yup.string().required("First Name is required"),
    building_saul_for_projection_difference: yup.string().required("First Name is required"),
    water_level_for_every_floor: yup.string().required("First Name is required"),
    take_full_height_and_weight: yup.string().required("First Name is required"),
    check_floor_height_separately: yup.string().required("First Name is required"),
    check_beam_slab_height: yup.string().required("First Name is required"),
    take_false_celling: yup.string().required("First Name is required"),
    mail_to_all_site_condition: yup.string().required("First Name is required"),
  });