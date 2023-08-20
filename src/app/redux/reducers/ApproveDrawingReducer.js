import { GET_APPROVEDRAWING_LIST } from "../actions/ApproveDrawingAction";


const initialState = {
    approveDrawingList: [],
};

const ApproveDrawingReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_APPROVEDRAWING_LIST: {
            return {
                ...state,
                approveDrawingList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default ApproveDrawingReducer;
