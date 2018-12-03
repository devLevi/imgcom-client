import * as actions from '../comments/comment-actions';

const initialState = {
  loading: false,
  imageList: [],
  imageDetails: null,

  error: null
};

export default function Reducer(state = initialState, action) {
  if (
    action.type === actions.CREATE_COMMENT ||
    action.type === actions.DELETE_COMMENT
  ) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (
    action.type === actions.GET_COMMENT ||
    action.type === action.GET_COMMENTS
  ) {
    return {
      ...state,
      loading: true,
      error: null,
      imageList: [],
      imageDetails: null
    };
  } else if (
    action.type === actions.GET_COMMENTS_FAILURE ||
    action.type === actions.GET_COMMENT_FAILURE ||
    action.type === actions.CREATE_COMMENT_FAILURE ||
    action.type === actions.DELETE_COMMENT_FAILURE
  ) {
    return { ...state, loading: false, error: action.error };
  } else if (action.type === actions.GET_COMMENTS_SUCCESS) {
    return { ...state, loading: false, imageList: action.comments };
  } else if (action.type === actions.GET_COMMENT_SUCCESS) {
    return { ...state, loading: false, imageList: action.comment };
  } else if (action.type === actions.CREATE_COMMENT_SUCCESS) {
    return { ...state, loading: false, imageList: action.comment };
  } else if (action.type === actions.DELETE_COMMENT_SUCCESS) {
    return { ...state, loading: false };
  }
  return state;
}
