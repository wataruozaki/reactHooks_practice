import React, { useReducer } from "react";
import "../App.css";
import Form from "./Form";
import Memo from "./Memo";
import reducer from "../reducer";
import AppContext from "../contexts/AppContexts";

function App() {
  const initState = {
    events: [],
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Form />
        <Memo />
      </div>
    </AppContext.Provider>
  );
}

export default App;
