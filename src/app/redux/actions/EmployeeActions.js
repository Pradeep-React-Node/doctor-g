import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_EMPLOYEE_LIST = 'GET_EMPLOYEE_LIST';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

// const config = {     
//   headers: { 'content-type': 'multipart/form-data' }
// }

export const getEmployeeList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL +'/get_employee').then((res) => {
      dispatch({
          type: GET_EMPLOYEE_LIST,
          payload: res.data,
      });
  });
};
export const addEmployee = (employee) => {
    return function (dispatch) {
        axios.post(CONSTANT.BASE_URL+ `/add_employee`, employee)
            .then((res) => {
                dispatch({
                    type: ADD_EMPLOYEE,
                    payload: res.data,
                });
            }).catch((error) => console.log(error.message));
    }
}


export const deleteEmployee = (_id) => (dispatch) => {
  axios.delete(CONSTANT.BASE_URL +`/delete_employee/${_id }`).then((res) => {
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: res.data,
    });
  });
};

export const updateEmployee = (_id,employeeData) => (dispatch) => {
  axios.patch(CONSTANT.BASE_URL +`/update_employee/${_id }`,employeeData).then((res) => {
    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: res.data,
    });
  });
};


