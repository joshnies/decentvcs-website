import { styled } from "solid-styled-components";

export const Root = styled.footer`
  height: ${({ theme }) => theme?.footerHeightMobile};
  padding: 2rem;
  background: ${({ theme }) => theme?.colors.neutral[900]};

  @media screen and (min-width: 768px) {
    padding: 4rem;
    height: ${({ theme }) => theme?.footerHeightDesktop};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme?.maxWidth};
  height: 100%;
  margin: 0 auto;
`;

export const MainGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.colors.neutral[400]};
`;

export const Sitemap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 8rem;
  }
`;

export const SitemapGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.5rem;
  }

  a {
    font-size: 1.25rem;
    color: ${({ theme }) => theme?.colors.neutral[400]};

    &:hover {
      color: ${({ theme }) => theme?.colors.neutral[200]};
    }
  }

  @media screen and (min-width: 768px) {
    gap: 0.25rem;

    h3 {
      font-size: 1.125rem;
    }

    a {
      font-size: 1rem;
    }
  }
`;
