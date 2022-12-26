import { styled } from "solid-styled-components";

export const Root = styled.main<{ loading?: boolean }>`
  height: 100%;
  padding: 2rem;
`;

export const Content = styled.div`
  display: flex;
  height: calc(100% - 2.5rem);
`;
