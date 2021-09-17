import { screen } from '@testing-library/react'
import { renderWithTheme } from 'util/helpers'

import ProductCard from '.'

const args = {
  handleAddProduct: () => null,
  product: {
    createdAt: '2019-09-02T12:58:54.103Z',
    id: '1',
    image: 'http://lorempixel.com/640/480/food',
    name: 'Rustic Metal Fish',
    price: 289.0,
    stock: 65171
  },
  hasStock: 1
}

describe('<ProductCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProductCard {...args} />)

    expect(screen.getByText('Rustic Metal Fish')).toBeInTheDocument()
  })
})
