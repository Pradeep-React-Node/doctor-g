import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_ALUMINIUM_LIST = 'GET_ALUMINIUM_LIST';
export const ADD_ALUMINIUM = 'ADD_ALUMINIUM';
export const DELETE_ALUMINIUM = 'DELETE_ALUMINIUM';
export const UPDATE_ALUMINIUM = 'UPDATE_ALUMINIUM';
export const GET_ALUMINIUM_LIST_BY_EMP = 'GET_ALUMINIUM_LIST_BY_EMP';

export const addAluminium = (aluminium) => {
  return function (dispatch) {
    axios.post(CONSTANT.BASE_URL + `/add_aluminium`, aluminium)
      .then((res) => {
        dispatch({
          type: ADD_ALUMINIUM,
          payload: res.data,
        });
      }).catch((error) => console.log(error));
  }
}

export const getAluminiumList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_aluminium').then((res) => {
    dispatch({
      type: GET_ALUMINIUM_LIST,
      payload: res.data,
    });
  });
};

export const getaluminiumListByEmp = (name) => (dispatch) => {
  console.log("name", name);
  axios.get(CONSTANT.BASE_URL + `/get_aluminium_by_emp_id/${name}`).then((res) => {
    dispatch({
      type: GET_ALUMINIUM_LIST_BY_EMP,
      payload: res.data,
    });
  });
};

export const updateAluminium = (_id, aluminiumData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL + `/update_aluminium/${_id}`, aluminiumData).then((res) => {
    dispatch({
      type: UPDATE_ALUMINIUM,
      payload: res.data,
    });
  });
};

export const deleteAluminium = async (_id) => {
  await axios.delete(CONSTANT.BASE_URL + `/delete_Aluminium/${_id}`)
};






