import { styled } from "solid-styled-components";

export const Content = styled.section`
  background: ${({ theme }) => theme?.colors.neutral[1000]};
  padding: 4rem 4rem 8rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;

  input {
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
