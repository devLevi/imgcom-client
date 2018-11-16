import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth-reducer';
import imageReducer from './image-reducer';

export default createStore(
  combineReducers({
    image: imageReducer,
    form: formReducer,
    auth: authReducer
  }),
  composeWithDevTools(applyMiddleware(logger, thunk))
);
