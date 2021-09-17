import { useMemo } from 'react'
import useSwr from 'swr'
import { formatPrice } from 'util/format'
import { useProvider } from 'provider'
import { getProducts, IProductRequest } from 'services/productsApi'

import ProductCard from 'components/ProductCard'
import * as S from './styles'

const Main: React.FC = () => {
  const { state, setState, addToCart } = useProvider()

  const { data } = useSwr('/product', (url: string) =>
    getProducts({ url, setState })
  )

  const products = useMemo(
    () =>
      data?.map(
        product =>
          ({
            ...product,
            priceFormatted: formatPrice(product.price)
          } || [])
      ),
    [data]
  )

  const handleAddProduct = async (product: IProductRequest): Promise<void> => {
    await addToCart(product)
  }

  return (
    <S.Wrapper>
      <S.ProductList>
        {products?.map(product => {
          const hasStock = state.cart?.find(
            item => item.id === product.id
          )?.stock

          return (
            <ProductCard
              key={product.id}
              {...{ hasStock, handleAddProduct, product }}
            />
          )
        })}
      </S.ProductList>
    </S.Wrapper>
  )
}

export default Main
