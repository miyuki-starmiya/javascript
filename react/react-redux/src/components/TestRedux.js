import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

/**
 * create Redux Component
 * it contains [actionCreator, Reducer, Store]
 */

// naming
const ADD = 'ADD';

// actionCreator which is object
const addMessage = (message) => {
  return ({
    type: ADD,
    message: message,
  })
}

// reducer = (state = 'initialState', action)
const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    // default return
    default:
      return state;
  }
}

// store
const store = createStore(rootReducer);


/**
 * React Component
 * it contains [eventHandler, View]
 */
class MessageInputShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      input: '',
    };
  }
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  handleClick() {
    this.setState({input: ''})
    this.props.onSubmitMessage(this.state.input);
  }
  render() {
    return (
      <div>
        <h1>Test Page</h1>
        <h3>send to new Message, please</h3>
        <input type="text" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleClick}></input>
        <ul>
          {this.props.messages.map((e, i) => {
            return <li key={i}>{e}</li>
          })}
        </ul>
      </div>
    )
  }
}

// send messages, dispatch as props
const mapStateToProps = (state) => {
  return {messages: state}
}
const mapDispatchToProps = (dispatch) => {
  return {
    // declare eventHandler and call action by dispatch
    onSubmitMessage: (message) => {
      dispatch(addMessage(message));
    }
  };
}

// send props to React
const Container = connect(mapStateToProps, mapDispatchToProps)(MessageInputShow)

// bond React
export default function AppWrapper() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
