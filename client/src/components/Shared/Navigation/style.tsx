import styled, { css } from "styled-components";

export const NavigationContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationLogo = styled.div`
  position: relative;
  height: 32px;
  aspect-ratio: 1/1;
`;

export const NavigationWallet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;
`;

export const NavigationAddress = styled.p`
  margin: 0;

  ${({ theme }) => css`
    color: ${theme.light};
  `};
`;

export const NavigationDisconnect = styled.button`
  position: relative;
  height: 18px;
  aspect-ratio: 1/1;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
