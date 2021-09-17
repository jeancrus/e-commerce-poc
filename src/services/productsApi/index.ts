import { StateProps } from 'provider'
import api from '..'

export type ProductsProps = Array<IProductRequest>

export type ParamProps = {
  url: string
  setState: React.Dispatch<React.SetStateAction<Partial<StateProps>>>
}

export interface IProductRequest {
  createdAt: string | Date
  id: string
  image?: string
  name: string
  price: number
  priceFormatted?: string
  stock: number
}

export const getProducts = async ({
  url,
  setState
}: ParamProps): Promise<ProductsProps> => {
  setState(prevState => ({ ...prevState, loading: true }))

  const { data: response } = await api.get(url)

  setState(prevState => ({ ...prevState, loading: false, products: response }))

  return response
}
