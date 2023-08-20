import axios from 'axios';
import * as CONSTANT from '../../config';

export const ADD_IMAGE = 'ADD_IMAGE';

export const addImage = (uploadimages) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_image`, uploadimages)
      .then((res) => {
        dispatch({
          type: ADD_IMAGE,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};
export const addEvolutionImage = (uploadimages) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_elevation_image`, uploadimages)
      .then((res) => {
        dispatch({
          type: ADD_IMAGE,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};
