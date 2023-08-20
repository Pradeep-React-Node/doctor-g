import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_DRAWING_LIST = 'GET_DRAWING_LIST';
export const ADD_DRAWING = 'ADD_DRAWING';
export const DELETE_DRAWING = 'DELETE_DRAWING';
export const UPDATE_DRAWING = 'UPDATE_DRAWING';
export const GET_DRAWING_LIST_BY_EMP = 'GET_DRAWING_LIST_BY_EMP';
export const GET_Deadline_LIST = 'GET_Deadline_LIST';

export const getDrawingList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL +'/get_drawing').then((res) => {
      dispatch({
          type: GET_DRAWING_LIST,
          payload: res.data,
      });
  });
};

export const getDeadlineList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL +'/get_deadline').then((res) => {
      dispatch({
          type: GET_Deadline_LIST,
          payload: res.data,
      });
  });
};

export const addDrawing = (drawing) => {
  return function (dispatch) {
    axios.post(CONSTANT.BASE_URL + `/add_drawing`, drawing)
      .then((res) => {
        dispatch({
          type: ADD_DRAWING,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
}


export const deleteDrawing = async (_id) => {
  await axios.delete(CONSTANT.BASE_URL + `/delete_drawing/${_id}`)
};

export const updateDrawing = (_id, drawingData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL + `/update_drawing/${_id}`, drawingData).then((res) => {
    dispatch({
      type: UPDATE_DRAWING,
      payload: res.data,
    });
  });
};

export const getDrawingListByEmp = (name) => (dispatch) => {
  console.log("name", name);
  axios.get(CONSTANT.BASE_URL + `/get_drawing_by_emp_id/${name}`).then((res) => {
    dispatch({
      type: GET_DRAWING_LIST_BY_EMP,
      payload: res.data,
    });
  });
};


