import _ from "lodash";
import { Component, JSX } from "solid-js";
import { AsProps } from "solid-styled-components";
import { Root, StyledButton, StyledInput } from "./InputWithButton.styles";

type OriginalInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & AsProps;

export interface InputWithButtonProps
  extends Omit<OriginalInputProps, "onSubmit"> {
  onSubmit: (ref: HTMLInputElement, value: string) => void;
}

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
