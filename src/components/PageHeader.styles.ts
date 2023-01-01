import { styled } from "solid-styled-components";

export const Root = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  gap: 0.5rem;
  margin: 4rem 0;

  p {
    margin-top: 1rem;
  }
`;
