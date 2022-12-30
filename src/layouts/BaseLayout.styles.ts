import { styled } from "solid-styled-components";

export const Root = styled.main`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(
    100vh -
      ${({ theme }) => `${theme?.navHeight} - ${theme?.footerHeightMobile}`}
  );
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    min-height: calc(
      100vh -
        ${({ theme }) => `${theme?.navHeight} - ${theme?.footerHeightDesktop}`}
    );
  }
`;
