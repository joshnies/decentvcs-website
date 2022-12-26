import { styled } from "solid-styled-components";
import { InputProps } from "./Input.types";

export const Root = styled.span`
  width: 100%;
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  background: ${({ theme }) => theme?.colors.neutral[100]};
  border: ${({ theme, error }) =>
    error ? `2px solid ${theme?.colors.error[300]}` : "2px solid transparent"};
  border-radius: 0.5rem;
  padding: 0.625rem 0.875rem;
  margin-top: 2rem;
  transition: 0.2s ease-out;

  &:focus {
    border: ${({ theme, error }) =>
      error
        ? `2px solid ${theme?.colors.error[300]}`
        : "2px solid transparent"};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme?.colors.neutral[500]};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme?.colors.neutral[400]};
    user-select: none;
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme?.colors.error[300]};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
