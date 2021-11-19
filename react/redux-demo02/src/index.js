import { createStore } from 'redux';

// avoid hard coding
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(action.describe);
      return state + action.payload;
    case DECREMENT:
      console.log(action.describe);
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

// when state changed, store calls callback func
store.subscribe(() => {
  console.log('current state', store.getState());
});

// define dispatch(action) as object
store.dispatch({
  type: INCREMENT,
  payload: 3,
  describe: 'incr 3',
});
store.dispatch({
  type: INCREMENT,
  payload: 5,
  describe: 'incr 5',
});
store.dispatch({
  type: DECREMENT,
  payload: 7,
  describe: 'decr 7',
});
