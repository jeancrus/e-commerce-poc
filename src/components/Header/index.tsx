import { MdShoppingBasket } from 'react-icons/md'

import Link from 'next/link'
import { useProvider } from 'provider'
import { useMemo } from 'react'
import * as S from './styles'

export interface IHeaderProps {
  imgSrc?: string
  cartAmount?: number
}

const Header: React.FC<IHeaderProps> = ({
  imgSrc = 'img/svg-ecommerce.svg',
  cartAmount = 0
}) => {
  const { state } = useProvider()

  const cartLength = useMemo(
    () => state.cart?.length || cartAmount,
    [cartAmount, state.cart?.length]
  )

  return (
    <S.Container>
      <Link href="/">
        <S.ImgLink src={imgSrc} alt="Ecommerce" />
      </Link>
      <Link href="/cart">
        <S.Cart>
          <div>
            <b>Meu carrinho</b>
            <span>
              {cartLength > 1 ? `${cartLength} itens` : `${cartLength} item`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </S.Cart>
      </Link>
    </S.Container>
  )
}

export default Header
