import { GET_GLASSACPHPLFIXING_LIST,GET_GLASSACPHPLFIXING_BY_EMP } from "../actions/GlassAcpHplFixingAction";


const initialState = {
    glassacphplfixingList: [],
    empglassacphplfixingList: [],
};

const GlassAcpHplFixingReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_GLASSACPHPLFIXING_LIST: {
            return {
                ...state,
                glassacphplfixingList: [...action.payload],
            };
        }

        case GET_GLASSACPHPLFIXING_BY_EMP: {
            return {
                ...state,
                empglassacphplfixingList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default GlassAcpHplFixingReducer;
