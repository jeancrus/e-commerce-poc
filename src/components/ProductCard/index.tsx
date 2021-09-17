import Image from 'next/image'
import Button from 'components/Button'
import { MdAddShoppingCart } from 'react-icons/md'
import { IProductRequest } from 'services/productsApi'
import * as S from './styles'

export interface IProductProps {
  product: IProductRequest
  handleAddProduct: (product: IProductRequest) => void
  hasStock?: number
}

const ProductCard: React.FC<IProductProps> = ({
  product,
  handleAddProduct,
  hasStock
}) => (
  <S.Wrapper>
    <Image
      src={product.image as string}
      alt={product.name}
      width={240}
      height={300}
    />
    <strong>{product.name}</strong>
    <span>{product.priceFormatted}</span>
    <Button type="button" onClick={() => handleAddProduct(product)}>
      <div>
        <MdAddShoppingCart size={16} color="#fff" />
        {hasStock ? product.stock - hasStock : product.stock}
      </div>
      <span>ADICIONAR AO CARRINHO</span>
    </Button>
  </S.Wrapper>
)

export default ProductCard
