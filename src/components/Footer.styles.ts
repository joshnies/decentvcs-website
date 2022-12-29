import { styled } from "solid-styled-components";

export const Root = styled.footer`
  height: 450px;
  padding: 4rem;
  background: ${({ theme }) => theme?.colors.neutral[900]};
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
  gap: 8rem;
  margin-top: 2rem;
`;

export const SitemapGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  a {
    color: ${({ theme }) => theme?.colors.neutral[400]};

    &:hover {
      color: ${({ theme }) => theme?.colors.neutral[200]};
    }
  }
`;
