import { styled } from "solid-styled-components";

export const Root = styled.section`
  width: 100%;
  height: 36rem;
  background: white;
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme?.maxWidth};
`;
