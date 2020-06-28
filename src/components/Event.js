import React, { useContext } from "react";
import * as actionTypes from "../action/actionTypes";
import AppContext from "../contexts/AppContexts";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const id = event.id;
  const deleteEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.DELETE_EVENT,
      id,
    });
  };
  return (
    <>
      <tr>
        <th>{id}</th>
        <th>{event.title}</th>
        <th>{event.body}</th>
        <button onClick={deleteEvent}>削除</button>
      </tr>
    </>
  );
};

export default Event;
