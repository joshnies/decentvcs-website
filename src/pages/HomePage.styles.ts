import { styled } from "solid-styled-components";
import InputWithButton from "../components/InputWithButton";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(
    100vh - ${({ theme }) => `${theme?.navHeight} - ${theme?.footerHeight}`}
  );
  padding-top: 15vh;
`;

export const HeroTitle = styled.h1`
  max-width: 50rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;

export const HeroWaitlistInput = styled(InputWithButton)`
  width: 400px;
`;
