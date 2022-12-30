import { styled } from "solid-styled-components";

const breakpoint = "1211px";

export const Root = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme?.colors.neutral[1000]};

  @media screen and (min-width: ${breakpoint}) {
    flex-direction: row;
    gap: 2rem;
    padding: 2rem;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-top: 0.5rem;
  }

  p {
    margin-top: 2rem;
  }

  @media screen and (min-width: ${breakpoint}) {
    max-width: 450px;
  }
`;

export const Screen = styled.img`
  width: 100%;
  max-width: 800px;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;

  @media screen and (min-width: ${breakpoint}) {
    margin: 0;
  }
`;
