
import { 
    LOGIN ,
    GET_USER_LIST,
    ADD_USER,
    UPDATE_USER
    } from '../actions/userAction';

const initialState = {
    user: [],
};

const UserReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: [...action.payload],
            };
        }
        case GET_USER_LIST: {
            return {
                ...state,
                user: [...action.payload],
            };
        }
        case ADD_USER: {
            return {
                ...state,
                user: [...action.payload],
            };
        }
        case UPDATE_USER: {
            return {
                ...state,
                user: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default UserReducer;
