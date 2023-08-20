import { GET_PRODUCT_LIST } from "../actions/ProductAction";


const initialState = {
    productList: [],
};

const ProductReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST: {
            return {
                ...state,
                productList: [...action.payload],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default ProductReducer;
