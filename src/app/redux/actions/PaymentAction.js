import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_PAYMENT_LIST = 'GET_PAYMENT_LIST';
export const ADD_PAYMENT = 'ADD_PAYMENT';
export const DELETE_PAYMENT = 'DELETE_PAYMENT';
export const UPDATE_PAYMENT = 'UPDATE_PAYMENT';

// const config = {     
//   headers: { 'content-type': 'multipart/form-data' }
// }

export const getPaymnetList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL +'/get_payment').then((res) => {
        dispatch({
            type: GET_PAYMENT_LIST,
            payload: res.data,
        });
    });
};

export const addPaymnet = (paymnet) => {
    return function (dispatch) {
        axios.post(CONSTANT.BASE_URL+`/add_payment`, paymnet,)
            .then((res) => {
                dispatch({
                    type: ADD_PAYMENT,
                    payload: res.data,
                });
            })
            .catch((error) => console.log(error));
    }
}


export const deletePayment = (id) => (dispatch) => {
  axios.delete(CONSTANT.BASE_URL +`/delete_payment/${id}`).then((res) => {
    dispatch({
      type: DELETE_PAYMENT,
      payload: res.data,
    });
  });
};

export const updatePayment = (_id,paymnetData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL +`/update_payment/${_id }`,paymnetData).then((res) => {
    dispatch({
      type: UPDATE_PAYMENT,
      payload: res.data,
    });
  });
};


