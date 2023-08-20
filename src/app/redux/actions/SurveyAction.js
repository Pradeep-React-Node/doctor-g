import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_SURVEY_LIST = 'GET_SURVEy_LIST';
export const ADD_SURVEY = 'ADD_SURVEY';
export const ADD_SURVEY_IMAGE = 'ADD_SURVEY_IMAGE';
export const DELETE_SURVEY = 'DELETE_SURVEY';
export const UPDATE_SURVEY = 'UPDATE_SURVEY';
export const GET_SURVEY_LIST_BY_EMP = 'GET_SURVEY_LIST_BY_EMP';

// const config = {
//   headers: { 'content-type': 'multipart/form-data' }
// }

export const getSurveyList = () => (dispatch) => {
  axios.get(CONSTANT.BASE_URL + '/get_rooms').then((response) => {
    dispatch({
      type: GET_SURVEY_LIST,
      payload: response.data,
    });
    console.log(response.data);
  });
};

export const addSurvey = (survey) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_room`, survey)
      .then((res) => {
        dispatch({
          type: ADD_SURVEY,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const addSurveyImage = (survey) => {
  return function (dispatch) {
    axios
      .post(CONSTANT.BASE_URL + `/add_site_survey_image`, survey)
      .then((res) => {
        dispatch({
          type: ADD_SURVEY_IMAGE,
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteSurvey = async (id) => {
  await axios.delete(CONSTANT.BASE_URL + `/delete_room/${id}`);
};

export const getSurveyListByEmp = (name) => (dispatch) => {
  console.log('name', name);
  axios.get(CONSTANT.BASE_URL + `/get_room_by_id/${name}`).then((res) => {
    dispatch({
      type: GET_SURVEY_LIST_BY_EMP,
      payload: res.data,
    });
  });
};

export const updateSurvey = (_id, surveyData) => (dispatch) => {
  axios
    .patch(CONSTANT.BASE_URL + `/update_room/${_id}`, surveyData)
    .then((res) => {
      dispatch({
        type: UPDATE_SURVEY,
        payload: res.data,
      });
    });
};
