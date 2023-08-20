import { GET_DRAWING_LIST, GET_DRAWING_LIST_BY_EMP,GET_Deadline_LIST } from "../actions/DrawingAction";


const initialState = {
    drawingList: [],
    empdrawingList:[],
    deaddrawingList:[],
};

const DrawingReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_DRAWING_LIST: {
            return {
                ...state,
                drawingList: [...action.payload],
            };
        }
        case GET_DRAWING_LIST_BY_EMP: {
            return {
                ...state,
                empdrawingList: [...action.payload],
            };
        }

        case GET_Deadline_LIST: {
            return {
                ...state,
                deaddrawingList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default DrawingReducer;
