import * as actions from '../images/image-actions';

const initialState = {
  loading: false,
  imageList: [],
  imageDetails: null,

  error: null
};

export default function imageReducer(state = initialState, action) {
  if (
    action.type === actions.CREATE_IMAGE ||
    action.type === actions.DELETE_IMAGE
  ) {
    return {
      ...state,
      loading: true,
      error: null
    };
  } else if (
    action.type === actions.GET_IMAGE ||
    action.type === action.GET_IMAGES
  ) {
    return {
      ...state,
      loading: true,
      error: null,
      imageList: [],
      imageDetails: null
    };
  } else if (
    action.type === actions.GET_IMAGES_FAILURE ||
    action.type === actions.GET_IMAGE_FAILURE ||
    action.type === actions.CREATE_IMAGE_FAILURE ||
    action.type === actions.DELETE_IMAGE_FAILURE
  ) {
    return { ...state, loading: false, error: action.error };
    //REQUEST SUCCESS
  } else if (action.type === actions.GET_IMAGES_SUCCESS) {
    return { ...state, loading: false, imageList: action.images };
  } else if (action.type === actions.GET_IMAGE_SUCCESS) {
    return { ...state, loading: false, imageDetails: action.image };
  } else if (action.type === actions.CREATE_IMAGE_SUCCESS) {
    return { ...state, loading: false, imageDetails: action.image };
  } else if (action.type === actions.DELETE_IMAGE_SUCCESS) {
    return { ...state, loading: false };
  }
  return state;
}
