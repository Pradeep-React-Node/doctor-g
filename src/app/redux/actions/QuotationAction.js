import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_QUOTATION_LIST = 'GET_QUOTATION_LIST';
export const ADD_QUOTATION = 'ADD_QUOTATION';
export const DELETE_QUOTATION = 'DELETE_QUOTATION';
export const UPDATE_QUOTATION = 'UPDATE_QUOTATION';



export const getQuotationList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_quotation').then((res) => {
    dispatch({
      type: GET_QUOTATION_LIST,
      payload: res.data,
    });
  });
};

export const addQuotation = (quotation) => {
  return function (dispatch) {
    axios.post(CONSTANT.BASE_URL + `/add_quotation`, quotation)
      .then((res) => {
        dispatch({
          type: ADD_QUOTATION,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
}

export const deleteQuotation = (_id) => (dispatch) => {
  axios.delete(CONSTANT.BASE_URL + `/delete_quotation/${_id}`).then((res) => {
    dispatch({
      type: DELETE_QUOTATION,
      payload: res.data,
    });
  });
};

export const updateQuotation = (_id, quotationData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL + `/update_quotation/${_id}`, quotationData).then((res) => {
    dispatch({
      type: UPDATE_QUOTATION,
      payload: res.data,
    });
  });
};


