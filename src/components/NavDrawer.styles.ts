import { styled } from "solid-styled-components";

export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  z-index: 98;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: ${({ theme }) => theme?.colors.neutral[1000]};
  transition: 0.2s ease-out;

  a {
    font-size: 2rem;
    color: ${({ theme }) => theme?.colors.neutral[400]};

    &:hover {
      color: ${({ theme }) => theme?.colors.neutral[0]};
    }
  }
`;
