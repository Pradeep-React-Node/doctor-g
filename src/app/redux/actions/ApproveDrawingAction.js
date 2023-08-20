import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_APPROVEDRAWING_LIST = 'GET_APPROVEDRAWING_LIST';
export const ADD_APPROVEDRAWING = 'ADD_APPROVEDRAWING';
export const DELETE_APPROVEDRAWING = 'DELETE_APPROVEDRAWING';
export const UPDATE_APPROVEDRAWING = 'UPDATE_APPROVEDRAWING';

// const config = {     
//   headers: { 'content-type': 'multipart/form-data' }
// }

export const getApproveDrawingList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_approve_drawing').then((res) => {
    dispatch({
      type: GET_APPROVEDRAWING_LIST,
      payload: res.data,
    });
  });
};

export const addApproveDrawing = (approvedrawing) => {
  return function (dispatch) {
    axios.post(CONSTANT.BASE_URL + `/add_approve_drawing`, approvedrawing)
      .then((res) => {
        dispatch({
          type: ADD_APPROVEDRAWING,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
}

export const deleteApproveDrawing = (id) => (dispatch) => {
  axios.delete(CONSTANT.BASE_URL + `/delete_approve_drawing/${id}`).then((res) => {
    dispatch({
      type: DELETE_APPROVEDRAWING,
      payload: res.data,
    });
  });
};

export const updateApproveDrawing = (_id, appDrawing) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL + `/update_approve_drawing/${_id}`, appDrawing).then((res) => {
    dispatch({
      type: UPDATE_APPROVEDRAWING,
      payload: res.data,
    });
  });
};


