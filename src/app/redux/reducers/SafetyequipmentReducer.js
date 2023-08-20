import { GET_SAFETYEQUIPMENT_LIST } from "../actions/SafetyequipmentAction";


const initialState = {
    safetyequipmentList: [],
};

const SafetyequipmentReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_SAFETYEQUIPMENT_LIST: {
            return {
                ...state,
                safetyequipmentList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default SafetyequipmentReducer;
