import { styled } from "solid-styled-components";

export const Root = styled.section`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  padding: 4rem;
  margin: 0 auto;
  background: ${({ theme }) => theme?.colors.neutral[0]};
  border-radius: 1rem;

  h2 {
    color: ${({ theme }) => theme?.colors.neutral[1000]};
    max-width: 400px;
  }
`;

export const Header = styled.div`
  width: 50%;
`;

export const Details = styled.div`
  width: 50%;

  h3 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 77px;

    background: linear-gradient(90deg, #773ee7 0%, #ed53a1 40%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    span {
      font-size: 2rem;
    }
  }

  ul {
    color: ${({ theme }) => theme?.colors.neutral[1000]};
    font-size: 1.5rem;
    font-weight: 500;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
  }

  li {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    span {
      font-size: 1rem;
    }

    i {
      font-size: 2rem;
      margin-right: 0.5rem;
    }
  }
`;

export const AsteriskGroup = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
`;

export const AsteriskDescription = styled.p`
  color: ${({ theme }) => theme?.colors.neutral[1000]};
  margin-top: 3rem;
`;
