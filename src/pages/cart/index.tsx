import { useMemo } from 'react'
import { useProvider } from 'provider'
import Image from 'next/image'
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline
} from 'react-icons/md'
import { formatPrice } from 'util/format'
import { IProductRequest } from 'services/productsApi'
import Button from 'components/Button'
import * as S from 'components/CartPage'

const Cart: React.FC = () => {
  const { state, updateStock, removeProduct } = useProvider()
  const cart = state.cart?.map(product => ({
    ...product,
    subTotalFormatted: formatPrice(product.price * product.stock)
  }))

  const total = useMemo(
    () =>
      formatPrice(
        state.cart?.reduce(
          (totalSum: number, product: IProductRequest) =>
            totalSum + product.price * product.stock,
          0
        ) as number
      ),
    [state.cart]
  )

  const increment = (product: IProductRequest): void => {
    updateStock(product, product.stock + 1)
  }

  const decrement = (product: IProductRequest): void => {
    updateStock(product, product.stock + -1)
  }

  return (
    <S.Container>
      <S.ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(product => (
            <tr key={product.id}>
              <td>
                <Image
                  src={product.image as string}
                  alt={product.name}
                  layout="fill"
                />
              </td>
              <td>
                <b>{product.name}</b>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <Button
                    type="button"
                    backgroundColor="transparent"
                    onClick={() => decrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </Button>
                  <input
                    type="number"
                    name=""
                    readOnly
                    value={product.stock}
                    id=""
                  />
                  <Button
                    type="button"
                    backgroundColor="transparent"
                    onClick={() => increment(product)}
                  >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </Button>
                </div>
              </td>
              <td>
                <b>{product.subTotalFormatted}</b>
              </td>
              <td>
                <Button
                  type="button"
                  backgroundColor="transparent"
                  onClick={() => removeProduct(product)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.ProductTable>
      <footer>
        <Button type="button" onClick={() => null} spacing="12px">
          <b>Finalizar Pedido</b>
        </Button>
        <S.Total>
          <span>TOTAL</span>
          <b>{total}</b>
        </S.Total>
      </footer>
    </S.Container>
  )
}

export default Cart
