import _ from "lodash";
import { Root, StyledButton, StyledInput } from "./InputWithButton.styles";
import { InputWithButtonProps } from "./InputWithButton.types";

/** Input component with embedded button. */
export default function InputWithButton(props: InputWithButtonProps) {
  return (
    <Root class={props.class} style={props.style} onSubmit={props.onSubmit}>
      <StyledInput {..._.omit(props, ["style", "onClick"])} />
      <StyledButton type="submit">{props.children}</StyledButton>
    </Root>
  );
}
