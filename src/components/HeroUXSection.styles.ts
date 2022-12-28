import { styled } from "solid-styled-components";

export const Root = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  margin: 0 auto;
  padding: 2rem 0;

  color: ${({ theme }) => theme?.colors.neutral[1000]};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;

  h2 {
    margin-top: 0.5rem;
  }

  p {
    margin-top: 2rem;
  }
`;

export const Screen = styled.img`
  width: 100%;
  max-width: 800px;
  height: 100%;
  object-fit: contain;
`;
