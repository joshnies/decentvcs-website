import { JSX } from "solid-js";
import { AsProps } from "solid-styled-components";

type OriginalButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  AsProps;

export interface ButtonProps extends OriginalButtonProps {
  loading?: boolean;
}
