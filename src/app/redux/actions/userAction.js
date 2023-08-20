import axios from 'axios';
import * as CONSTANT from '../../config';
export const LOGIN = 'LOGIN';
export const GET_USER_LIST = 'GET_USER_LIST';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const userLogin = (data) => {

    return dispatch => {
        axios({
            method: 'POST',
            url: CONSTANT.BASE_URL + "/user/login",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: data
        }).then((response) => {
            localStorage.setItem('user_info', JSON.stringify(response.data))
            // localStorage.setItem('token',  response.data.data.token)
            dispatch({
                type: LOGIN,
                payload: response.data,
            });
        }).catch((error) => {
            console.log("error", error);
        })
    }
}


export const getUserList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL + '/user/get_users').then((res) => {
        dispatch({
            type: GET_USER_LIST,
            payload: res.data.user,
        });
    });
};

export const updateUser = (_id, userData) => (dispatch) => {
    axios.patch(CONSTANT.BASE_URL + `/update_user/${_id}`, userData).then((res) => {
        dispatch({
            type: UPDATE_USER,
            payload: res.data,
        });
    });
};

export const deleteUser = async (_id)=> {
await axios.delete(CONSTANT.BASE_URL +`/delete_user/${_id }`)
};

export const addUser = async (user) => {
    await axios.post(CONSTANT.BASE_URL + `/user/adduser`, user)
 }