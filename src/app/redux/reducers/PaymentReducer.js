import { GET_PAYMENT_LIST } from "../actions/PaymentAction";


const initialState = {
    paymentList: [],
};

const PaymentReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PAYMENT_LIST: {
            return {
                ...state,
                paymentList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default PaymentReducer;
