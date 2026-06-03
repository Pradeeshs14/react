import { useState, useEffect } from "react";

function useEmployeeDirectory(apiEndpoint) {

  const [directoryRecords, setDirectoryRecords] =
    useState([]);

  const [requestInProgress, setRequestInProgress] =
    useState(true);

  const [requestFailure, setRequestFailure] =
    useState(null);

  useEffect(() => {

    const retrieveDirectoryRecords = async () => {

      try {

        const apiResponse =
          await fetch(apiEndpoint);

        if (!apiResponse.ok) {

          throw new Error(
            "Unable to retrieve data"
          );

        }

        const responsePayload =
          await apiResponse.json();

        setDirectoryRecords(
          responsePayload
        );

      } catch (problemDetails) {

        setRequestFailure(
          problemDetails.message
        );

      } finally {

        setRequestInProgress(false);

      }

    };

    retrieveDirectoryRecords();

  }, [apiEndpoint]);

  return {
    directoryRecords,
    requestInProgress,
    requestFailure
  };
}

export default useEmployeeDirectory;