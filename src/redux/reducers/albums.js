import {
  FETCHED_ALBUMS_REQUEST,
  FETCHED_ALBUMS_SUCCESS,
  FETCHED_ALBUMS_ERROR
} from "../actions/actionTypes";

const defaultState = {
  loading: false,
  error: null,
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCHED_ALBUMS_REQUEST:
      return {
        ...defaultState,
        loading: true
      };
    case FETCHED_ALBUMS_SUCCESS:
      return {
        loading: false,
        data: action.payload
      };
    case FETCHED_ALBUMS_ERROR:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};
