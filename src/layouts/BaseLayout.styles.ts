import { styled } from "solid-styled-components";

export const Root = styled.main`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(
    100vh - ${({ theme }) => `${theme?.navHeight} - ${theme?.footerHeight}`}
  );
  margin: 0 auto;
`;
