import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

const LinkButton = styled(A)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${({ theme }) => theme?.colors.neutral[0]};
  font-weight: 500;
  padding: 0.5rem 1.125rem;
  border-radius: 2.625rem;
  border: 1px solid ${({ theme }) => theme?.colors.neutral[0]};
  transition: 0.2s ease-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme?.colors.neutral[0]};
    color: ${({ theme }) => theme?.colors.neutral[1000]};
  }

  &:active {
    opacity: 75%;
  }

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`;

export default LinkButton;
