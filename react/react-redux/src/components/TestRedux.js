import React from "react";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

// be constant
const ADD = 'ADD';

/**
 * actionCreator
 * @param {string} type 
 * @param {any} message 
 * @returns 
 */
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

/**
 * reducer
 * @param {any} state 
 * @param {object} action 
 * @returns 
 */
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        // create shallow copy then push()
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

// store
const store = createStore(messageReducer);

// React Class Component
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    
    // Remove property 'messages' from Presentational's local state
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
  
    // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
    // meanwhile, remove the 'messages' property from the object returned by this.setState().
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
           {/* The messages state is mapped to Presentational's props; therefore, when rendering,
               you should access the messages state through props, instead of Presentational's
               local state. */}
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// map Redux state and dispatch to React props
const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      // dispatch(action)
      dispatch(addMessage(message))
    }
  }
};

// connect Redux with React
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


