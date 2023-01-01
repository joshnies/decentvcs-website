import { styled } from "solid-styled-components";

const ButtonLoadingIcon = styled.span`
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme?.colors.neutral[0]};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s ease-in-out infinite;

  @keyframes rotation {
    0% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(390deg);
    }
  }
`;

export default ButtonLoadingIcon;
