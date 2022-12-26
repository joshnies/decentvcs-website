import { A } from "@solidjs/router";
import { styled } from "solid-styled-components";

export const Root = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  img {
    user-select: none;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 0.5rem;
`;

export const NavTeamName = styled(A)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme?.colors.neutral[400]};
  margin-left: 2rem;

  span {
    color: ${({ theme }) => theme?.colors.neutral[900]};
  }

  &:hover {
    color: ${({ theme }) => theme?.colors.primary[500]};

    span {
      color: ${({ theme }) => theme?.colors.primary[500]};
    }

    i {
      color: ${({ theme }) => theme?.colors.primary[500]};
    }
  }
`;

export const NavTeamNameIcon = styled.i`
  color: ${({ theme }) => theme?.colors.neutral[400]};
  font-size: 1.5rem;
  margin-left: 0.25rem;
`;
