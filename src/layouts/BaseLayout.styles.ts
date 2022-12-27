import { styled } from "solid-styled-components";

export const Root = styled.main<{ loading?: boolean }>`
  max-width: 1440px;
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  height: calc(100% - 2.5rem);
`;
