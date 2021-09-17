import { Story, Meta } from '@storybook/react/types-6-0'
import ProductCard, { IProductProps } from '.'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

export const Default: Story<IProductProps> = args => <ProductCard {...args} />

Default.args = {
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
