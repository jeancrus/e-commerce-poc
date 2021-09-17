import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: ${theme.border.radius};
    padding: 20px;
    margin: 0 ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    width: 300px;

    img {
      align-self: center;
      max-width: ${theme.spacings.xxlarge};
    }

    > b {
      font-size: ${theme.font.sizes.xmedium};
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      margin: 5px 0 20px;
    }
  `}
`
