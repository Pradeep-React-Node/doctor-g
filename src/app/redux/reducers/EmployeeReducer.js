import { GET_EMPLOYEE_LIST } from "../actions/EmployeeActions";


const initialState = {
    employee: [],
};

const EmployeeReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYEE_LIST: {
            return {
                ...state,
                employee: [action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};




export default EmployeeReducer;
