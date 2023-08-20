import axios from "axios";
import * as CONSTANT from "../../config";
export const GET_GLASSACPHPLFIXING_LIST = "GET_GLASSACPHPLFIXING_LIST";
export const ADD_GLASSACPHPLFIXING = "ADD_GLASSACPHPLFIXING";
export const DELETE_GLASSACPHPLFIXING = "DELETE_GLASSACPHPLFIXING";
export const UPDATE_GLASSACPHPLFIXING = "UPDATE_GLASSACPHPLFIXING";
export const GET_GLASSACPHPLFIXING_BY_EMP = "GET_GLASSACPHPLFIXING_BY_EMP";

export const getGlassacphplfixingList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + "/get_glassacphplfixing").then((res) => {
    dispatch({
      type: GET_GLASSACPHPLFIXING_LIST,
      payload: res.data,
    });
  });
};

export const addGlassacphplfixing = (glassacphplfixing) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_glassacphplfixing`, glassacphplfixing)
      .then((res) => {
        dispatch({
          type: ADD_GLASSACPHPLFIXING,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteGlassacphplfixing = async (_id) => {
  await axios.delete(CONSTANT.BASE_URL + `/delete_glassacphplfixing/${_id}`);
};

export const updateGlassacphplfixing =
  (_id, glassacphplfixingData) => (dispatch) => {
    axios
      .patch(
        CONSTANT.BASE_URL + `/update_glassacphplfixing/${_id}`,
        glassacphplfixingData
      )
      .then((res) => {
        dispatch({
          type: UPDATE_GLASSACPHPLFIXING,
          payload: res.data,
        });
      });
  };

export const getGlassacphplfixingemp = (name) => (dispatch) => {
  console.log("name", name);
  axios
    .get(CONSTANT.BASE_URL + `/get_glassacphplfixing_by_emp_id/${name}`)
    .then((res) => {
      dispatch({
        type: GET_GLASSACPHPLFIXING_BY_EMP,
        payload: res.data,
      });
    });
};
