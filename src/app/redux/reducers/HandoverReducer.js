import { GET_HANDOVER_LIST, GET_HANDOVER_LIST_BY_EMP } from "../actions/HandoverAction";


const initialState = {
    handoverList: [],
    empHandoverList:[],
};

const HandoverReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_HANDOVER_LIST: {
            return {
                ...state,
                handoverList: [...action.payload],
            };
        }
        // case ADD_HANDOVER: {
        //     return {
        //         ...state,
        //         handoverList: [...action.payload],
        //     };
        // }

        case GET_HANDOVER_LIST_BY_EMP: {
            return {
                ...state,
                empHandoverList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default HandoverReducer;
