import { styled } from "solid-styled-components";

const width = 150;

export const Root = styled.div`
  position: absolute;
  bottom: 4rem;
  left: calc(50% - ${`${width / 2}px`});

  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${`${width}px`};
  animation: fadeInScrollIndicator 0.5s ease-in-out;
  animation-delay: 0.75s;
  animation-fill-mode: both;

  @keyframes fadeInScrollIndicator {
    0% {
      opacity: 0;
      transform: translateY(1rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const TouchIndicator = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme?.colors.neutral[0]};
  border-radius: 100px;
  animation: scroll 2s infinite;
  transform: translateY(20px);

  @keyframes scroll {
    0% {
      transform: translateY(20px);
      opacity: 1;
    }
    90% {
      transform: translateY(0);
      opacity: 0;
    }
    91% {
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
    }
  }
`;

export const DesktopIndicator = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme?.colors.neutral[0]};
  border-radius: 100px;
`;

export const DesktopIndicatorLine = styled.div`
  border-left: 1px solid ${({ theme }) => theme?.colors.neutral[0]};
  height: 13px;
  margin: 8px;
  animation: scroll 2s infinite;

  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    90% {
      transform: translateY(20px);
      opacity: 0;
    }
    91% {
      transform: translateY(0);
    }
    100% {
      opacity: 1;
    }
  }
`;
