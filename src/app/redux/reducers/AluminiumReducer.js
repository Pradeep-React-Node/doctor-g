import {
    GET_ALUMINIUM_LIST,
    GET_ALUMINIUM_LIST_BY_EMP,
} from '../actions/AluminiumAction';

const initialState = {
    aluminiumList: [],
    empAlunimiunList: [],
};
  
const AluminiumReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_ALUMINIUM_LIST: {
            return {
                ...state,
                aluminiumList: [...action.payload],
            };
        }
        case GET_ALUMINIUM_LIST_BY_EMP: {
            return {
                ...state,
                empAlunimiunList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default AluminiumReducer;
