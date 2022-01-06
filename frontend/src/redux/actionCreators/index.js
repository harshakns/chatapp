import { ADD_SENT_MESSAGE, ADD_RECEIVED_MESSAGE } from "../actions";
console.log(ADD_SENT_MESSAGE, ADD_RECEIVED_MESSAGE);
export const addSentMessage = (message) => {
  console.log("add sent", message);
  return {
    type: ADD_SENT_MESSAGE,
    payload: message,
  };
};
export const addReceivedMessage = (message) => {
  return {
    type: ADD_RECEIVED_MESSAGE,
    payload: message,
  };
};
