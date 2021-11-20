// state to props
const state = [];

const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}

// dispatch to props
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message)=>{
            dispatch(addMessage(message))
        }
    }
}
