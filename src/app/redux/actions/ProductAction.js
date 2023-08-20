import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_PRODUCT_LIST = 'GET_ORDER_LIST';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_ORDER';

const config = {
  headers: { 'content-type': 'multipart/form-data' }
}

export const getProductList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_product').then((res) => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data,
    });
  });
};

export const addProduct = (product) => {
  return function (dispatch) {
    axios.post(CONSTANT.BASE_URL + `/add_product`, product, config)
      .then((res) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
}

export const deleteProduct = (_id) => (dispatch) => {
  axios.delete(CONSTANT.BASE_URL + `/delete_product/${_id}`).then((res) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
  });
};

export const updateProduct = (_id,productData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL +`/update_product/${_id }`,productData).then((res) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
  });
};


