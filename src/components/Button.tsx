import _ from "lodash";
import { ParentComponent } from "solid-js";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <StyledButton {..._.omit(props, "children")} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
