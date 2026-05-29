import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

function UserList() {

  // Store Users

  const [usersData, setUsersData] = useState([]);

  // Fetch API Data

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => response.json())

      .then((data) => {

        setUsersData(data);

      });

  }, []);

  return (

    <div className="page-container">

      <h1>User List</h1>

      <div className="user-list-container">

        {
          usersData.map((singleUser) => (

            <Link
              key={singleUser.id}
              to={`/user/${singleUser.id}`}
              className="user-card"
            >

              <h3>{singleUser.name}</h3>

              <p>{singleUser.email}</p>

            </Link>

          ))
        }

      </div>

    </div>

  );
}

export default UserList;