import styled, { css } from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  border-radius: 12px;

  ${({ theme }) => css`
    background: ${theme.light};
  `};
`;

export const ProfileAvatar = styled.div`
  position: relative;
  height: 32px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileDummyAvatar = styled.div`
  background-color: blue;
  height: 100%;
  width: 100%;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProfileItem = styled.p`
  margin: 0;
  font-size: 14px;

  ${({ theme }) => css`
    color: ${theme.secondary};
  `};
`;
