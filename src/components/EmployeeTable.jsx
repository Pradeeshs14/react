import React from "react";

import useEmployeeDirectory
from "../hooks/useEmployeeDirectory";

function EmployeeTable() {

  const {
    directoryRecords,
    requestInProgress,
    requestFailure
  } = useEmployeeDirectory(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (requestInProgress) {

    return (
      <h2 className="status-message">
        Loading Data...
      </h2>
    );

  }

  if (requestFailure) {

    return (
      <h2 className="error-message">
        {requestFailure}
      </h2>
    );

  }

  return (

    <div className="table-wrapper">

      <h1>
        Employee Information Directory
      </h1>

      <table>

        <thead>

          <tr>

            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>

          </tr>

        </thead>

        <tbody>

          {directoryRecords.map(
            (staffProfile) => (

              <tr
                key={staffProfile.id}
              >

                <td>
                  {staffProfile.name}
                </td>

                <td>
                  {staffProfile.username}
                </td>

                <td>
                  {staffProfile.email}
                </td>

                <td>
                  {staffProfile.phone}
                </td>

                <td>
                  {staffProfile.website}
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
}

export default EmployeeTable;