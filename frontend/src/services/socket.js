import { createContext } from "react";

const io = require("socket.io-client");

export function SocketStore() {
  this.URL = "http://127.0.0.1:3005";
  this.messageListeners = [];
  this.socket = null;
  this.initialize = () => {
    if (!this.socket) {
      this.socket = io(this.URL);
      this.socket.on("connect", () => {
        console.log("i am connected", this.socket.id);
      });
      this.socket.on("message", (data) => {
        console.log("received:: ", data);
        this.messageListeners.forEach((listener) => {
          listener(data);
        });
      });
    }
  };
  this.addMessageListener = (listener) => {
    this.messageListeners.push(listener);
    return () => {
      this.messageListeners.filter((l) => l !== listener);
    };
  };
  this.emit = (context, message) => {
    if (this.socket) {
      this.socket.emit(context, message);
    }
  };
}
export const socketContext = createContext(null);
