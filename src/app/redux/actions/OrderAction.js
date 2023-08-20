import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_ORDER_LIST = 'GET_ORDER_LIST';
export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const GET_ORDER_LIST_BY_EMP = 'GET_ORDER_LIST_BY_EMP';
export const GET_ORDER_LIST_BY_Order = 'GET_ORDER_LIST_BY_Order';
export const GET_ORDER_LIST_BY_ORDER_NAME = 'GET_ORDER_LIST_BY_ORDER_NAME';

export const addOrder = (order) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_order`, order)
      .then((res) => {
        dispatch({
          type: ADD_ORDER,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const getOrderList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_order').then((res) => {
    dispatch({
      type: GET_ORDER_LIST,
      payload: res.data,
    });
  });
};

export const getOrderListByEmp = (name) => (dispatch) => {
  console.log('name', name);
  axios.get(CONSTANT.BASE_URL + `/get_order_by_emp_id/${name}`).then((res) => {
    dispatch({
      type: GET_ORDER_LIST_BY_EMP,
      payload: res.data,
    });
  });
};

export const getOrderListByOrderName = (ordername) => (dispatch) => {
  console.log('Oder Name', ordername);
  axios
    .get(CONSTANT.BASE_URL + `/get_order_by_order_name/${ordername}`)
    .then((res) => {
      dispatch({
        type: GET_ORDER_LIST_BY_ORDER_NAME,
        payload: res.data,
      });
    });
};

export const deleteOrder = async (_id) => {
  await axios.delete(CONSTANT.BASE_URL + `/delete_order/${_id}`);
};

export const updateOrder = (_id, orderData) => (dispatch) => {
  axios
    .patch(CONSTANT.BASE_URL + `/update_order/${_id}`, orderData)
    .then((res) => {
      dispatch({
        type: UPDATE_ORDER,
        payload: res.data,
      });
    });
};
