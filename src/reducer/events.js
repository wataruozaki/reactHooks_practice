import * as actionType from "../action/actionTypes";

const events = (state = [], action) => {
  switch (action.type) {
    case actionType.CREATE_EVENT:
      const events = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...events }];
    case actionType.DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case actionType.DELETE_ALL_EVENT:
      return [];
    default:
      return state;
  }
};

export default events;
