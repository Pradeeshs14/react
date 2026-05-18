import React, { useState } from "react";

function Task3() {

  // Conditional Rendering State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Array Data for List Rendering
  const users = [
    {
      id: 1,
      name: "Kamal",
      city: "Salem",
    },
    {
      id: 2,
      name: "Arun",
      city: "Chennai",
    },
    {
      id: 3,
      name: "Pradeesh",
      city: "Coimbatore",
    },
    {
      id: 4,
      name: "Abhi",
      city: "Madurai",
    },
    {
      id: 5,
      name: "cheak",
      city: "Erode",
    },
  ];

  return (
    <div className="container">

      <h1>Conditional Rendering & List Rendering</h1>

      {/* Conditional Rendering */}

      <div className="login-section">

        {
          isLoggedIn ? (
            <h2>Welcome Back User ✅</h2>
          ) : (
            <h2>Please Login </h2>
          )
        }

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {
            isLoggedIn ? "Logout" : "Login"
          }
        </button>

      </div>

      {/* List Rendering */}

      <div className="card-container">

        {
          users.map((user) => (
            <div className="card" key={user.id}>

              <h2>{user.name}</h2>

              <p>City: {user.city}</p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Task3;