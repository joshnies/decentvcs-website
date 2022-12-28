import { styled } from "solid-styled-components";
import InputWithButton from "../components/InputWithButton";

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -9999;
`;

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

export const HeroSubtitle = styled.h4`
  animation: fadeInHeroSubtitle 0.25s ease-in-out;

  @keyframes fadeInHeroSubtitle {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    100% {
      opacity: 0.5;
      transform: translateY(0);
    }
  }
`;

export const HeroTitle = styled.h1`
  max-width: 50rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  animation: fadeInHeroTitle 0.5s ease-in-out;
  animation-delay: 0.125s;
  animation-fill-mode: both;

  @keyframes fadeInHeroTitle {
    0% {
      opacity: 0;
      transform: translateY(-1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeroWaitlistInput = styled(InputWithButton)`
  width: 400px;
  animation: fadeInWaitlistInput 0.5s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: both;

  @keyframes fadeInWaitlistInput {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
