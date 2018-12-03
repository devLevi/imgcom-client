import { IMAGE_LIST, IMAGE_DETAILS } from './image-fake-data';

const API = 'https://jsonplaceholder.typicode.com';

export const GET_IMAGES = 'GET_IMAGES';
const getImagesAction = () => ({
  type: GET_IMAGES
});
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
const getImagesSuccessAction = images => ({
  type: GET_IMAGES_SUCCESS,
  images
});
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';
const getImagesFailureAction = error => ({
  type: GET_IMAGES_FAILURE,
  error
});
export const getImages = payload => dispatch => {
  dispatch(getImagesAction());
  fetch(`${API}/photos`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(images => {
      //TODO: Remove once server side is complete
      dispatch(getImagesSuccessAction(IMAGE_LIST));
    })
    .catch(err => {
      dispatch(getImagesFailureAction(err));
    });
};

export const GET_IMAGE = 'GET_IMAGE';
const getImageAction = () => ({
  type: GET_IMAGE
});
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
const getImageSuccessAction = image => ({
  type: GET_IMAGE_SUCCESS,
  image
});
export const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE';
const getImageFailureAction = error => ({
  type: GET_IMAGE_FAILURE,
  error
});

export const getImage = payload => dispatch => {
  dispatch(getImageAction());
  return fetch(`${API}/photos/1`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(image => {
      //TODO: Reomve once server is complete
      dispatch(getImageSuccessAction(IMAGE_DETAILS));
    })
    .catch(err => {
      console.error(err);
      dispatch(getImageFailureAction(err));
    });
};

export const CREATE_IMAGE = 'CREATE_IMAGE';
const createImageAction = image => ({
  type: CREATE_IMAGE,
  image
});
export const CREATE_IMAGE_SUCCESS = 'CREATE_IMAGE_SUCCESS';
const createImageSuccessAction = () => ({
  type: CREATE_IMAGE_SUCCESS
});
export const CREATE_IMAGE_FAILURE = 'CREATE_IMAGE_FAILURE';
const createImageFailureAction = error => ({
  type: CREATE_IMAGE_FAILURE,
  error
});
export const createImage = payload => dispatch => {
  const { image, jwt } = payload;
  dispatch(createImageAction(image));
  return fetch(`${API}/photos/`, {
    method: 'POST',
    body: JSON.stringify(image),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(image => {
      dispatch(createImageSuccessAction());
      return image;
    })
    .catch(err => {
      console.error(err);
      dispatch(createImageFailureAction(err));
    });
};

export const DELETE_IMAGE = 'DELETE_IMAGE';
const deleteImageAction = imageId => ({
  type: DELETE_IMAGE,
  imageId
});
export const DELETE_IMAGE_SUCCESS = 'DELETE_IMAGE_SUCCESS';
const deleteImageSuccessAction = imageId => ({
  type: DELETE_IMAGE_SUCCESS,
  imageId
});
export const DELETE_IMAGE_FAILURE = 'DELETE_IMAGE_FAILURE';
const deleteImageFailureAction = error => ({
  type: DELETE_IMAGE_FAILURE,
  error
});

export const deleteImage = payload => dispatch => {
  const { imageId, jwt } = payload;
  dispatch(deleteImageAction());
  return fetch(`${API}/photos/${imageId}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(deleteImageSuccessAction());
      dispatch(getImages());
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteImageFailureAction(err));
    });
};
