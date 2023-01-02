import { styled } from "solid-styled-components";

export const Content = styled.section`
  background: ${({ theme }) => theme?.colors.neutral[1000]};
  padding: 4rem 2rem 8rem;

  @media screen and (min-width: 768px) {
    padding: 4rem 0 8rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;

  button[type="submit"] {
    width: 100%;
  }

  input {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    button[type="submit"] {
      width: 170px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
