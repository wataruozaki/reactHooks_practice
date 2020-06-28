import React, { useContext, useState } from "react";
import * as actionTypes from "../action/actionTypes";
import AppContext from "../contexts/AppContexts";

const Form = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.CREATE_EVENT,
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  const addDeleteEvent = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.DELETE_ALL_EVENT });
  };
  return (
    <>
      <h4>Form</h4>
      <form>
        <div>
          <label htmlFor="formEventsTitle">Title : </label>
          <input
            id="formEventsTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="formEventsBody">Body : </label>
          <input
            id="formEventsBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={addEvent}>追加する</button>
        <button onClick={addDeleteEvent} disabled={state.events.length === 0}>
          全て削除する
        </button>
      </form>
    </>
  );
};

export default Form;
