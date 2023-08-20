import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const DELETE_ALL_NOTIFICATION = 'DELETE_ALL_NOTIFICATION';
export const GET_NOTIFICATION_LIST_BY_EMP = 'GET_NOTIFICATION_LIST_BY_EMP';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';

export const getNotification = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_notification').then((res) => {
    dispatch({
      type: GET_NOTIFICATION,
      payload: res.data,
    });
  });
};

export const getNotifcationListByEmp = (name) => (dispatch) => {
  console.log('name', name);
  axios
    .get(CONSTANT.BASE_URL + `/get_notification_by_emp_name/${name}`)
    .then((res) => {
      dispatch({
        type: GET_NOTIFICATION_LIST_BY_EMP,
        payload: res.data,
      });
    });
};

export const deleteNotification = (_id) =>{
  axios
    .delete(CONSTANT.BASE_URL + `/delete_notification/${_id}`)
};

export const deleteAllNotification = () => (dispatch) => {
  axios.post('/api/notification/delete-all').then((res) => {
    dispatch({
      type: DELETE_ALL_NOTIFICATION,
      payload: res.data,
    });
  });
};

export const updateNotification = async (id, notificationData) => {
  await axios.patch(
    CONSTANT.BASE_URL + `/update_notification/${id}`,
    notificationData
  );
};

// export const createNotification = (notification) => (dispatch) => {
//   axios.post('/api/notification/add', { notification }).then((res) => {
//     dispatch({
//       type: CREATE_NOTIFICATION,
//       payload: res.data,
//     });
//   });
// };

export const createNotification = (order) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_notification`, order)
      .then((res) => {
        dispatch({
          type: CREATE_NOTIFICATION,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};