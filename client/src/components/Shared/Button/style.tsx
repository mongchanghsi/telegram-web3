import styled, { css } from "styled-components";

// TODO: Handle different sizing and variant later
export const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 12px;
  font-size: 18px;
  border-radius: 12px;

  ${({ theme }) => css`
    color: ${theme.secondary};
    background: ${theme.light};
  `};
`;
