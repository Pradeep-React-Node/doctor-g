import {
    GET_ORDER_LIST,
    UPDATE_ORDER,
    GET_ORDER_LIST_BY_EMP,
    GET_ORDER_LIST_BY_ORDER_NAME,
} from '../actions/OrderAction';

const initialState = {
    orderList: [],
    workList: [],
    orderGroupList: []
};

const OrderReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_ORDER_LIST: {
            return {
                ...state,
                orderList: [...action.payload],
            };
        }
        case GET_ORDER_LIST_BY_EMP: {
            return {
                ...state,
                workList: [...action.payload],
            };
        }
        case UPDATE_ORDER: {
            return {
                ...state,
                orderList: [...action.payload],
            };
        }
        case GET_ORDER_LIST_BY_ORDER_NAME: {
            return {
                ...state,
                orderGroupList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default OrderReducer;
