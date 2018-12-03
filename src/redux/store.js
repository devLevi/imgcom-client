import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth-reducer';
import imageReducer from './image-reducer';
import { loadAuthData } from '../auth/local-storage';
import { setAuthData } from '../auth/auth-actions';

const STORE = createStore(
  combineReducers({
    image: imageReducer,
    form: formReducer,
    auth: authReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

const authData = loadAuthData();
if (authData) {
  STORE.dispatch(setAuthData(authData));
}

export default STORE;
