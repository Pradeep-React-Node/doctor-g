import axios from 'axios';
import * as CONSTANT from '../../config';


export const ADD_IMAGE2 = 'ADD_IMAGE2';


export const addImage2 = (uploadimages2) => {
    return function (dispatch) {
        axios.post(CONSTANT.BASE_URL+`/add_image2`, uploadimages2)
            .then((res) => {
                dispatch({
                    type: ADD_IMAGE2,
                    payload: res.data,
                });
            })
            .catch((error) => console.log(error));
    }
  }




