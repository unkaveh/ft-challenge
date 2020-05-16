import { createStore, applyMiddleware } from 'redux';
import index from './index';
import thunk from 'redux-thunk';

const defaultState =  {};

const defaultStore = createStore(
  index,
  defaultState,
  applyMiddleware(thunk)
);

export default defaultStore;