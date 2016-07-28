'use strict';
import rootReducer from '../reducers/login';

import { persistState } from 'redux-devtools';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../devtools';

const configureStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);
const store = configureStore(rootReducer);

export default store;

