import { styled } from "solid-styled-components";
import InputWithButton from "./InputWithButton";

export const Root = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 2rem;
  margin: 12rem auto;
  max-width: ${({ theme }) => theme?.maxWidth};

  h2 {
    max-width: 500px;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  p {
    max-width: 600px;
    color: ${({ theme }) => theme?.colors.neutral[200]};
  }
`;

export const StyledInputWithButton = styled(InputWithButton)`
  width: 400px;
`;
