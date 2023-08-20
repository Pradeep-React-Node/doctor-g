import { GET_QUOTATION_LIST } from "../actions/QuotationAction";


const initialState = {
    quotationList: [],
};

const QuotationReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_QUOTATION_LIST: {
            return {
                ...state,
                quotationList: [action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default QuotationReducer;
