import PageMeta from '../../components/PageMeta'
import ProductDetail from './ProductDetail'
import { PRODUCTS } from '../../data/products'
import { BRAND } from '../../config/brand'

const product = PRODUCTS.find((p) => p.id === 'buzz-qr')

export default function BuzzQR() {
  return (
    <>
      <PageMeta
        title={`${product?.name} | Products | ${BRAND.name}`}
        description={product?.shortDescription}
      />
      <ProductDetail product={product} />
    </>
  )
}
