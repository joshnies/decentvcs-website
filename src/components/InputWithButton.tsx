import _ from "lodash";
import { Component } from "solid-js";
import { Root, StyledButton, StyledInput } from "./InputWithButton.styles";
import { InputWithButtonProps } from "./InputWithButton.types";

/** Input component with embedded button. */
const InputWithButton: Component<InputWithButtonProps> = (props) => {
  let inputRef: HTMLInputElement | undefined;

  /**
   * Called when submitting the form.
   * Calls `props.onSubmit` with the value of the input.
   */
  const onSubmit = (e: Event) => {
    e.preventDefault();

    if (!inputRef) return;

    props.onSubmit(inputRef, inputRef?.value);
  };

  return (
    <Root class={props.class} style={props.style} onSubmit={onSubmit}>
      <StyledInput ref={inputRef} {..._.omit(props, ["style", "onSubmit"])} />
      <StyledButton type="submit">{props.children}</StyledButton>
    </Root>
  );
};

export default InputWithButton;
