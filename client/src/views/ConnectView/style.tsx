import styled, { css } from "styled-components";

export const ConnectViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 18px;
`;

export const ConnectViewTitle = styled.h1`
  margin: 0;
  font-size: 32px;

  ${({ theme }) => css`
    color: ${theme.light};
  `};
`;

export const ConnectViewDescription = styled.p`
  margin: 0;
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.light};
  `};
`;

export const ConnectViewAvatar = styled.div`
  position: relative;
  height: 24px;
  aspect-ratio: 1/1;
`;
