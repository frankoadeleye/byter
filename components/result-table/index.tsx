import { useDispatch, useSelector } from "react-redux";
import { BodyData } from "./data";
import ResultTableRow from "./row";
import { useState, useEffect, useCallback } from "react";
import { action } from "typesafe-actions";
import { GET_USERS } from "redux/types";
import ResultTableItem from "./result-table-item";

interface student {
  Number: number;
  StudentName: string;
  Class: string;
  Result: string;
  Score: string;
  Grade: string;
}

function ResultTable() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /*const handleDelete = (id: any) => {};*/

  interface RootState {
    users: any;
  }

  const { isGotUsers, isFailedToGetUsers, response } = useSelector(
    (state: RootState) => state.users
  );

  const onLoad = useCallback(() => {
    setLoading(true);
    dispatch(action(GET_USERS.START, {}, onSuccess, onError));
  }, [setLoading, dispatch]);

  const onSuccess = (message?: string) => {
    setLoading(false);
    setError(false);
  };

  const onError = (message?: any) => {
    setLoading(false);
    setError(true);
    setErrorMessage(message);
  };

  if (isGotUsers) {
    console.log("HERE'S MY RESPONSE=====>", response);
  }

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : isFailedToGetUsers || error ? (
        { errorMessage }
      ) : isGotUsers ? (
        <ResultTableItem>
          {BodyData.map((student: student, key) => {
            return <ResultTableRow key={key} data={student} />;
          })}
        </ResultTableItem>
      ) : (
        "An error Occured"
      )}
    </>
  );
}

export default ResultTable;
