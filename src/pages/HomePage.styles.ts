import { styled } from "solid-styled-components";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 74px - 32px);
`;

export const HeroTitle = styled.h1`
  max-width: 50rem;
  text-align: center;
  margin-top: 0.5rem;
`;
