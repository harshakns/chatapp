import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: theme.spacing(1),
  boxSizing: "border-box",
}));

const Input = styled("input")(({ theme }) => ({
  height: theme.spacing(5),
  width: "80%",
  outline: "none",
  padding: `0px ${theme.spacing(2)}`,
  fontSize: theme.spacing(2),
  border: "2px solid black",
}));
const SButton = styled(Button)(({ theme }) => ({
  width: "20%",
}));

const SendStrip = (props) => {
  const { message, handleInputMessage, handleSend } = props;

  return (
    <Wrapper>
      <Input value={message} onChange={handleInputMessage} />
      <SButton onClick={handleSend} variant="contained">
        SEND
      </SButton>
    </Wrapper>
  );
};
SendStrip.propTypes = {
  message: PropTypes.string.isRequired(),
  handleInputMessage: PropTypes.func.isRequired(),
  handleSend: PropTypes.func.isRequired(),
};
export default SendStrip;
