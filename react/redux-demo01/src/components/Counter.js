// import
import { Provider, useSelector, useDispatch } from 'react-redux';
import { createStore } from 'redux';

/**
 * initialize state, define actions(eventHandlers)
 * @param {any} state 
 * @param {function} action 
 * @returns state
 */
const rootReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'COUNT_UP':
      return { ...state, count: state.count + 1 }
    case 'COUNT_DOWN':
      return { ...state, count: state.count - 1 }
    case 'SET_COUNT':
      return { ...state, count: action.value }
    default:
      return state
  }
}

// create store with reducer
const store = createStore(rootReducer)

// view
function Counter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  // bind action.type with eventHandler
  const countUp = { type: 'COUNT_UP' }
  const countDown = { type: 'COUNT_DOWN' }
  const resetCount = { type: 'SET_COUNT', value: 0 }

  return (
    <div>
      <h1>Redux demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(countUp)}>count up</button>
      <button onClick={() => dispatch(countDown)}>count down</button>
      <button onClick={() => dispatch(resetCount)}>reset</button>
    </div>
  )
}

export default function WrapCounter() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
};
