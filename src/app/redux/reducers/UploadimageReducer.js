import { ADD_IMAGE,} from "../actions/UploadImages";


const initialState = {
};

const UploadImageReducer = function (state = initialState, action) {
    switch (action.type) {
        
        default: {
            return {
                ...state,
            };
        }
    }
};

export default UploadImageReducer;
