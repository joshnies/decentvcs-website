import { styled } from "solid-styled-components";
import { Button } from "./Buttons";

export const Root = styled.form`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: transparent;
  color: white;
  border: 1px solid ${({ theme }) => theme?.colors.neutral[400]};
  border-radius: 100px;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  outline: none;
  transition: 0.2s ease-out;

  &:focus {
    border-color: ${({ theme }) => theme?.colors.neutral[0]};
  }

  ::placeholder {
    color: ${({ theme }) => theme?.colors.neutral[400]};
  }
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 0.375rem;
  right: 0.5rem;
  z-index: 2;
`;
