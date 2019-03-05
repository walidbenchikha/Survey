import { createStore } from 'redux';
import reducer from './reducers/index';

function configureStore(history) {
  return createStore(reducer, {});
}

export default configureStore;
