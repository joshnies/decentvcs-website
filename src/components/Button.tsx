import { JSX, ParentComponent } from "solid-js";
import { AsProps } from "solid-styled-components";
import ButtonLoadingIcon from "./ButtonLoadingIcon";
import { StyledButton } from "./Button.styles";

type OriginalButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  AsProps;

export interface ButtonProps extends OriginalButtonProps {
  loading?: boolean;
}

const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <StyledButton {...props} disabled={props.disabled || props.loading}>
      {props.loading ? <ButtonLoadingIcon /> : props.children}
    </StyledButton>
  );
};

export default Button;
