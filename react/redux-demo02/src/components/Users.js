import React, { useEffect, useState } from 'react';

function Users() {
  const [userDetails, setUserDetails] = useState([]);
  const handleButtonClick = () => {
    // action creator
  }

  return (
    <div className="container">
      <button className="btn" value="click me" onClick={handleButtonClick}>
        Fetch Data
      </button>

      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
          {
            userDetails && userDetails.map((item, key) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.website}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users;
