import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  GET_IMAGE,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILURE,
  CREATE_IMAGE,
  CREATE_IMAGE_SUCCESS,
  CREATE_IMAGE_FAILURE,
  DELETE_IMAGE,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE
} from './actions/image-actions';

const initialState = {
  loading: false,
  filter: 'all',
  imageList: [
    {
      id: 1234,
      url: 'https://picsum.photos/700/550',
      user: {
        username: 'devLevi',
        email: 'levichristianbernard@gmail.com'
      },
      comments: [
        { id: 123, comment: 123, username: 'devLevi' },
        { id: 456, comment: 456, username: 'sgarcia' },
        { id: 789, comment: 789, username: 'vader-father' }
      ]
    },
    {
      id: 1234,
      url: 'https://picsum.photos/700/570',
      user: {
        username: 'devLevi',
        email: 'levichristianbernard@gmail.com'
      },
      comments: [
        { id: 123, comment: 123, username: 'devLevi' },
        { id: 456, comment: 456, username: 'sgarcia' },
        { id: 789, comment: 789, username: 'vader-father' }
      ]
    },
    {
      id: 1234,
      url: 'https://picsum.photos/700/560',
      user: {
        username: 'devLevi',
        email: 'levichristianbernard@gmail.com'
      },
      comments: [
        { id: 123, comment: 123, username: 'devLevi' },
        { id: 456, comment: 456, username: 'sgarcia' },
        { id: 789, comment: 789, username: 'vader-father' }
      ]
    }
  ],
  imageDetails: {
    id: 1234,
    url: 'https://picsum.photos/700/600',
    user: {
      username: 'devLevi',
      email: 'levichristianbernard@gmail.com'
    },
    comments: [
      {
        id: 123,
        content: 'comment placeholder',
        username: 'username placeholder'
      },
      {
        id: 456,
        content: 'comment placeholder',
        username: 'username placeholder'
      },
      {
        id: 789,
        content:
          'comment placeholdercomment placeholdercomment placeholdercomment placeholdercomment placeholdercomment placeholder',
        username: 'username placeholder'
      }
    ]
  },
  error: null
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return Object.assign({ ...state, loading: true, error: null });
    case GET_IMAGES_SUCCESS:
      return Object.assign({
        ...state,
        loading: false,
        imageList: action.images
      });
    case GET_IMAGES_FAILURE:
      return Object.assign({ ...state, loading: false, error: action.error });
    case GET_IMAGE:
      return Object.assign({ ...state, loading: true, error: null });
    case GET_IMAGE_SUCCESS:
      return Object.assign({
        ...state,
        loading: false,
        imageList: action.image
      });
    case GET_IMAGE_FAILURE:
      return Object.assign({ ...state, loading: false, error: action.error });
    case CREATE_IMAGE:
      return Object.assign({ ...state, loading: true, error: null });
    case CREATE_IMAGE_SUCCESS:
      return Object.assign({
        ...state,
        loading: false,
        imageList: action.image
      });
    case CREATE_IMAGE_FAILURE:
      return Object.assign({ ...state, loading: false, error: action.error });
    case DELETE_IMAGE:
      return Object.assign({ ...state, loading: true, error: null });
    case DELETE_IMAGE_SUCCESS:
      return Object.assign({ ...state, loading: false });
    case DELETE_IMAGE_FAILURE:
      return Object.assign({ ...state, loading: false, error: action.error });
    default:
      return state;
  }
}
