import {
  FETCHED_PHOTOS_REQUEST,
  FETCHED_PHOTOS_ERROR,
  FETCHED_PHOTOS_SUCCESS
} from "../actions/actionTypes";

const defaultState = {
  loading: false,
  error: null,
  data: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCHED_PHOTOS_SUCCESS:
      return { ...defaultState, data: action.payload };
    case FETCHED_PHOTOS_REQUEST:
      return { ...defaultState, loading: true };
    case FETCHED_PHOTOS_ERROR:
      return { ...defaultState, error: action.payload };
    default:
      return state;
  }
};
