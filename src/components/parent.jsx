// components/Parent.js
import React from "react";
import Child from "./child";

function Parent() {
  const users = [
    {
      name: "Kamal",
      age: 25,
      city: "Salem",
    },
    {
      name: "Arun",
      age: 24,
      city: "Chennai",
    },
    {
      name: "Hari",
      age: 23,
      city: "Coimbatore",
    },
    {
      name: "Vijay",
      age: 26,
      city: "Madurai",
    },
    {
      name: "Rahul",
      age: 22,
      city: "Erode",
    },
  ];

  return (
    <div className="parent-container">
      {/* Calling Child Component 5 Times */}
      <Child
        name={users[0].name}
        age={users[0].age}
        city={users[0].city}
      />

      <Child
        name={users[1].name}
        age={users[1].age}
        city={users[1].city}
      />

      <Child
        name={users[2].name}
        age={users[2].age}
        city={users[2].city}
      />

      <Child
        name={users[3].name}
        age={users[3].age}
        city={users[3].city}
      />

      <Child
        name={users[4].name}
        age={users[4].age}
        city={users[4].city}
      />
    </div>
  );
}

export default Parent;