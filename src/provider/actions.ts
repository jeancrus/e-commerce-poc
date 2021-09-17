import { initialState } from 'provider'
import { toast } from 'react-toastify'
import { IProductRequest, ProductsProps } from 'services/productsApi'
import { formatPrice } from 'util/format'

interface IAddActionProps {
  product: IProductRequest
  state: typeof initialState.state
  setState: typeof initialState.setState
  amount?: number
}

export const addToCartAction = async ({
  product,
  state,
  setState,
  amount
}: IAddActionProps): Promise<void> => {
  const productsExists = state.cart?.find(item => item.id === product.id)

  const stockAmount =
    state.products?.find(item => item.id === product.id)?.stock ?? 0

  const currentStock = productsExists ? productsExists.stock : 0

  const stock = amount ?? (currentStock as number) + 1

  if (stock > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque!')
    return
  }

  if (productsExists) {
    setState(prevState => ({
      ...prevState,
      cart: prevState.cart?.map(item =>
        item.id === product.id ? { ...item, stock } : item
      )
    }))
  } else {
    const data = {
      ...product,
      stock: 1,
      priceFormatted: formatPrice(product.price)
    }

    toast.success(`${product.name} adicionado com sucesso`)

    setState(prevState => ({
      ...prevState,
      cart: [...(prevState.cart as ProductsProps), data]
    }))
  }
}

export interface IUpdateAmountActionProp extends IAddActionProps {
  stock: number
}

export const updateAmountAction = async ({
  product,
  state,
  setState,
  stock
}: IUpdateAmountActionProp): Promise<void> => {
  if (stock <= 0) return
  const productStock = state.products?.find(item => item.id === product.id)
    ?.stock as number

  if (stock > productStock) {
    toast.error('Quantidade solicitada fora de estoque!')
  } else {
    addToCartAction({ product, state, setState, amount: stock })
  }
}

export const removeProductAction = async ({
  product,
  setState
}: Pick<IUpdateAmountActionProp, 'product' | 'setState'>): Promise<void> => {
  setState(prevState => ({
    ...prevState,
    cart: prevState.cart?.filter(item => item.id !== product.id)
  }))
}
