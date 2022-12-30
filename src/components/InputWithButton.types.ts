import { JSX } from "solid-js";
import { AsProps } from "solid-styled-components";

type OriginalInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & AsProps;

export interface InputWithButtonProps
  extends Omit<OriginalInputProps, "onSubmit"> {
  onSubmit: (ref: HTMLInputElement, value: string) => void;
}
