import { styled } from "solid-styled-components";
import InputWithButton from "./InputWithButton";

export const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const StyledInputWithButton = styled(InputWithButton)`
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
