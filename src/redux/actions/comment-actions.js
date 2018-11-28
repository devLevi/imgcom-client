const API = 'https://jsonplaceholder.typicode.com';

export const GET_COMMENTS = 'GET_COMMENTS';
const getCommentsAction = () => ({
  type: GET_COMMENTS
});
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const getCommentsSuccessAction = comments => ({
  type: GET_COMMENTS_SUCCESS,
  comments
});
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';
const getCommentsFailureAction = error => ({
  type: GET_COMMENTS_FAILURE,
  error
});

export const getComments = () => dispatch => {
  dispatch(getCommentsAction());
  fetch(`${API}/users/1/comments`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(images => {
      dispatch(getCommentsSuccessAction(images));
    })
    .catch(err => {
      dispatch(getCommentsFailureAction(err));
    });
};

export const GET_COMMENT = 'GET_COMMENT';
const getCommentAction = () => ({
  type: GET_COMMENT
});
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
const getCommentSuccessAction = comment => ({
  type: GET_COMMENT_SUCCESS,
  comment
});
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE';
const getCommentFailureAction = error => ({
  type: GET_COMMENT_FAILURE,
  error
});

export const getComment = commentId => dispatch => {
  dispatch(getCommentAction());
  return fetch(`${API}/comments/${commentId}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(comment => {
      dispatch(getCommentSuccessAction(comment));
    })
    .catch(err => {
      console.error(err);
      dispatch(getCommentFailureAction(err));
    });
};

export const CREATE_COMMENT = 'CREATE_COMMENT';
const createCommentAction = comment => ({
  type: CREATE_COMMENT,
  comment
});
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
const createCommentSuccessAction = () => ({
  type: CREATE_COMMENT_SUCCESS
});
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
const createCommentFailureAction = error => ({
  type: CREATE_COMMENT_FAILURE,
  error
});
export const createComment = comment => dispatch => {
  dispatch(createCommentAction(comment));
  return fetch(`${API}/comments/`, {
    method: 'POST',
    body: JSON.stringify(comment),
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
      dispatch(createCommentSuccessAction());
      dispatch(getComments());
    })
    .catch(err => {
      console.error(err);
      dispatch(createCommentFailureAction(err));
    });
};

export const DELETE_COMMENT = 'DELETE_COMMENT';
const deleteCommentAction = commentId => ({
  type: DELETE_COMMENT,
  commentId
});
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const deleteCommentSuccessAction = () => ({
  type: DELETE_COMMENT_SUCCESS
});
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
const deleteCommentFailureAction = error => ({
  type: DELETE_COMMENT_FAILURE,
  error
});

export const deleteComment = commentId => dispatch => {
  dispatch(deleteCommentAction());
  return fetch(`${API}/comments/${commentId}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(deleteCommentSuccessAction());
      dispatch(getComment());
    })
    .catch(err => {
      console.error(err);
      dispatch(deleteCommentFailureAction(err));
    });
};
