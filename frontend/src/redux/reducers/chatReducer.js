import { ADD_SENT_MESSAGE, ADD_RECEIVED_MESSAGE } from "../actions";

const chatReducer = (state = [], action) => {
  let message;
  let tempState;
  switch (action.type) {
    case ADD_SENT_MESSAGE:
      message = { type: "TO", ...action.payload };
      tempState = [...state, message];
      return tempState;
    case ADD_RECEIVED_MESSAGE:
      message = { type: "FROM", ...JSON.parse(action.payload) };
      tempState = [...state, message];
      return tempState;
    default:
      return [...state];
  }
};

export default chatReducer;
