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
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false
      };
    case FETCHED_PHOTOS_REQUEST:
      return { ...state, loading: true };
    case FETCHED_PHOTOS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
