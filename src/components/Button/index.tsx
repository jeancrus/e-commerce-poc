import { forwardRef } from 'react'
import * as S from './styles'

export interface IButtonProps {
  children?: React.ReactNode
  onClick: (e: unknown) => void
  type?: 'button' | 'submit' | 'reset'
  spacing?: string | number
  backgroundColor?: string
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }, ref) => (
    <S.CustomButton {...props} ref={ref}>
      {children}
    </S.CustomButton>
  )
)

export default Button
