import { createContext, useState, useContext } from 'react'
import type { AppProps } from 'next/app'

import options from 'config'
import { SWRConfig } from 'swr'

import { IProductRequest, ProductsProps } from 'services/productsApi'
import {
  addToCartAction,
  removeProductAction,
  updateAmountAction
} from './actions'

export interface StateProps {
  cart: ProductsProps
  loading: boolean
  products: ProductsProps
}

const initialState = {
  state: {
    loading: false,
    cart: [],
    products: []
  } as Partial<StateProps>,
  setState: {} as React.Dispatch<React.SetStateAction<Partial<StateProps>>>
}

const Context = createContext(initialState)

const Provider: React.FC<
  AppProps & {
    value: Partial<StateProps>
  }
> = ({ children, value = {} as StateProps }) => {
  const [state, setState] = useState(value)

  return (
    <SWRConfig value={options}>
      <Context.Provider value={{ state, setState }}>
        {children}
      </Context.Provider>
    </SWRConfig>
  )
}

export type ProviderProps = typeof initialState & {
  addToCart: (product: IProductRequest) => Promise<void>
  updateStock: (product: IProductRequest, stock: number) => Promise<void>
  removeProduct: (product: IProductRequest) => Promise<void>
}

const useProvider = (): ProviderProps => {
  const { state, setState } = useContext(Context)

  const addToCart = (product: IProductRequest): Promise<void> =>
    addToCartAction({ product, state, setState })

  const updateStock = (
    product: IProductRequest,
    stock: number
  ): Promise<void> => updateAmountAction({ product, state, setState, stock })

  const removeProduct = (product: IProductRequest): Promise<void> =>
    removeProductAction({ product, setState })

  return { state, setState, addToCart, updateStock, removeProduct }
}

export { useProvider, Context, initialState }

export default Provider
