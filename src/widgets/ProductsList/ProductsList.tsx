import { ProductCard } from "../ProductCard"
import styles from "./ProductsList.module.css"
import { Product } from "@/shared"

type ProductsListProps = {
  products: Product[]
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      {products.length === 0 && <span>Продуктов не найдено</span>}
      <ul className={styles.productsList}>
        {products.map((product) => (
          <li className={styles.product} key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </>
  )
}
