import LoadingOverlay from 'react-loading-overlay'
import styled, { css } from 'styled-components'

export interface ILoading {
  active?: boolean
}

export const Loader = styled(LoadingOverlay)<ILoading>`
  ${({ active }) =>
    active &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      &.MyLoader_wrapper {
        position: absolute;
      }
    `}
`
