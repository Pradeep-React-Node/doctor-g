import { GET_SURVEY_LIST, GET_SURVEY_LIST_BY_EMP } from "../actions/SurveyAction";


const initialState = {
    surveyList: [],
    empsurveyList: [],
};

const SurveyReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_SURVEY_LIST: {
            return {
                ...state,
                surveyList: [...action.payload],
            };
        }

        case GET_SURVEY_LIST_BY_EMP: {
            return {
                ...state,
                empsurveyList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default SurveyReducer;
