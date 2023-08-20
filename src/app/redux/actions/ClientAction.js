import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_CLIENT_LIST = 'GET_CLIENT_LIST';
export const ADD_CLIENT = 'ADD_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const UPDATE_CLIENT = 'UPDATE_CLIENT';

const config = {
  headers: { 'content-type': 'multipart/form-data' }
}

export const getClientList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_client').then((res) => {
    dispatch({
      type: GET_CLIENT_LIST,
      payload: res.data,
    });
  });
};

export const addClient = (client) => {
  return function (dispatch) {
    axios.post(CONSTANT.BASE_URL + `/add_client`, client)
      .then((res) => {
        dispatch({
          type: ADD_CLIENT,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
}

export const deleteClient = (_id) => (dispatch) => {
  axios.delete(CONSTANT.BASE_URL + `/delete_client/${_id}`).then((res) => {
    dispatch({
      type: DELETE_CLIENT,
      payload: res.data,
    });
  });
};
export const updateClient = (_id, clientData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL + `/update_client/${_id}`, clientData).then((res) => {
    dispatch({
      type: UPDATE_CLIENT,
      payload: res.data,
    });
  });
};


