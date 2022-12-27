import { styled } from "solid-styled-components";

export const Root = styled.main<{ loading?: boolean }>`
  height: 100%;
  padding: 2rem;
  margin: 0 auto;
  background: url("/src/assets/home-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme?.maxWidth};
  height: calc(100% - 2.5rem);
  margin: 0 auto;
`;
