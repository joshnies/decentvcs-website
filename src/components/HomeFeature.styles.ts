import { styled } from "solid-styled-components";

export const Root = styled.div<{ flip?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;

  h2 {
    max-width: 500px;
    margin-top: 0.5rem;
  }

  p {
    max-width: 600px;
    color: ${({ theme }) => theme?.colors.neutral[200]};
  }
`;
