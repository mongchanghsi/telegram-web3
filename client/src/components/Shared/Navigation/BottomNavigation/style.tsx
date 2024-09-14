import styled from "styled-components";

export const BottomNavigationContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  align-items: center;
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
  background-color: red;
`;

export const BottomNavigationItemLabel = styled.p`
  margin: 0;
`;
