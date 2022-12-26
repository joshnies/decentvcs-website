import { Component } from "solid-js";

import { StyledInput, ErrorText, Root } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: Component<InputProps> = (props) => {
  return (
    <Root>
      <StyledInput {...props} />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </Root>
  );
};

export default Input;
