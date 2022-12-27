import { JSX } from "solid-js";
import { AsProps } from "solid-styled-components";

export type InputWithButtonProps = JSX.InputHTMLAttributes<HTMLInputElement> &
  Pick<JSX.InputHTMLAttributes<HTMLFormElement>, "onSubmit"> &
  AsProps;
