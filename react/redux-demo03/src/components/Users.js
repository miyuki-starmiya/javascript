import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../actions/users';
import { connect } from 'react-redux';

function Users({ getUserDetails, userReducer }) {

  const [userDetails, setUserDetails] = useState([]);

  const handleButtonClick = () => {

      //make a call to the Action creator
      console.log("Step 1: Make a call to Action-creator from Users Component");
      getUserDetails();
  }

  useEffect(() => {

      // Update the UI as soon as we get our response through API call
      console.log("Step 5: Inside UseEffect of User Component to update the UI")
      setUserDetails(userReducer.userDetails.data);
  }, [userReducer.userDetails])

  return (
      <div className="container">
        .....
      </div>
  )
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer
});

const mapDispatchToProps = {
  getUserDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

