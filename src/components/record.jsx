import React, { useEffect, useState } from "react";

function RecordManagement() {

  const [directoryEntries, setDirectoryEntries] =
    useState([]);

  const [candidateName, setCandidateName] =
    useState("");

  const [candidateEmail, setCandidateEmail] =
    useState("");

  const [selectedRecordId, setSelectedRecordId] =
    useState(null);

  // READ (GET)

  useEffect(() => {

    retrieveDirectoryEntries();

  }, []);

  const retrieveDirectoryEntries = async () => {

    try {

      const serviceReply = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const payloadData =
        await serviceReply.json();

      setDirectoryEntries(payloadData);

    } catch (problemNotice) {

      console.log(problemNotice);

    }

  };

  // CREATE (POST)

  const saveNewEntry = async () => {

    if (
      candidateName.trim() === "" ||
      candidateEmail.trim() === ""
    ) {
      return;
    }

    const serviceReply = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({
          name: candidateName,
          email: candidateEmail
        })
      }
    );

    const freshEntry =
      await serviceReply.json();

    setDirectoryEntries([
      ...directoryEntries,
      freshEntry
    ]);

    setCandidateName("");
    setCandidateEmail("");
  };

  // LOAD DATA FOR EDIT

  const prepareEntryModification =
    (chosenEntry) => {

      setCandidateName(
        chosenEntry.name
      );

      setCandidateEmail(
        chosenEntry.email
      );

      setSelectedRecordId(
        chosenEntry.id
      );
    };

  // UPDATE (PUT)

  const applyEntryModification =
    async () => {

      const serviceReply = await fetch(
        `https://jsonplaceholder.typicode.com/users/${selectedRecordId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            id: selectedRecordId,
            name: candidateName,
            email: candidateEmail
          })
        }
      );

      const revisedEntry =
        await serviceReply.json();

      const refreshedDirectory =
        directoryEntries.map(
          (directoryItem) =>
            directoryItem.id ===
            selectedRecordId
              ? revisedEntry
              : directoryItem
        );

      setDirectoryEntries(
        refreshedDirectory
      );

      setCandidateName("");
      setCandidateEmail("");
      setSelectedRecordId(null);
    };

  // DELETE

  const removeDirectoryEntry =
    async (recordIdentifier) => {

      await fetch(
        `https://jsonplaceholder.typicode.com/users/${recordIdentifier}`,
        {
          method: "DELETE"
        }
      );

      const remainingEntries =
        directoryEntries.filter(
          (directoryItem) =>
            directoryItem.id !==
            recordIdentifier
        );

      setDirectoryEntries(
        remainingEntries
      );
    };

  return (

    <div className="management-panel">

      <h1>
        Employee Record Management
      </h1>

      {/* Form Section */}

      <div className="entry-form">

        <input
          type="text"
          placeholder="Enter Name"
          value={candidateName}
          onChange={(event) =>
            setCandidateName(
              event.target.value
            )
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={candidateEmail}
          onChange={(event) =>
            setCandidateEmail(
              event.target.value
            )
          }
        />

        {selectedRecordId ? (
          <button
            onClick={
              applyEntryModification
            }
          >
            Update Record
          </button>
        ) : (
          <button
            onClick={saveNewEntry}
          >
            Add Record
          </button>
        )}

      </div>

      {/* Table Section */}

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {directoryEntries.map(
            (directoryItem) => (

              <tr
                key={directoryItem.id}
              >

                <td>
                  {directoryItem.id}
                </td>

                <td>
                  {directoryItem.name}
                </td>

                <td>
                  {directoryItem.email}
                </td>

                <td>

                  <button
                    className="edit-action"
                    onClick={() =>
                      prepareEntryModification(
                        directoryItem
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-action"
                    onClick={() =>
                      removeDirectoryEntry(
                        directoryItem.id
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );
}

export default RecordManagement;