import { createStore } from 'redux';
import rootReducer from '../reducers';

const preloadedState = {};

const store = createStore(
  rootReducer,
  preloadedState
);

export default store;
