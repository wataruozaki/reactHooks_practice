import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContexts";

const Memo = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>イベント一覧</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Memo;
