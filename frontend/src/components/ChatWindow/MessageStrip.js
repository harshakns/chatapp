import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const Wrapper = styled("div", { shouldForwardProp: (prop) => prop !== "type" })(
  ({ theme, type }) => ({
    display: "flex",
    justifyContent: type === "TO" ? "flex-end" : "flex-start",
    width: "100%",
    padding: `${theme.spacing(0.25)} ${theme.spacing(0.5)}`,
    boxSizing: "border-box",
  })
);

const ChatBox = styled("div", { shouldForwardProp: (prop) => prop !== "type" })(
  ({ theme, type }) => ({
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor:
      type === "TO" ? theme.palette.primary.main : theme.palette.grey[200],
    color:
      type === "TO"
        ? theme.palette.primary.contrastText
        : theme.palette.common.black,
    maxWidth: "75%",
    wordWrap: "break-word",
  })
);

const MessageStrip = (props) => {
  const { message, by, type } = props;
  const el = useRef(null);
  useEffect(() => {
    if (el) {
      el.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  return (
    <Wrapper ref={el} type={type}>
      <ChatBox type={type}>{message}</ChatBox>
    </Wrapper>
  );
};

MessageStrip.propTypes = {
  message: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default MessageStrip;
