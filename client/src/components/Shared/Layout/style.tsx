import styles from "@/styles";
import styled, { css } from "styled-components";

// Telegram will not be able to take in 100vw;
export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${styles.breakpoints.medium}) {
    flex-direction: row;
    align-items: flex-start;
  }

  ${({ theme }) => css`
    background: ${theme.primary};
  `};
`;

export const LayoutContent = styled.div<{
  topOffset: number;
  bottomOffset: number;
}>`
  position: relative;
  width: 100%;
  padding: 12px 24px;
  box-sizing: border-box;

  overflow-y: auto;
  overflow-x: hidden;

  ${({ topOffset, bottomOffset }) => css`
    min-height: calc(
      100vh - ${topOffset}px - ${bottomOffset}px
    ); /* old browsers */
    min-height: calc(
      100dvh - ${topOffset}px - ${bottomOffset}px
    ); /* new browsers */

    max-height: calc(
      100vh - ${topOffset}px - ${bottomOffset}px
    ); /* old browsers */
    max-height: calc(
      100dvh - ${topOffset}px - ${bottomOffset}px
    ); /* new browsers */

    margin-top: ${topOffset}px;
  `}
`;
