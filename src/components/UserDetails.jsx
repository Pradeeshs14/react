import React, {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

function UserDetails() {

  // Get URL Parameter

  const { userId } = useParams();

  // Store User Details

  const [userInformation, setUserInformation] =
    useState(null);

  // Fetch User Details

  useEffect(() => {

    fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )

      .then((response) => response.json())

      .then((data) => {

        setUserInformation(data);

      });

  }, [userId]);

  // Loading Message

  if (!userInformation) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="page-container">

      <div className="details-card">

        <h1>{userInformation.name}</h1>

        <p>
          <strong>Username:</strong>
          {userInformation.username}
        </p>

        <p>
          <strong>Email:</strong>
          {userInformation.email}
        </p>

        <p>
          <strong>Phone:</strong>
          {userInformation.phone}
        </p>

        <p>
          <strong>Website:</strong>
          {userInformation.website}
        </p>

        <p>
          <strong>Company:</strong>
          {userInformation.company.name}
        </p>

        <p>
          <strong>City:</strong>
          {userInformation.address.city}
        </p>

        <p>
          <strong>Street:</strong>
          {userInformation.address.street}
        </p>

      </div>

    </div>

  );
}

export default UserDetails;