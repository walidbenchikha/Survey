import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

function configureStore(history) {
  return createStore(reducer, {}, applyMiddleware(...[thunk, logger()]));
}

export default configureStore;
