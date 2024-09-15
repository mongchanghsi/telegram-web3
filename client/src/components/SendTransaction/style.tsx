import { css, styled } from "styled-components";

export const SendTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const SendTransactionText = styled.p`
  margin: 0;
  font-size: 18px;

  ${({ theme }) => css`
    color: ${theme.light};
  `};
`;
