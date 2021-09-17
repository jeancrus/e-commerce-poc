import styled, { css } from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
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
