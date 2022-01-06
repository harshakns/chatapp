import React from "react";
import ChatWindow from "./pages/ChatWindow.js";
import { socketContext, SocketStore } from "./services/socket.js";
import reducers from "./redux/reducers";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const Store = new SocketStore();
const rootReducer = combineReducers(reducers);
const reduxStore = createStore(rootReducer);
console.log("reducers", reducers);
console.log("reduxStore", reduxStore);

function App() {
  return (
    <Provider store={reduxStore}>
      <socketContext.Provider value={Store}>
        <ChatWindow />
      </socketContext.Provider>
    </Provider>
  );
}

export default App;
