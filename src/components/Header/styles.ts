import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${theme.colors.darkBlack};
    height: 100px;
    padding: 0 20px;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Cart = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    div {
      text-align: right;
      margin-right: 10px;

      b {
        display: block;
        color: ${theme.colors.white};
      }

      span {
        font-size: ${theme.font.sizes.xsmall};
        color: ${theme.colors.gray};
      }
    }
  `}
`

export const ImgLink = styled.img`
  cursor: pointer;
`
