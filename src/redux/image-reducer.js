import * as actions from './actions';

const initialState = {
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
  }
};

export default function imageReducer(state = initialState, action) {
  if (action.type === actions.ADD_COMMENT) {
    return Object.assign({}, state, {
      imageList: [...state.imageList, {}]
    });
  }

  return state;
}
