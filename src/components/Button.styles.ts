import { styled } from "solid-styled-components";
import { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme, secondary }) =>
    secondary ? theme?.colors.neutral[100] : theme?.colors.primary[200]};
  color: ${({ theme, secondary }) =>
    secondary ? theme?.colors.neutral[600] : theme?.colors.primary[500]};
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme, secondary }) =>
      secondary ? theme?.colors.neutral[300] : theme?.colors.primary[300]};
  }

  &:active {
    opacity: 75%;
  }

  &:focus {
    background: ${({ theme, secondary }) =>
      secondary ? theme?.colors.neutral[300] : theme?.colors.primary[300]};
    border: none;
    outline: none;
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;

    &:hover {
      background: ${({ theme, secondary }) =>
        secondary ? theme?.colors.neutral[200] : theme?.colors.primary[200]};
    }
  }
`;
