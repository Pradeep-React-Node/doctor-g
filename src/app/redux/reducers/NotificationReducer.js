import {
  GET_NOTIFICATION_LIST_BY_EMP,
  GET_NOTIFICATION,
} from '../actions/NotificationActions';

const initialState = {
  notificationList: [],
  notificationempList:[],
};

const NotificationReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_NOTIFICATION: {
      return {
        ...state,
        notificationList: [...action.payload],
      };
    }
    case GET_NOTIFICATION_LIST_BY_EMP: {
      return {
        ...state,
        notificationempList: [...action.payload],
      };
    }
    default: {
      return {
          ...state,
      };
  }
  }
};

export default NotificationReducer;
