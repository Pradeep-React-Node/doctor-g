import { ADD_CLIENT, GET_CLIENT_LIST, UPDATE_CLIENT } from "../actions/ClientAction";


const initialState = {
    clientList: [],
};

const ClientReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT_LIST: {
            return {
                ...state,
                clientList: [...action.payload],
            };
        }
        case ADD_CLIENT: {
            return {
                ...state,
                clientList: [...action.payload],
            };
        }
        case UPDATE_CLIENT: {
            return {
                ...state,
                clientList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default ClientReducer;
