import { JSX } from "solid-js";
import { AsProps } from "solid-styled-components";

type OriginalInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & AsProps;
export interface InputProps extends OriginalInputProps {
  error?: string;
}
