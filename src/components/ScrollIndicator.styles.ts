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
`;

export const Text = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
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
`;
