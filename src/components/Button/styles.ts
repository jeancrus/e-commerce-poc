import styled, { css } from 'styled-components'

export interface ICustomButtonProps {
  spacing?: string | number
  backgroundColor?: string
}

export const CustomButton = styled.button<ICustomButtonProps>`
  ${({ theme, spacing, backgroundColor }) => css`
    background: ${backgroundColor ?? theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    padding: ${spacing};

    &:hover {
      opacity: 0.7;
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: ${theme.font.bold};
    }
  `}
`
