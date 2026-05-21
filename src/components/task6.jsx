import React, { useEffect, useState } from "react";

function Task6() {

  // State for API Data

  const [users, setUsers] = useState([]);

  // Fetch API Data

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => {
        setUsers(data);
      });

  }, []);

  return (

    <div className="container">

      <h1>User Details from API</h1>

      <div className="card-container">

        {
          users.map((user) => (

            <div className="card" key={user.id}>

              <h2>{user.name}</h2>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

              <p>
                <strong>Website:</strong> {user.website}
              </p>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Task6;