import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_SAFETYEQUIPMENT_LIST = 'GET_SAFETYEQUIPMENT_LIST';
export const ADD_SAFETYEQUIPMENT= 'ADD_SAFETYEQUIPMENT';
export const DELETE_SAFETYEQUIPMENT = 'DELETE_SAFETYEQUIPMENT';
export const UPDATE_SAFETYEQUIPMENT = 'UPDATE_SAFETYEQUIPMENT';

// const config = {     
//     headers: { 'content-type': 'multipart/form-data' }
//   }

export const getSafetyequipmentList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL +'/get_safetyequipment').then((res) => {
        dispatch({
            type: GET_SAFETYEQUIPMENT_LIST,
            payload: res.data,
        });
    });
};

export const addSafetyequipment = (safetyequipment) => {
    return function (dispatch) {

        axios.post(CONSTANT.BASE_URL+ `/add_safetyequipment`, safetyequipment)

            .then((res) => {
                dispatch({
                    type: ADD_SAFETYEQUIPMENT,
                    payload: res.data,
                });
            })
            .catch((error) => console.log(error));
    }
}

// export const deleteSafetyequipment = (_id) => (dispatch) => {
//   axios.delete(CONSTANT.BASE_URL +`/delete_safetyequipment/${_id }`).then((res) => {
//     dispatch({
//       type: DELETE_SAFETYEQUIPMENT,
//       payload: res.data,
//     });
//   });
// };

export const deleteSafetyequipment = async (_id) => {
  await axios.delete(CONSTANT.BASE_URL + `/delete_safetyequipment/${_id}`)
};


export const updateSafetyequipment = (_id,safetyequipmentData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL +`/update_safetyequipment/${_id }`,safetyequipmentData).then((res) => {
    dispatch({
      type: UPDATE_SAFETYEQUIPMENT,
      payload: res.data,
    });
  });
};


