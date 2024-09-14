import styled, { css } from "styled-components";

export const BottomNavigationContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    border-top: 1px solid ${theme.light};
  `};
`;

export const BottomNavigationItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;
  padding: 12px;
  padding-bottom: 36px;

  ${({ theme }) => css`
    background: ${theme.primary};
  `};
`;

export const BottomNavigationItemLabel = styled.p`
  margin: 0;

  ${({ theme }) => css`
    color: ${theme.light};
  `};
`;
