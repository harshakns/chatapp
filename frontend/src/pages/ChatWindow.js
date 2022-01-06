import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid } from "@mui/material";

import { socketContext } from "../services/socket.js";
import { addSentMessage, addReceivedMessage } from "../redux/actionCreators";

import MessageStrip from "../components/ChatWindow/MessageStrip";
import SendStrip from "../components/ChatWindow/SendStrip.js";

const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const state = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const socket = useContext(socketContext);
  useEffect(() => {
    socket.initialize();
    socket.addMessageListener((message) => {
      dispatch(addReceivedMessage(message));
    });
  }, [socket, dispatch]);

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSend = () => {
    if (message !== "") {
      //send message
      socket.emit(
        "message",
        JSON.stringify({
          by: socket.socket.id,
          message,
        })
      );
      //update store
      dispatch(addSentMessage({ by: socket.socket.id, message }));
      //clear the input
      setMessage("");
    }
  };

  return (
    <Box sx={{ margin: "0px auto" }}>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item xs={12} lg={8}>
          <div
            style={{
              height: "calc(100vh - 60px)",
              overflowY: "scroll",
              paddingTop: "16px",
              boxSizing: "border-box",
            }}
          >
            {state.map((e, i) => (
              <MessageStrip {...e} key={i} />
            ))}
          </div>
          <SendStrip
            message={message}
            handleInputMessage={handleInputMessage}
            handleSend={handleSend}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatWindow;
