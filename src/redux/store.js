import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import commentReducer from './comment-reducer';
import authReducer from './auth-reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    comment: commentReducer
  }),
  composeWithDevTools(applyMiddleware(logger))
);
