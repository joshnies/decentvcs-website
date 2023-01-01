import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Root = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  height: ${({ theme }) => theme?.navHeight};
  margin: 0 auto;
  padding: 0 2rem;

  img {
    user-select: none;
  }
`;

export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  color: ${({ theme }) => theme?.colors.neutral[0]};
  background: none;
  border: none;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  margin: 0;
  transition: 0.2s ease-out;
  z-index: 99;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  &:active {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Link = styled(A)<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme?.colors.neutral[0] : theme?.colors.neutral[400]};

  &:hover {
    color: ${({ theme }) => theme?.colors.neutral[0]};
  }
`;
