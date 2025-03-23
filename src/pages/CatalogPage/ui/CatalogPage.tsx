import { useEffect } from "react"
import {
  fetchProducts,
  selectProducts,
} from "../../../app/store/productsSlice"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import styles from "./CatalogPage.module.css"
import { ErrorMessage, Loading } from "@/shared"
import { ProductCard } from "@/widgets/ProductCard"

export const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const { products, error, status } = useAppSelector(selectProducts)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts())
    }
  }, [status])

  return (
    <>
      <h1>Products</h1>
      {status === "loading" && <Loading />}
      {status === "fail" && <ErrorMessage message={error} />}
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
