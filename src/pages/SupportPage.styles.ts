import { styled } from "solid-styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Header = styled.header`
  gap: 0.5rem;
  margin-top: 4rem;

  p {
    margin-top: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 4rem auto 16rem;
  max-width: 600px;

  input {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
