import { styled } from "solid-styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Option = styled.button<{ selected?: boolean }>`
  background: ${({ theme, selected }) =>
    selected ? theme?.colors.neutral[100] : "transparent"};
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme?.colors.neutral[0] : theme?.colors.neutral[400]};
  border-radius: 0.25rem;
  outline: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: 0.2s ease-out;

  color: ${({ theme, selected }) =>
    selected ? theme?.colors.neutral[1000] : theme?.colors.neutral[400]};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme?.colors.neutral[0]};
    border-colors: ${({ theme }) => theme?.colors.neutral[0]};
    color: ${({ theme }) => theme?.colors.neutral[1000]};
  }

  &:focus {
    outline: none;
  }
`;
