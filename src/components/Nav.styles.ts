import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Root = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  margin: 0 auto;
  margin-bottom: 2rem;

  img {
    user-select: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Link = styled(A)`
  color: ${({ theme }) => theme?.colors.neutral[400]};

  &:hover {
    color: ${({ theme }) => theme?.colors.neutral[0]};
  }
`;
