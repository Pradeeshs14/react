import React from "react";
import { useSearchParams } from "react-router-dom";

function DirectoryViewer() {

  const workforceRecords = [
    {
      id: 1,
      name: "Arun",
      email: "arun@gmail.com",
      role: "Developer",
      location: "Chennai"
    },
    {
      id: 2,
      name: "Kumar",
      email: "kumar@gmail.com",
      role: "Tester",
      location: "Coimbatore"
    },
    {
      id: 3,
      name: "Ravi",
      email: "ravi@gmail.com",
      role: "Designer",
      location: "Salem"
    },
    {
      id: 4,
      name: "Surya",
      email: "surya@gmail.com",
      role: "Developer",
      location: "Madurai"
    },
    {
      id: 5,
      name: "Vijay",
      email: "vijay@gmail.com",
      role: "HR",
      location: "Erode"
    },
    {
      id: 6,
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "Manager",
      location: "Chennai"
    },
    {
      id: 7,
      name: "Ajay",
      email: "ajay@gmail.com",
      role: "Developer",
      location: "Trichy"
    },
    {
      id: 8,
      name: "Prakash",
      email: "prakash@gmail.com",
      role: "Tester",
      location: "Karur"
    },
    {
      id: 9,
      name: "Manoj",
      email: "manoj@gmail.com",
      role: "Designer",
      location: "Namakkal"
    },
    {
      id: 10,
      name: "Karthik",
      email: "karthik@gmail.com",
      role: "Developer",
      location: "Tiruppur"
    },
    {
      id: 11,
      name: "Dinesh",
      email: "dinesh@gmail.com",
      role: "Tester",
      location: "Chennai"
    },
    {
      id: 12,
      name: "Sathish",
      email: "sathish@gmail.com",
      role: "Manager",
      location: "Salem"
    },
    {
      id: 13,
      name: "Hari",
      email: "hari@gmail.com",
      role: "Developer",
      location: "Coimbatore"
    },
    {
      id: 14,
      name: "Lokesh",
      email: "lokesh@gmail.com",
      role: "HR",
      location: "Madurai"
    },
    {
      id: 15,
      name: "Naveen",
      email: "naveen@gmail.com",
      role: "Designer",
      location: "Erode"
    },
    {
      id: 16,
      name: "Ashwin",
      email: "ashwin@gmail.com",
      role: "Developer",
      location: "Karur"
    },
    {
      id: 17,
      name: "Ganesh",
      email: "ganesh@gmail.com",
      role: "Tester",
      location: "Trichy"
    },
    {
      id: 18,
      name: "Bala",
      email: "bala@gmail.com",
      role: "Manager",
      location: "Chennai"
    },
    {
      id: 19,
      name: "Mohan",
      email: "mohan@gmail.com",
      role: "Developer",
      location: "Salem"
    },
    {
      id: 20,
      name: "Ramesh",
      email: "ramesh@gmail.com",
      role: "HR",
      location: "Coimbatore"
    }
  ];

  const [queryHandler, updateQueryHandler] = useSearchParams();

  const activeSheet =
    Number(queryHandler.get("page")) || 1;

  const entriesPerSheet = 5;

  const firstPosition =
    (activeSheet - 1) * entriesPerSheet;

  const visibleEmployees =
    workforceRecords.slice(
      firstPosition,
      firstPosition + entriesPerSheet
    );

  const finalSheet =
    Math.ceil(
      workforceRecords.length /
      entriesPerSheet
    );

  const moveBackward = () => {

    if (activeSheet > 1) {

      updateQueryHandler({
        page: activeSheet - 1
      });

    }
  };

  const moveForward = () => {

    if (activeSheet < finalSheet) {

      updateQueryHandler({
        page: activeSheet + 1
      });

    }
  };

  return (
    <div className="workspace">

      <h1>Employee Directory</h1>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Location</th>
          </tr>

        </thead>

        <tbody>

          {visibleEmployees.map((staffMember) => (

            <tr key={staffMember.id}>

              <td>{staffMember.id}</td>
              <td>{staffMember.name}</td>
              <td>{staffMember.email}</td>
              <td>{staffMember.role}</td>
              <td>{staffMember.location}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="navigator">

        <button
          onClick={moveBackward}
          disabled={activeSheet === 1}
        >
          Previous
        </button>

        <span>
          Page {activeSheet} of {finalSheet}
        </span>

        <button
          onClick={moveForward}
          disabled={activeSheet === finalSheet}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default DirectoryViewer;